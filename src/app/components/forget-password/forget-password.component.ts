import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  constructor(private http: HttpClient,private _formBuilder: FormBuilder,private router: Router) { }

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;



  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
  code:number
  email:any

  forget = {
    email:""
  }
  data :any
  test = true
  test1= true
  test2=false
  click(){

    // this.forget.verifCode = Math.floor(Math.random() * (9999 - 1111 + 1)) + 1111;
    
    this.http.post("http://localhost:3000/email/verifCode",this.forget).subscribe(res =>{
      console.log(res)
      this.data = res
      this.test = false
    })
    this.getUser(this.forget)
  }

  verifCode(){
    if (this.code == this.data.data){
      console.log("success")
      this.test1 = true
      this.test2 = true
     this.router.navigate(['/updatepassword/'+this.us.id])
    }
    else{
      this.test1 = false
    }
    
  }

  user = {
    password:""
  }
  us:any
  getUser(user:any){
    console.log(user)
    this.http.post("http://localhost:3000/users/email",user).subscribe(res =>{
      console.log(res);
      this.us = res
      
    })
  }

  changePassword(){
    console.log(this.user)
  }
}
