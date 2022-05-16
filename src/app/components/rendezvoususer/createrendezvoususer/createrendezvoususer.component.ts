import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RendezvousService } from "../../../services/rendezvous.service";
import { rendezvous} from "../../../models/rendezvous.model";
import { user } from 'src/app/models/user.model';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-createrendezvoususer',
  templateUrl: './createrendezvoususer.component.html',
  styleUrls: ['./createrendezvoususer.component.css']
})
export class CreaterendezvoususerComponent implements OnInit {

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


  constructor(private rendezvousService:RendezvousService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.token = localStorage.getItem('access_token');

    this.data = jwtDecode(this.token);

    this.form = new FormGroup({
      Date: new FormControl('', [Validators.required]),
      Lieu: new FormControl('', Validators.required),
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
      this.rendezvousService.create(this.form.value).subscribe((res:any) => {
        alert('RendezVous created successfully!');
        console.log(this.form.value);
        this.router.navigateByUrl('rendezvoususer/index');
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
