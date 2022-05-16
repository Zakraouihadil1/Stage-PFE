import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieService } from "../../../services/categorie.service";
import { categorie} from "../../../models/categorie.model";

@Component({
  selector: 'app-createcategorie',
  templateUrl: './createcategorie.component.html',
  styleUrls: ['./createcategorie.component.css']
})
export class CreatecategorieComponent implements OnInit {

 
  form!: FormGroup;
  submitted = false;



  constructor(private categorieService:CategorieService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      Name: new FormControl('', Validators.required),
    });
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
        this.router.navigateByUrl('categorie/index');
   })
    }
    
  }

}
