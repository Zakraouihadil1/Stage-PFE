import { Component, OnInit } from '@angular/core';
import { categorie } from 'src/app/models/categorie.model';
import { souscategorie } from 'src/app/models/souscategorie.model';
import { CategorieService } from 'src/app/services/categorie.service';
import { SouscategorieService } from 'src/app/services/souscategorie.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  categories: categorie[] = [];
  souscategories: souscategorie[] = [];

  categorie={
Name:'',
id:'',
  }
  souscategorie={
    Titre:'',
    id: '',
  }

  constructor(private categorieService:CategorieService,private souscategorieService:SouscategorieService) { }

  ngOnInit(): void {

    

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
