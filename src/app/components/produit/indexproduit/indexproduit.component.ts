import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { categorie } from 'src/app/models/categorie.model';
import { CategorieService } from 'src/app/services/categorie.service';
import { SouscategorieService } from 'src/app/services/souscategorie.service';
import { product } from "../../../models/produit.model";
import { souscategorie } from "../../../models/souscategorie.model";
import { ProduitService } from "../../../services/produit.service";

@Component({
  selector: 'app-indexproduit',
  templateUrl: './indexproduit.component.html',
  styleUrls: ['./indexproduit.component.css']
})
export class IndexproduitComponent implements OnInit {



  form!: FormGroup;
  submitted = false;
 imageSrc: string = '';
  products: product[] = [];
  souscategories: souscategorie[] = [];

  souscategorie={
    Titre:'',
    id: '',
  }
  categories: categorie[] = [];

  categorie={
    Name:'',
    id: '',
  }

  constructor(private produitService:ProduitService , private souscategorieService:SouscategorieService,private categorieService:CategorieService, private router: Router,  private route: ActivatedRoute) {}

  ngOnInit(): void {


 
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      Description: new FormControl('', Validators.required ),
      file: new FormControl(null, Validators.required),
      prixuht: new FormControl('', Validators.required),
      qte: new FormControl('', Validators.required),
     // fileSource: new FormControl('', [Validators.required]),
      Titre:new FormControl('',[Validators.required]),
      souscategorie:new FormControl('',[Validators.required]),
      Name:new FormControl('',[Validators.required]),
      categorie: new FormControl('', Validators.required),


    });

    this.categorieService.getAllData().subscribe((data: categorie[])=>{
      this.categories = data;
      console.log(this.categories);
    })  

    this.souscategorieService.getAllData().subscribe((data: souscategorie[])=>{
      this.souscategories = data;
      console.log(this.souscategories);
    })  
    this.produitService.all().subscribe((data: product[])=>{
      this.products = data;
      console.log(this.products);
    })  
  }

  
  produit2:any ={
    valid :false,
    status:"archiver"

  }


  archiver(id: any) {
    this.produitService.update(id, this.produit2).subscribe((res:any) => {
      alert('votre produit est archiver avec succes! ');
      this.ngOnInit()
 })
  }
  term: any;
  term1 = {
    c :""
  }
  click(){
    this.term = this.term1
  }

  selectedFile: File = null
  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ file: file });
    this.form.get('file').updateValueAndValidity();
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }
  get f(){
    return this.form.controls;
  }

  submit(){
    /*
          this.produitService.upload(this.form.value).subscribe((res:any) => {
            console.log(res);
            
    
       })*/
       const formData = new FormData();
       formData.append('file', this.form.value.file)
       formData.append('name', this.form.value.name)
       formData.append('Description', this.form.value.Description)
       formData.append('prixuht', this.form.value.prixuht)
       formData.append('qte', this.form.value.qte)
       formData.append('Titre', this.form.value.Titre)
       formData.append('souscategorie', this.form.value.souscategorie)
       formData.append('categorie', this.form.value.categorie)
    
    
    console.log(this.form.value);
          this.submitted = true;
          
          
            this.produitService.create(formData).subscribe((res:any) => {
              alert('Product created successfully!');
              this.router.navigateByUrl('product/index');
              
         });
      
          }

}
