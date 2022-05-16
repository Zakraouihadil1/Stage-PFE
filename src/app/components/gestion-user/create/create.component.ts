import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { JwtService } from "../../../../app/jwt.service";
import { user } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  Roles: any = ['admin'];

  
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

  submitted = false;
  constructor(private formBuilder: FormBuilder , private jwtService:JwtService, private router: Router
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstname: ['', Validators.required],
        lastname: [
          '',
          [
            Validators.required
          
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
       roles: ['', Validators.required],

      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      alert("S'IL VOUS PLAIT VERIVEZ VOTRE COORDONNEES!!" );

    }
   

      else {
        this.jwtService.register(this.form.value).subscribe(
          (response:any)  => {
            alert('UTILSATEUR CREER AVEC SUCCEE!!');
         
       },(error:any)  => {
        alert(' ECHEC DE CREATION !!');}
       
         )
  
  
  
      }
   
    }

    
    
     
    
    
     

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
