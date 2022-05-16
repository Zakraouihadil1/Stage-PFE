import { Component, OnInit } from '@angular/core';
import { consultation } from 'src/app/models/consultation.model';
import { ConsultationService } from "../../../services/consultation.service";
import { user } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { JwtService } from 'src/app/jwt.service';
import jwtDecode from 'jwt-decode';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-indexconsultationuser',
  templateUrl: './indexconsultationuser.component.html',
  styleUrls: ['./indexconsultationuser.component.css']
})
export class IndexconsultationuserComponent implements OnInit {

  Lieu: any = ['chez le fournisseur','chez le client'];
  consultations: consultation[] = [];
  consultation!:consultation;
  users: user[] = [];
  data:any;
  id!: string;
  token:any;
  user={
    firstname:'',
    email: '',
    lastname:'',
    id:'',
    password:'',
    roles:''
  }
  form!: FormGroup;
  submitted = false;
 

  
  constructor(private consultationService:ConsultationService,private userService:UserService, private jwtService:JwtService,public router: Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {

    this.token = localStorage.getItem('access_token');

    this.data = jwtDecode(this.token);
 
   
    this.form = new FormGroup({
      Date: new FormControl('', [Validators.required]),
      Lieu: new FormControl('', Validators.required),
      sujet: new FormControl('', Validators.required),
      user:new FormControl(this.data.id, Validators.required),
      // status: new FormControl('',[Validators.required]),

    });



    this.userService.getAllData().subscribe((data: user[])=>{
      this.users = data;
      console.log(this.users);
    })  
    this.consultationService.findbyuserid(this.data.id).subscribe((data: consultation[])=>{
      this.consultations = data;
      console.log(this.consultations);
    }) 
  

  /*this.consultationService.getAllData().subscribe((data: consultation[])=>{
      this.consultations = data;
      console.log(this.consultations);
    }) */ 
  }

  
   
    logout() {
      localStorage.removeItem('access_token');
      this.router.navigate(['/login']);
    }
    get f(){
      return this.form.controls;
    }
    
  submit(){

    this.submitted = true;
   
      this.consultationService.create(this.form.value).subscribe((res:any) => {
  alert('Consultation created successfully!');
    // this.router.navigateByUrl('consultationuser/index');
   })
    
    
  }

     loggedIn(){
      return localStorage.getItem('access_token') ;
    }
  
}
