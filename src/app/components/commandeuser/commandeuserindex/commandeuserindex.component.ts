import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { commande } from 'src/app/models/commande.model';
import { user } from 'src/app/models/user.model';
import { CommandeService } from 'src/app/services/commande.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-commandeuserindex',
  templateUrl: './commandeuserindex.component.html',
  styleUrls: ['./commandeuserindex.component.css']
})
export class CommandeuserindexComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  commandes: commande[] = [];
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
  constructor( private commandeService:CommandeService,private userService:UserService,    private router: Router) { }

  ngOnInit(): void {

    
    this.token = localStorage.getItem('access_token');

    this.data = jwtDecode(this.token);

    this.form = new FormGroup({
      Products: new FormControl('',[Validators.required]),
    Qte: new FormControl('',[Validators.required]),
  Prix: new FormControl('',),
  
    user:new FormControl(this.data.id, Validators.required),
  });

  this.userService.getAllData().subscribe((data: user[])=>{
    this.users = data;
    console.log(this.users);
  })  

  this.commandeService.findbyuserid(this.data.id).subscribe((data: commande[])=>{
    this.commandes = data;
    console.log(this.commandes);
  })  

  }

}
