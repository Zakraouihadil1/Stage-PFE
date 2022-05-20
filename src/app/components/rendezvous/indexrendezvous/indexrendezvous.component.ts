import { Component, OnInit } from '@angular/core';
import { rendezvous } from 'src/app/models/rendezvous.model';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { RendezvousService } from "../../../services/rendezvous.service"
import { user } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-indexrendezvous',
  templateUrl: './indexrendezvous.component.html',
  styleUrls: ['./indexrendezvous.component.css']
})
export class IndexrendezvousComponent implements OnInit {

  rendezvous: rendezvous[] = [];
  users: user[] = [];
 
  user={
    firstname:'',
    id:'',
  }
  constructor(private rendezvousService:RendezvousService,private userService:UserService) { }

  ngOnInit(): void {
    this.rendezvousService.getAllData().subscribe((data: rendezvous[])=>{
      this.rendezvous = data;
      console.log(this.rendezvous);
    })  
    this.userService.getAllData().subscribe((data: user[])=>{
      this.users = data;
      console.log(this.users);
    })  
  }

  rendezvous2:any ={
    valid :true,
    status:"accepter"

  }
  rendezvous1:any ={
    valid :false,
    status:"refuser"

  }

  rendezvous3:any ={
    valid :false,
    status:"archiver"

  }
  rendezvous4:any ={
    valid :true,
    status:"repondu"

  }
  validate(id: any) {
    this.rendezvousService.update(id, this.rendezvous2).subscribe((res:any) => {
      this.ngOnInit()
 })
 


  }
  review(id: any){
    this.rendezvousService.update(id, this.rendezvous1).subscribe((res:any) => {
      this.ngOnInit()
      console.log(id);

 })
  }
  archiver(id: any) {
    this.rendezvousService.update(id, this.rendezvous3).subscribe((res:any) => {
      this.ngOnInit()
 })
  }

  repondre(id: any) {
    this.rendezvousService.update(id, this.rendezvous4).subscribe((res:any) => {
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
  
    deleterendezvous(id:string){
      this.rendezvousService.delete(id).subscribe(res => {
        this.rendezvous = this.rendezvous.filter(item => item.id !== id);
       alert('Rendezvous deleted successfully!');
   })
    }

}
