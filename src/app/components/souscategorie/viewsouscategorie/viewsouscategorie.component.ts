import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SouscategorieService } from "../../../services/souscategorie.service";
import { souscategorie} from "../../../models/souscategorie.model";
import { categorie } from '../../../models/categorie.model';
import { CategorieService } from '../../../services/categorie.service';
@Component({
  selector: 'app-viewsouscategorie',
  templateUrl: './viewsouscategorie.component.html',
  styleUrls: ['./viewsouscategorie.component.css']
})
export class ViewsouscategorieComponent implements OnInit {

  id!: string;
  souscategorie!:souscategorie;
  categories: categorie[] = [];

  categorie={
    Name:'',
    id: '',
  }

  form: FormGroup = new FormGroup({
    Titre: new FormControl('',[Validators.required]),
    

  });

  constructor(
    private souscategorieService:SouscategorieService, private route: ActivatedRoute, private router: Router,private categorieService:CategorieService) { }
     
   
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['souscategorieId'];

    this.souscategorieService.find(this.id).subscribe((data: souscategorie)=>{
      this.souscategorie = data;
    });
    this.categorieService.getAllData().subscribe((data: categorie[])=>{
      this.categories = data;
      console.log(this.categories);
    })  

     
  }



}
