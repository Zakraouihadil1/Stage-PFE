import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Item } from "../../models/item.model";
import { product } from "../../models/produit.model";
import { souscategorie } from 'src/app/models/souscategorie.model';
import { categorie } from 'src/app/models/categorie.model';
import { SouscategorieService } from 'src/app/services/souscategorie.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products: any = [];
  public products1 = [];
  j=0;

  // public grandTotal !: number;
  public TotalQte !: string;
  public Total !: number;
  // panier: any;
  // public cart = [];
  _items: any;
  public totalItem : number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this._items = JSON.parse(localStorage.getItem('items') || '[]');
    console.log(this._items)
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;

        // this.grandTotal = this.cartService.getTotalPrice();
        this.TotalQte = this.cartService.getTotalQte();
        this.Total = this.cartService.getTotal();
        this.totalItem = res.length;



      })

      for (let i=0 ; i<this.products.length; i++){
        this.products1[this.j]=this.products[i].qte
        this.j++;
        }
        console.log(this.products1)
        
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }
  incrementQuantity(item:any) {
    this.cartService.incrementQuantity(item);
  }
  decramentQuantity(item:any) {
    this.cartService.decramentQuantity(item);
  }
}


