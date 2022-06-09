import { Component, OnInit } from '@angular/core';
import {user} from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { JwtService } from "../../jwt.service";
import jwtDecode from 'jwt-decode';
import { Router,ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { categorie } from 'src/app/models/categorie.model';
import { souscategorie } from 'src/app/models/souscategorie.model';
import { SouscategorieService } from 'src/app/services/souscategorie.service';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-profileadmin',
  templateUrl: './profileadmin.component.html',
  styleUrls: ['./profileadmin.component.css']
})
export class ProfileadminComponent implements OnInit {

  token:any;
  data:any;
  form!: FormGroup;
  id!: any;
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


user:user={
firstname:'',
lastname:'',
email:'',
roles:'',
id:''

}
  submitted= false;


  constructor(private jwtService:JwtService,public router: Router, private categorieService:CategorieService,private souscategorieService:SouscategorieService,  public userService: UserService,    private route: ActivatedRoute,
    ) { }


  

  ngOnInit(): void {
  
    this.token = localStorage.getItem('access_token');

    this.user = jwtDecode(this.token);
    // this.user=this.data.user;
    // console.log(this.data);



    this.form = new FormGroup({

      firstname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required ,  Validators.email]),
           user:new FormControl(this.user.id, Validators.required),

    //  id: new FormControl('',[Validators.required ,  ]),
    //  roles: new FormControl('',[Validators.required ,  ]),

       });

       this.categorieService.getAllData().subscribe((data: categorie[])=>{
        this.categories = data;
        console.log(this.categories);
      })  
    
      this.souscategorieService.getAllData().subscribe((data: souscategorie[])=>{
        this.souscategories = data;
        console.log(this.souscategories);
      })
}


submit(){
  this.submitted = true;
  if (this.form.invalid) {
    alert("PLEASE VERIFY YOUR INFORMATIONS!!" );

  }
  else {
    this.userService.update(this.id, this.form.value).subscribe((res:any) => {
      alert('User updated successfully!');
      this.router.navigateByUrl('user/index');
   

 })
  }
 
}
logout() {
  localStorage.removeItem('access_token');
  this.router.navigate(['/login']);
}

 loggedIn(){
  return localStorage.getItem('access_token') ;
}
}
