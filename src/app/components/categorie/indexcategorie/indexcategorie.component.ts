import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { categorie } from 'src/app/models/categorie.model';
import { CategorieService } from "../../../services/categorie.service";
@Component({
  selector: 'app-indexcategorie',
  templateUrl: './indexcategorie.component.html',
  styleUrls: ['./indexcategorie.component.css']
})
export class IndexcategorieComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  categories: categorie[] = [];
  constructor(private categorieService:CategorieService, private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      Name: new FormControl('', Validators.required),
    });



    this.categorieService.getAllData().subscribe((data: categorie[])=>{
      this.categories = data;
      console.log(this.categories);
    })  
  }

  

  projet2:any ={
    valid :false,
    status:"archiver"

  }


  archiver(id: any) {
    this.categorieService.update(id, this.projet2).subscribe((res:any) => {
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

    this.submitted = true;
    if (this.form.invalid) {
      alert("PLEASE VERIFY YOUR INFORMATIONS!!" );

    }
    else {
      this.categorieService.create(this.form.value).subscribe((res:any) => {
        alert('Categorie created successfully!');
        // this.router.navigateByUrl('categorie/index');
        // this.ngOnInit()

   })
    }
    
  }

}
