import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { consultation } from "../../../models/consultation.model";
import { ConsultationService } from "../../../services/consultation.service";
import { UserService } from 'src/app/services/user.service';
import {user} from "../../../models/user.model";

@Component({
  selector: 'app-viewconsultationuser',
  templateUrl: './viewconsultationuser.component.html',
  styleUrls: ['./viewconsultationuser.component.css']
})
export class ViewconsultationuserComponent implements OnInit {

  id!: string;
  consultation!:consultation;
  user : user ={
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    roles: '',
  
  }
  users: user[] = [];
  form: FormGroup = new FormGroup({
    Date: new FormControl('',[Validators.required]),
    Lieu: new FormControl('',[Validators.required]),
    sujet: new FormControl('',[Validators.required]),
    status: new FormControl('',[Validators.required]),


  });

  constructor(
    private consultationService:ConsultationService,private route: ActivatedRoute,  private userService:UserService, 
    private router: Router
   ) { }
     
   
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['consultationId'];
         
    this.userService.getAllData().subscribe((data: user[])=>{
      this.users = data;
      console.log(this.users);
    })  
    this.consultationService.find(this.id).subscribe((data: consultation)=>{
      this.consultation = data;
    });
  }
  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
  
   loggedIn(){
    return localStorage.getItem('access_token') ;
  }
}
