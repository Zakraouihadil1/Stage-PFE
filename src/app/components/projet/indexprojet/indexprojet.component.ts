import { Component, OnInit } from '@angular/core';
import { ProjetService } from "../../../services/projet.service"
import { projet } from 'src/app/models/projet.model';

import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { user } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-indexprojet',
  templateUrl: './indexprojet.component.html',
  styleUrls: ['./indexprojet.component.css']
})
export class IndexprojetComponent implements OnInit {


  projet: projet[] = [];
  users: user[] = [];
 
  user={
    firstname:'',
    id:'',
  }
  constructor(private projetService:ProjetService,private userService:UserService) { }

  ngOnInit(): void {
    this.projetService.getAllData().subscribe((data: projet[])=>{
      this.projet = data;
      console.log(this.projet);
    })  
    this.userService.getAllData().subscribe((data: user[])=>{
      this.users = data;
      console.log(this.users);
    })  
  }
  projet1:any ={
    valid :true,
    status:"repondu"

  }
  projet2:any ={
    valid :false,
    status:"archiver"

  }
  repondre(id: any) {
    this.projetService.update(id, this.projet1).subscribe((res:any) => {
      this.ngOnInit()
 })
  }

  archiver(id: any) {
    this.projetService.update(id, this.projet2).subscribe((res:any) => {
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


  
  


}
