import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from "../../../services/produit.service";
import { product} from "../../../models/produit.model";
import { souscategorie } from 'src/app/models/souscategorie.model';
import { SouscategorieService } from 'src/app/services/souscategorie.service';
import { categorie } from 'src/app/models/categorie.model';
import { CategorieService } from 'src/app/services/categorie.service';
@Component({
  selector: 'app-editproduit',
  templateUrl: './editproduit.component.html',
  styleUrls: ['./editproduit.component.css']
})
export class EditproduitComponent implements OnInit {
selected:any;
  id!: string;
  product!: product;
  souscategories: souscategorie[] = [];

  souscategorie={
    Titre:'',
    id: '',
  }
  form!: FormGroup;
  submitted = false;
  categories: categorie[] = [];

  categorie={
    Name:'',
    id: '',
  }
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router,private souscategorieService:SouscategorieService,private categorieService:CategorieService,
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];
    this.produitService.find(this.id).subscribe((data: product)=>{
      this.product = data;
    }); 
    this.categorieService.getAllData().subscribe((data: categorie[])=>{
      this.categories = data;
      console.log(this.categories);
    }) 
    this.souscategorieService.getAllData().subscribe((data: souscategorie[])=>{
      this.souscategories = data;
      console.log(this.souscategories);
    })  
    this.form = new FormGroup({

      name: new FormControl('', Validators.required),
        Description: new FormControl('', Validators.required ),
       // file: new FormControl('', Validators.required),
        prixuht: new FormControl('', Validators.required),
        qte: new FormControl('', Validators.required),
        souscategorie:new FormControl('',[Validators.required]),
        categorie:new FormControl('',[Validators.required]),


       });
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
  // selectedFile: File = null
  // onFilePicked(event: Event) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.form.patchValue({ file: file });
  //   this.form.get('file').updateValueAndValidity();
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  // }
  
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    this.submitted = true;
    if (this.form.invalid) {
      alert("PLEASE VERIFY YOUR INFORMATIONS!!" );

    }
    else {
      this.produitService.update(this.id, this.form.value).subscribe((res:any) => {
        alert('Product updated successfully!');
        this.router.navigateByUrl('product/index');
   })

   
    }

   


   
  }


}
