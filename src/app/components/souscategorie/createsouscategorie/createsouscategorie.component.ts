import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SouscategorieService } from "../../../services/souscategorie.service";
import { souscategorie} from "../../../models/souscategorie.model";
import { categorie } from "../../../models/categorie.model";
import { CategorieService } from '../../../services/categorie.service';


@Component({
  selector: 'app-createsouscategorie',
  templateUrl: './createsouscategorie.component.html',
  styleUrls: ['./createsouscategorie.component.css']
})
export class CreatesouscategorieComponent implements OnInit {

  
  form!: FormGroup;
  submitted = false;

  souscategories: souscategorie[] = [];
  categories: categorie[] = [];
categorie={
    Name:'',
    id: '',
  }

  constructor(private souscategorieService:SouscategorieService,private categorieService:CategorieService,
    private router: Router
 
    ) { }

  ngOnInit(): void {
    this.categorieService.getAllData().subscribe((data: categorie[])=>{
      this.categories = data;
      console.log(this.categories);
    })  

    this.form = new FormGroup({
      Titre: new FormControl('', Validators.required),
      categorie: new FormControl('', Validators.required),



    });
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
