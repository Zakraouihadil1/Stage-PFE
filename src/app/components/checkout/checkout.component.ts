import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { product } from '../../models/produit.model';
import { user } from "src/app/models/user.model";
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JwtService } from "../../../app/jwt.service";
import Validation from '../utils/validation';
import { Router } from '@angular/router';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import jwtDecode from 'jwt-decode';
import { commande } from 'src/app/models/commande.model';
import { CommandeService } from 'src/app/services/commande.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  form: FormGroup = new FormGroup({

    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),



  });

  data: any;
  token: any;

  user: user = {
    firstname: '',
    lastname: '',
    email: '',
    roles: '',

  }
  product: product = {
    name: '',
    Description: '',
    qte: '',
    prixuht: '',

  }
  products: product[] = [];
  commande?: commande[];
  users: user[] = [];

  cart: any;
  public grandTotal !: number;
  public TotalName !: string;
  public Name !: string;
  public TotalQte !: string;


  submitted = false;
  Total!: number;
  constructor(private formBuilder: FormBuilder, private jwtService: JwtService, public router: Router, private cartService: CartService,
    private commandeService: CommandeService
  ) { }
  ngOnInit(): void {

    // this.token = localStorage.getItem('access_token');

    // this.data = jwtDecode(this.token);


    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.TotalName = this.cartService.getTotalName();
        // this.grandTotal = this.cartService.getTotalPrice();
        this.Name = this.cartService.getTotalName();
        this.TotalQte = this.cartService.getTotalQte();
        this.Total = this.cartService.getTotal();
        console.log(this.TotalQte)

      })


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
      alert('PLEASE VERIFY YOUR INFORMATIONS!!');

    }
    else {




      this.jwtService.login(this.form.value).subscribe(data => {



        this.router.navigate(['/checkout']);



      })



    }
  }

  loggedIn() {
    return localStorage.getItem('access_token');
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


  // form1: FormGroup = new FormGroup({
  //    Products: new FormControl(this.product.name,[Validators.required]),
  //    Qte: new FormControl(this.product.qte,[Validators.required]),
  //    Prix: new FormControl(this.grandTotal,[Validators.required]),
  // })
  dat = {
    Products: '',
    Qte: '',
    Prix: 0,
    user: ''
  }
  onClick(): void {
    this.token = localStorage.getItem('access_token');

    this.data = jwtDecode(this.token);
    // const formData = new FormData();

    //   formData.append('Products', this.form1.value.Products)
    // formData.append('Qte', this.form1.value.Qte)
    // formData.append('Prix', this.form1.value.Prix)
    this.dat.Products = this.Name;
    this.dat.Prix = this.Total;
    this.dat.user = this.data.id;
    this.dat.Qte = this.TotalQte;
    this.commandeService.create(this.dat).subscribe((res: any) => {
      alert('Commande created successfully!');
      console.log(this.dat);
      this.router.navigateByUrl('commandeuser');
      // this.cart = localStorage.getItem('items');
      // console.log(this.cart);

    })
  }

}
