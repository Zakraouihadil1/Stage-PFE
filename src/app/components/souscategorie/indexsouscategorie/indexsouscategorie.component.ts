import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { categorie } from 'src/app/models/categorie.model';
import { souscategorie } from 'src/app/models/souscategorie.model';
import { CategorieService } from 'src/app/services/categorie.service';
import { SouscategorieService } from "../../../services/souscategorie.service";

@Component({
  selector: 'app-indexsouscategorie',
  templateUrl: './indexsouscategorie.component.html',
  styleUrls: ['./indexsouscategorie.component.css']
})
export class IndexsouscategorieComponent implements OnInit {

  
  
  form!: FormGroup;
  submitted = false;

  souscategories: souscategorie[] = [];
  categories: categorie[] = [];

  categorie={
    Name:'',
    id: '',
  }

  constructor(private souscategorieService:SouscategorieService,private categorieService:CategorieService, private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      Titre: new FormControl('', Validators.required),
      categorie: new FormControl('', Validators.required),



    });
    
    this.souscategorieService.getAllData().subscribe((data: souscategorie[])=>{
      this.souscategories = data;
      console.log(this.souscategories);
    })  
    this.categorieService.getAllData().subscribe((data: categorie[])=>{
      this.categories = data;
      console.log(this.categories);
    })  
  }

 
  souscategorie2:any ={
    valid :false,
    status:"archiver"

  }


  archiver(id: any) {
    this.souscategorieService.update(id, this.souscategorie2).subscribe((res:any) => {
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

  get f(){
    return this.form.controls;
  }

  submit(){

   const formData = new FormData();
   
    formData.append('Titre', this.form.value.Titre)
    formData.append('categorie', this.form.value.categorie)
 


    this.submitted = true;
    if (this.form.invalid) {
      alert("PLEASE VERIFY YOUR INFORMATIONS!!" );

    }
    else {
      this.souscategorieService.create(this.form.value).subscribe((res:any) => {
        alert('SousCategorie created successfully!');
        this.router.navigateByUrl('souscategorie/index');
   })
    }
    
  }

}
