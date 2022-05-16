import { Component, OnInit } from '@angular/core';
import {user} from "../../models/user.model";
import {AbstractControl, FormBuilder ,FormGroup,FormControl, Validators } from '@angular/forms';
import { JwtService } from "../../../app/jwt.service";
import Validation from '../utils/validation';
import { Router } from '@angular/router';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import jwtDecode from 'jwt-decode';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




  form: FormGroup = new FormGroup({
   
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    

   

  });

  data:any;
  token:any;

  user : user ={
    firstname: '',
    lastname: '',
    email: '',
    roles:'',
    status:'',
  
  }
  users: user[] = [];
  submitted = false;
  constructor(private formBuilder: FormBuilder , private jwtService:JwtService,public router: Router,private userService:UserService) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
       
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],       

      },
    
    );


  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
        if (this.form.invalid) {
      alert  ('PLEASE VERIFY YOUR INFORMATIONS!!');

    }
    else {


   
      /*  this.jwtService.login(this.form.value).subscribe({
         next: (res: any) => {
       if (res.result.roles[0] == 'admin'){
        alert('LOGGED successfuly!');
            this .router.navigate(['/admin']);
           } else if (res.result.roles[0] == 'user'){
            this .router.navigate(['/admin']);
           }
           
            localStorage.setItem('access_token', JSON.stringify(res.result.access_token));
            localStorage.setItem('roles', JSON.stringify(res.result.roles[0]));
          }
          
         })*/
       
      
      this.jwtService.login(this.form.value).subscribe (data  => {
        this.token = localStorage.getItem('access_token');

        this.data = jwtDecode(this.token);
    
       if (this.data.roles=='admin') {
          this .router.navigate(['/admin']);

        }
        else if ( this.data.roles=='user' && this.data.status=='en attente')  {
          alert('you have not accepted again')
          localStorage.removeItem('access_token');
         }
         
         else if ( this.data.roles=='user' && this.data.status=='accepter')  {
          this .router.navigate(['/user']);

         }
    
     
      },
      (error) => {
        alert('credentials invalide '); // handle login failed here. 
    })



    }
}

    

    
  onReset(): void {
    this.submitted = false;
    this.form.reset();
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


}