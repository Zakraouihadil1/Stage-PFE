import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultationService } from "../../../services/consultation.service";
import { consultation } from '../../../models/consultation.model';
import { UserService } from 'src/app/services/user.service';
import { user } from 'src/app/models/user.model';
import jwtDecode from 'jwt-decode';


@Component({
  selector: 'app-createconsultationuser',
  templateUrl: './createconsultationuser.component.html',
  styleUrls: ['./createconsultationuser.component.css']
})
export class CreateconsultationuserComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  users: user[] = [];
  Lieu: any = ['chez le fournisseur','chez le client'];
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

  constructor(private consultationService:ConsultationService,private userService:UserService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.token = localStorage.getItem('access_token');

    this.data = jwtDecode(this.token);

    this.form = new FormGroup({
      Date: new FormControl('', [Validators.required]),
      Lieu: new FormControl('', Validators.required),
      sujet: new FormControl('', Validators.required),
      user:new FormControl(this.data.id, Validators.required),
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){

    this.submitted = true;
    if (this.form.invalid) {
      alert("PLEASE VERIFY YOUR INFORMATIONS!!" );

    }
    else {
      this.consultationService.create(this.form.value).subscribe((res:any) => {
        console.log('Consultation created successfully!');
        this.router.navigateByUrl('consultationuser/index');
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
