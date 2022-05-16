import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/produit.model';
import { ProduitService } from "../../../services/produit.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { souscategorie } from 'src/app/models/souscategorie.model';
import {SouscategorieService } from "../../../services/souscategorie.service";
import { categorie } from 'src/app/models/categorie.model';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-createproduit',
  templateUrl: './createproduit.component.html',
  styleUrls: ['./createproduit.component.css']
})
export class CreateproduitComponent implements OnInit {
  
  form!: FormGroup;
  submitted = false;
 imageSrc: string = '';
 url: any; //Angular 11, for stricter type
  products: product[] = [];
  categories: categorie[] = [];

  souscategories: souscategorie[] = [];
  souscategorie={
    Titre:'',
    id: '',
  }
  categorie={
    Name:'',
    id: '',
  }
  constructor(private produitService:ProduitService, private router: Router,private souscategorieService:SouscategorieService,   
     private route: ActivatedRoute,private categorieService:CategorieService,

    ) { }

    ngOnInit(): void {

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
        file: new FormControl(null, Validators.required),
        prixuht: new FormControl('', Validators.required),
        qte: new FormControl('', Validators.required),
       // fileSource: new FormControl('', [Validators.required]),
        Titre:new FormControl('',[Validators.required]),
        souscategorie:new FormControl('',[Validators.required]),
        Name:new FormControl('',[Validators.required]),
        categorie: new FormControl('', Validators.required),


      });

      

      
    }
  
    get f(){
      return this.form.controls;
    }






    
  
	/*msg = "";*/
	
	//selectFile(event) { //Angular 8
//	selectFile(event: Event) { //Angular 11, for stricter type





		// if(!event.target.files[0] || event.target.files[0].length == 0) {
		// 	this.msg = 'You must select an image';
		// 	return;
		// }
		
		// var mimeType = event.target.files[0].type;
		
		// if (mimeType.match(/image\/*/) == null) {
		// 	this.msg = "Only images are supported";
		// 	return;
		// }
		
		// var reader = new FileReader();
		// reader.readAsDataURL(event.target.files[0]);
		
		// reader.onload = (_event) => {
		// 	this.msg = "";
		// 	this.url = reader.result; 
		// }
//	}




selectedFile: File = null
onFilePicked(event: Event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.form.patchValue({ file: file });
  this.form.get('file').updateValueAndValidity();
  const reader = new FileReader();
  reader.readAsDataURL(file);
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



