import { Component, OnInit } from '@angular/core';
import { categorie } from 'src/app/models/categorie.model';
import { product } from 'src/app/models/produit.model';
import { souscategorie } from 'src/app/models/souscategorie.model';
import { CartService } from 'src/app/services/cart.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';
import { SouscategorieService } from 'src/app/services/souscategorie.service';

@Component({
  selector: 'app-project-masonry',
  templateUrl: './project-masonry.component.html',
  styleUrls: ['./project-masonry.component.css']
})
export class ProjectMasonryComponent implements OnInit {
  souscategories: souscategorie[] = [];
  products: product[] = [];
  categories: categorie[] = [];

  souscategorie={
    Titre:'',
    id: '',
  }
  categorie={
    Name:'',
    id:'',
      }
      public totalItem : number = 0;
  q: string;
  constructor(private souscategorieService:SouscategorieService,      private cartService: CartService,    private produitService:ProduitService,private categorieService:CategorieService) { }

  addToCart(product: product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {

    
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })



    this.souscategorieService.getAllData().subscribe((data: souscategorie[])=>{
      this.souscategories = data;
      console.log(this.souscategories);
    })  
    this.produitService.all().subscribe((data: product[])=>{
      this.products = data;
      console.log(this.products);
    })  
  }
  term: any;
  term1 = {
    c :""
  }

  term2 = {
    c :""
  }
  click(){
    this.term = this.term1
  }
  click1(){
    this.term = this.term2
  }


  getsouscategorie(Titre:string){
    this.term2.c=Titre;
  }

}
