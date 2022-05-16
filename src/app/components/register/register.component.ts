import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../utils/validation';
import { JwtService } from "../../../app/jwt.service";
import { user } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { categorie } from 'src/app/models/categorie.model';
import { souscategorie } from 'src/app/models/souscategorie.model';
import { SouscategorieService } from 'src/app/services/souscategorie.service';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Roles: any = ['user'];
  categories: categorie[] = [];
  souscategories: souscategorie[] = [];

  categorie={
Name:'',
id:'',
  }
  souscategorie={
    Titre:'',
    id: '',
  }


  
  form: FormGroup = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),
    roles: new FormControl('',[Validators.required]),

  });


  user : user ={
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    roles: '',
  
  }

  submitted = false;
  constructor(private formBuilder: FormBuilder , private jwtService:JwtService, private router: Router,private categorieService:CategorieService,private souscategorieService:SouscategorieService) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstname: ['', Validators.required],
        lastname: [
          '',
          [
            Validators.required
          
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
       roles: ['', Validators.required],

      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );

    this.categorieService.getAllData().subscribe((data: categorie[])=>{
      this.categories = data;
      console.log(this.categories);
    })  
  
    this.souscategorieService.getAllData().subscribe((data: souscategorie[])=>{
      this.souscategories = data;
      console.log(this.souscategories);
    })


  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      alert("PLEASE VERIFY YOUR INFORMATIONS!!" );

    }
   

      else {
        this.jwtService.register(this.form.value).subscribe(
          (response:any)  => {
            alert('REGISTRAITED SUCCESSFULLY Votre demande ça sera accepter dans 24 heures');
            this.router.navigate(['/login']);
         
       },(error:any)  => {
        alert(' Client existe déjà!!');}
       
         )
  
  
  
      }
   
    }

    
    
     
    
    
     

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
