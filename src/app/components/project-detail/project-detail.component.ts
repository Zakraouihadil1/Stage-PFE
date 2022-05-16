import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { categorie } from 'src/app/models/categorie.model';
import { product } from 'src/app/models/produit.model';
import { souscategorie } from 'src/app/models/souscategorie.model';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';
import { SouscategorieService } from 'src/app/services/souscategorie.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  id!: string;
  product!:product;
  souscategories: souscategorie[] = [];
  categories: categorie[] = [];

  //products:product[]=[]
  souscategorie={
    Titre:'',
    id: '',
  }
  categorie={
    Name:'',
    id:'',
      }

 
  constructor( private produitService:ProduitService,private categorieService:CategorieService,private route: ActivatedRoute, private router: Router, private souscategorieService:SouscategorieService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];
         
    this.produitService.find(this.id).subscribe((data: product)=>{
      this.product = data;
      console.log(this.product);

    });
    this.souscategorieService.getAllData().subscribe((data: souscategorie[])=>{
      this.souscategories = data;
      console.log(this.souscategories);
    })

    this.categorieService.getAllData().subscribe((data: categorie[])=>{
      this.categories = data;
      console.log(this.categories);
    })
  }

}
