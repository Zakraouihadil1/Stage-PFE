import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from "../../../services/produit.service";
import { product} from "../../../models/produit.model";
import { souscategorie } from 'src/app/models/souscategorie.model';
import { SouscategorieService } from 'src/app/services/souscategorie.service';
import { categorie } from 'src/app/models/categorie.model';
import { CategorieService } from 'src/app/services/categorie.service';
@Component({
  selector: 'app-viewproduit',
  templateUrl: './viewproduit.component.html',
  styleUrls: ['./viewproduit.component.css']
})
export class ViewproduitComponent implements OnInit {

  id!: string;
  product!:product;
  souscategories: souscategorie[] = [];
  
  souscategorie={
    Titre:'',
    id: '',
  }
  categories: categorie[] = [];

  categorie={
    Name:'',
    id: '',
  }
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    Description: new FormControl('', Validators.required ),
    file: new FormControl('', Validators.required),
    prixuht: new FormControl('', Validators.required),
    qte: new FormControl('', Validators.required),
    

  });

  constructor(
    private produitService:ProduitService, private route: ActivatedRoute, private router: Router, private souscategorieService:SouscategorieService,private categorieService:CategorieService,) { }
     
   
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];
         
    this.produitService.find(this.id).subscribe((data: product)=>{
      this.product = data;
    });

    this.categorieService.getAllData().subscribe((data: categorie[])=>{
      this.categories = data;
      console.log(this.categories);
    }) 

    this.souscategorieService.getAllData().subscribe((data: souscategorie[])=>{
      this.souscategories = data;
      console.log(this.souscategories);
    })
  }

}
