import { Component, OnInit } from '@angular/core';
import { rendezvous } from 'src/app/models/rendezvous.model';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { RendezvousService } from "../../../services/rendezvous.service"
import { user } from 'src/app/models/user.model';
import jwtDecode from 'jwt-decode';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-indexrendezvoususer',
  templateUrl: './indexrendezvoususer.component.html',
  styleUrls: ['./indexrendezvoususer.component.css']
})
export class IndexrendezvoususerComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  Lieu: any = ['chez le fournisseur','chez le client'];

  rendezvous: rendezvous[] = [];
  users: user[] = [];
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
  datesys:any;
  dateDeb: number;
  dateDebe: string;
  
  constructor(private rendezvousService:RendezvousService,private userService:UserService, private router: Router,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token');

    this.data = jwtDecode(this.token);

    this.form = new FormGroup({
      Date: new FormControl('', [Validators.required]),
      Lieu: new FormControl('', Validators.required),
      // DateRDV: new FormControl('', [Validators.required]),
      user:new FormControl(this.data.id, Validators.required),

    });


    this.userService.getAllData().subscribe((data: user[])=>{
      this.users = data;
      console.log(this.users);
    })  

    this.rendezvousService.findbyuserid(this.data.id).subscribe((data: rendezvous[])=>{
      this.rendezvous = data;
      console.log(this.rendezvous);
    })  

    // this.rendezvousService.getAllData().subscribe((data: rendezvous[])=>{
    //   this.rendezvous = data;
    //   console.log(this.rendezvous);
    // })  


  }

  get f(){
    return this.form.controls;
  }



  submit(){

    this.submitted = true;
    this.dateDeb = new Date(this.form.value.Date).getTime()
    this.datesys=new Date().toLocaleDateString() ;
    console.log(this.datesys);
    this.dateDebe=this.datePipe.transform(this.form.value.Date, 'dd/MM/yyyy')
    console.log(this.dateDebe);
    if (this.dateDebe >= this.datesys){
   
      this.rendezvousService.create(this.form.value).subscribe((res:any) => {
        alert('RendezVous created successfully!');
        console.log(this.form.value);
        // this.router.navigateByUrl('rendezvoususer/index');
   })
  }
  else {
    alert ('date non valide')
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
