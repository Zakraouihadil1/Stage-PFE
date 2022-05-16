import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { product } from 'src/app/models/produit.model';
import { user } from 'src/app/models/user.model';
import { ProduitService } from 'src/app/services/produit.service';
import { devis } from "../../../models/devis.model";
import { DevisService } from "../../../services/devis.service";
@Component({
  selector: 'app-devisusercreate',
  templateUrl: './devisusercreate.component.html',
  styleUrls: ['./devisusercreate.component.css']
})
export class DevisusercreateComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  devis: devis[] = [];
  products: product[] = [];
  product={
     id:'',
     name:'',
     qte: '',
   }
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
 
  constructor(private devisService:DevisService,private produitService:ProduitService,private router: Router) { }

  ngOnInit(): void {


    this.token = localStorage.getItem('access_token');

    this.data = jwtDecode(this.token);

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
    if (this.form.invalid) {
      alert("PLEASE VERIFY YOUR INFORMATIONS!!" );
      console.log(this.form.value);
    }
    else {
      this.devisService.create(this.form.value).subscribe((res:any) => {
        console.log('Devis created successfully!');
        console.log(this.form.value);
       this.router.navigateByUrl('devisuser/index');
   })
    }
    
  }

}
