import { Component, OnInit } from '@angular/core';
import { consultation } from 'src/app/models/consultation.model';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';


import { ConsultationService } from "../../../services/consultation.service";
import { user } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-indexconsultation',
  templateUrl: './indexconsultation.component.html',
  styleUrls: ['./indexconsultation.component.css']
})
export class IndexconsultationComponent implements OnInit {

  consultations: consultation[] = [];
  users: user[] = [];
 
  user={
    firstname:'',
    id:'',
  }
  constructor(private consultationService:ConsultationService,private userService:UserService) { }

  ngOnInit(): void {
    this.consultationService.getAllData().subscribe((data: consultation[])=>{
      this.consultations = data;
      console.log(this.consultations);
    
    })  

    this.userService.getAllData().subscribe((data: user[])=>{
      this.users = data;
      console.log(this.users);
    })  
  }
  consultation:any ={
    valid :true,
    status:"accepter"

  }
  consultation1:any ={
    valid :false,
    status:"refuser"

  }

  consultation2:any ={
    valid :false,
    status:"archiver"

  }

  validate(id: any) {
    this.consultationService.update(id, this.consultation).subscribe((res:any) => {
      this.ngOnInit()
 })
  }

  archiver(id: any) {
    this.consultationService.update(id, this.consultation2).subscribe((res:any) => {
      this.ngOnInit()
 })
  }

  review(id: any){
    this.consultationService.update(id, this.consultation1).subscribe((res:any) => {
      this.ngOnInit()
      console.log(id);

 })
  }

  term: any;
  term1 = {
    c :""
  }
  click(){
    this.term = this.term1
  }
  
    deleteconsultation(id:string){
      this.consultationService.delete(id).subscribe(res => {
        this.consultations = this.consultations.filter(item => item.id !== id);
        alert('Consultation deleted successfully!');
   })
    }

}
