import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from "../../../services/user.service";
import { JwtService } from "../../../../app/jwt.service";

import { user } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  token:any;
  data:any;
  id!: string;
  user!: user;
  form!: FormGroup;
  submitted = false;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public userService: UserService,
    public jwtService: JwtService,

    private route: ActivatedRoute,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];
    this.userService.find(this.id).subscribe((data: user)=>{
      this.user = data;
    }); 
      
    this.form = new FormGroup({

      firstname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required ,  Validators.email]),
      roles: new FormControl('',[Validators.required])  ,
      id: new FormControl('',[Validators.required])   });

  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    this.submitted = true;
    if (this.form.invalid) {
      alert("PLEASE VERIFY YOUR INFORMATIONS!!" );

    }
    else {
      this.userService.update(this.id, this.form.value).subscribe((res:any) => {
        alert('User updated successfully!');
        this.router.navigateByUrl('profile');
   })

   
    }


   


   
     this.jwtService.register(this.form).subscribe(
      (response:any)  => {
       console.log('SUCCESS UPDATE!!');
     
   },(error:any)  => {
    console.log('FAILED UPDATE!!');}
   
     )


   
  }
   
}

