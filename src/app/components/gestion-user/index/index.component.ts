import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { UserService } from "../../../services/user.service";
import { user } from 'src/app/models/user.model';
import { categorie } from 'src/app/models/categorie.model';
import { souscategorie } from 'src/app/models/souscategorie.model';
import { SouscategorieService } from 'src/app/services/souscategorie.service';
import { CategorieService } from '../../../services/categorie.service';
import { JwtService } from 'src/app/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  Roles: any = ['admin'];

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
  users: user[] = [];

   
  user : user ={
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    roles: '',
  
  }
  form: FormGroup = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),
    roles: new FormControl('',[Validators.required]),

  });
  submitted=false;
  constructor(private userService:UserService,private categorieService:CategorieService,private souscategorieService:SouscategorieService,
    formBuilder: FormBuilder , private jwtService:JwtService, private router: Router) { }

  ngOnInit(): void {



    
    this.userService.getAllData().subscribe((data: user[])=>{
      this.users = data;
      console.log(this.users);
    })  
    

  this.categorieService.getAllData().subscribe((data: categorie[])=>{
    this.categories = data;
    console.log(this.categories);
  })  

  this.souscategorieService.getAllData().subscribe((data: souscategorie[])=>{
    this.souscategories = data;
    console.log(this.souscategories);
  })
  }


   /**
   * Write code on Method
   *
   * @return response()
   */
    deleteuser(id:string){
      this.userService.delete(id).subscribe(res => {
           this.users = this.users.filter(item => item.id !== id);
          alert('User deleted successfully!');
      })
    }



    user1:any ={
      valid :true,
      status:"accepter"
  
    }
    user2:any ={
      valid :false,
      status:"refuser"
  
    }
  
    user3:any ={
      valid :false,
      status:"archiver"
  
    }
  
    validate(id: any) {
      this.userService.update(id, this.user1).subscribe((res:any) => {
        this.ngOnInit()
   })
    }
  
    archiver(id: any) {
      this.userService.update(id, this.user3).subscribe((res:any) => {
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
    
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
    onSubmit(): void {
      this.submitted = true;
      if (this.form.invalid) {
        alert("S'IL VOUS PLAIT VERIVEZ VOTRE COORDONNEES!!" );
  
      }
     
  
        else {
          this.jwtService.register(this.form.value).subscribe(
            (response:any)  => {
              alert('UTILSATEUR CREER AVEC SUCCEE!!');
           
         },(error:any)  => {
          alert(' ECHEC DE CREATION !! , EMAIL EXISTE DEJA');}
         
           )
    
    
    
        }
     
      }
      
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
   

}
