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
  constructor(private devisService:DevisService,private userService:UserService,  private route: ActivatedRoute,private jwtService:JwtService,private produitService:ProduitService,private router: Router) { }

  ngOnInit(): void {



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
      Date: new FormControl('', [Validators.required]),
      Titre: new FormControl('', Validators.required),
      // Total: new FormControl('', Validators.required),
      Quantity: new FormControl('', Validators.required),
      product: new FormControl('', Validators.required),
      user:new FormControl(this.data.id, Validators.required),


    });
    
    
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

    const formData = new FormData();
    formData.append('Date', this.form.value.Date)
    formData.append('Titre', this.form.value.Titre)
    // formData.append('Total', this.form.value.Total)
    formData.append('Quantity', this.form.value.Quantity)
    formData.append('product', this.form.value.product)
 


    this.submitted = true;
  
      this.devisService.create(this.form.value).subscribe((res:any) => {
     alert('Devis created successfully!');
        console.log(this.form.value);
   })
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


}
