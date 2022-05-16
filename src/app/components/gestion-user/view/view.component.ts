import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {user} from "../../../models/user.model";
import { UserService } from "../../../services/user.service";
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import jwtDecode from 'jwt-decode';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  
  id!: string;

  token:any;
  data:any;
  form: FormGroup = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),
    roles: new FormControl('',[Validators.required]),

  });


  user : user ={
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    roles: '',
  
  }





  constructor(
    private userService:UserService,     private route: ActivatedRoute,
    private router: Router
   ) { }
     
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {


    this.token = localStorage.getItem('access_token');

    this.user = jwtDecode(this.token);
    this.id = this.route.snapshot.params['userId'];
         
    this.userService.find(this.id).subscribe((data: user)=>{
      this.user = data;
    });
  }

}
