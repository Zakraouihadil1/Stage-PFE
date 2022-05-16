import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { devis } from "../../../models/devis.model";
import { DevisService } from "../../../services/devis.service";
import { product } from 'src/app/models/produit.model';
import { ProduitService } from 'src/app/services/produit.service';
import { user } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-devisindex',
  templateUrl: './devisindex.component.html',
  styleUrls: ['./devisindex.component.css']
})
export class DevisindexComponent implements OnInit {

  devis: devis[] = [];
  products: product[] = [];
 product={
    name:'',
    qte: '',
  }
  users: user[] = [];
 
  user={
    firstname:'',
    id:'',
  }

  constructor(private devisService:DevisService,private produitService:ProduitService,private userService:UserService) { }

  ngOnInit(): void {
    this.devisService.getAllData().subscribe((data: devis[])=>{
      this.devis = data;
      console.log(this.devis);
    })  
    this.produitService.all().subscribe((data: product[])=>{
      this.products = data;
      console.log(this.products);
    })  
    this.userService.getAllData().subscribe((data: user[])=>{
      this.users = data;
      console.log(this.users);
    })  
  }

  devis1:any ={
    valid :true,
    status:"repondu"

  }
  devis2:any ={
    valid :false,
    status:"archiver"

  }
  repondre(id: any) {
    this.devisService.update(id, this.devis1).subscribe((res:any) => {
      this.ngOnInit()
 })
  }

  archiver(id: any) {
    this.devisService.update(id, this.devis2).subscribe((res:any) => {
      this.ngOnInit()
 })
  }
  term: any;
  term1 = {
    c :""
  }
  click(){
    this.term = this.term1
  }

  
    deletedevis(id:string){
      this.devisService.delete(id).subscribe(res => {
        this.devis = this.devis.filter(item => item.id !== id);
        alert('Devis deleted successfully!');
   })
    }

}
