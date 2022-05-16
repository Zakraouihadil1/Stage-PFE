import { Component, OnInit } from '@angular/core';
import { ProjetService } from "../../../services/projet.service"
import { projet } from 'src/app/models/projet.model';

import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { user } from 'src/app/models/user.model';
import jwtDecode from 'jwt-decode';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-indexprojetuser',
  templateUrl: './indexprojetuser.component.html',
  styleUrls: ['./indexprojetuser.component.css']
})
export class IndexprojetuserComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  projet: projet[] = [];
  users: user[] = [];
  data:any;
  token:any;
  user={
    firstname:'',
    email: '',
    lastname:'',
    id:'',
    password:'',
    roles:''
  }
  constructor(private projetService:ProjetService,private userService:UserService,    private router: Router) { }

  ngOnInit(): void {

    this.token = localStorage.getItem('access_token');

    this.data = jwtDecode(this.token);

    this.form = new FormGroup({
      Titre: new FormControl('',[Validators.required]),
    Description: new FormControl('',[Validators.required]),
  M1: new FormControl('',),
  Process: new FormControl('',),
    Machines: new FormControl('',),
    user:new FormControl(this.data.id, Validators.required),


    });


    this.userService.getAllData().subscribe((data: user[])=>{
      this.users = data;
      console.log(this.users);
    })  

    this.projetService.findbyuserid(this.data.id).subscribe((data: projet[])=>{
      this.projet = data;
      console.log(this.projet);
    })  


    // this.projetService.getAllData().subscribe((data: projet[])=>{
    //   this.projet = data;
    //   console.log(this.projet);
    // })  
  }

  
  get f(){
    return this.form.controls;
  }

  submit(){

    this.submitted = true;

      this.projetService.create(this.form.value).subscribe((res:any) => {
        alert('Etude Projet created successfully!');
        // this.router.navigateByUrl('projetuser/index');
   })
    
    
  }
}
