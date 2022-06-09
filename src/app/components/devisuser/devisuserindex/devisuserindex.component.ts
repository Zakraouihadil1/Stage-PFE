import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { devis } from "../../../models/devis.model";
import { DevisService } from "../../../services/devis.service";
import { product } from 'src/app/models/produit.model';
import { user } from 'src/app/models/user.model';
import jwtDecode from 'jwt-decode';
import { UserService } from 'src/app/services/user.service';
import { JwtService } from 'src/app/jwt.service';
import { ProduitService } from 'src/app/services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-devisuserindex',
  templateUrl: './devisuserindex.component.html',
  styleUrls: ['./devisuserindex.component.css']
})
export class DevisuserindexComponent implements OnInit {
  id!: string;

  form!: FormGroup;
  submitted = false;
  products: product[] = [];
  devi: devis[] = [];
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
  product={
    name:'',
    qte: '',
  }
  datesys: any;
  dateDeb: number;
  dateDebe: string;
  constructor(private devisService:DevisService,private userService:UserService,  private route: ActivatedRoute,private jwtService:JwtService,private produitService:ProduitService,private router: Router,private datePipe: DatePipe) { }

  Date=new Date();
  currentYear = this.Date.getUTCFullYear();
  currentMonth = this.Date.getUTCMonth()+1;
  currentDay = this.Date.getUTCDate();


  TodayDate="2022-05-15"
FinalMonth:any;
FinalDay:any;
  ngOnInit(): void {


    // this.datesys=new Date().toLocaleDateString() ;
    // console.log(this.datesys)

    this.token = localStorage.getItem('access_token');
    this.data = jwtDecode(this.token);

    this.userService.getAllData().subscribe((data: user[])=>{
      this.users = data;
      console.log(this.data);
    })  

    this.devisService.findbyuserid(this.data.id).subscribe((data: devis[])=>{
      this.devi = data;
      console.log(this.devi);
    }) 
    this.produitService.all().subscribe((data: product[])=>{
      this.products = data;
      console.log(this.products);
    })  

    
    this.form = new FormGroup({
      Date: new FormControl('', Validators.required),

      // Titre: new FormControl('', Validators.required),
      // Total: new FormControl('', Validators.required),
      Quantity: new FormControl('', Validators.required),
      product: new FormControl('', Validators.required),
      user:new FormControl(this.data.id, Validators.required),


    });
    // this.form.value.Date=this.datesys;
    // console.log(this.form.value.Date)


if (this.currentMonth<10) {
  this.FinalMonth="0"+this.currentMonth
  
} else {
  this.FinalMonth=this.currentMonth;  
}

if (this.currentDay<10) {
  this.FinalDay="0"+this.currentDay
  
} else {
  this.FinalDay=this.currentDay;  
}
    
   this.TodayDate=this.currentYear + "-" +this.FinalMonth + "-"+this.FinalDay ; 
  }

  
  //   deletedevis(id:string){
  //     this.devisService.delete(id).subscribe(res => {
  //       this.devis = this.devis.filter(item => item.id !== id);
  //       alert('Devis deleted successfully!');
  //  })
  //   }


  get f(){
    return this.form.controls;
  }

  submit(){

    
    //  this.form.value.Date=this.datesys

    const formData = new FormData();
    formData.append('Date', this.form.value.Date)
    // formData.append('Titre', this.form.value.Titre)
    // formData.append('Total', this.form.value.Total)
    formData.append('Quantity', this.form.value.Quantity)
    formData.append('product', this.form.value.product)
 

    this.submitted = true;
    this.dateDeb = new Date(this.form.value.Date).getTime()
    this.datesys=new Date().toLocaleDateString() ;
    console.log(this.datesys);
    this.dateDebe=this.datePipe.transform(this.form.value.Date, 'dd/MM/yyyy')
    console.log(this.dateDebe);
  
    if (this.dateDebe == this.datesys){

      this.devisService.create(this.form.value).subscribe((res:any) => {
     alert('Devis created successfully!');
        console.log(this.form.value);
   })
    }
    else{
      alert('date non valide')
    }
  }
    

    loggedIn(){
      return localStorage.getItem('access_token') ;
    }
    devis!:devis;

    viewDevis(){
   

      this.id = this.route.snapshot.params['devisId'];
         
      this.devisService.find(this.id).subscribe((data: devis)=>{
        this.devis = data;
        console.log(this.devis);
      });
    }

    click(){
      this.form.value.Date=this.datesys

    }

}
