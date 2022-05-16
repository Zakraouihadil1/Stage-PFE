import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from '../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  private _items: { icon: string }[] = [];



  constructor() {
    this._items = JSON.parse(localStorage.getItem('items') || '[]');
  }
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addToCart(product: any) {

    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
  }
  // getTotal():number{
  //   // let Total = 0;
  //   // this.cartItemList.map((a:any)=>{
  //   //   Total += a.prixuht*a.quantity;
  //   // })
  //   // return Total;
  //   let Total : number = 0;
  //   for (let currentCartItem of this.cartItemList){
  //        Total += currentCartItem.prixuht * currentCartItem.quantity;

  //   }
  //    console.log(Total);
  //    return Total;

  // }


  getTotalName(): string {
    let TotalName = '';
    this.cartItemList.map((a: any) => {
      TotalName += a.name + ' ' + '-' + ' ';
    })
    return TotalName;
  }
  getName(): string {
    let Name = '';
    this.cartItemList.map((a: any) => {
      Name = a.name;
    })
    return Name;
  }
  getTotalQte(): string {
    let TotalQte = '';
    this.cartItemList.map((a: any) => {
      TotalQte += a.qte + ' ' + '-' + ' ';
    })
    return TotalQte;

  }



  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  get items() {
    return this._items.slice(0)
  }
  syncItems() {
    localStorage.setItem('items', JSON.stringify(this._items));
  }


  getTotal(): number {
    let Total = 0;
    this.cartItemList.map((item: any) => {
      Total += item.prixuht * item.qte;
    })
    return Total;
  }

  incrementQuantity(item:any) {
item.qte=item.qte+1;
  }
  decramentQuantity(item:any) {
    item.qte=item.qte-1;

  }


}
