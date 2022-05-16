import { Component, OnInit } from '@angular/core';
import { categorie } from 'src/app/models/categorie.model';
import { souscategorie } from 'src/app/models/souscategorie.model';
import { SouscategorieService } from 'src/app/services/souscategorie.service';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  ngOnInit() {

    (function(d, m){
      var kommunicateSettings = {"appId":"f1f064a91dff006c2a0f48c396871dc2","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      (window as any).kommunicate = m; m._globals = kommunicateSettings;
  })(document, (window as any).kommunicate || {});



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
