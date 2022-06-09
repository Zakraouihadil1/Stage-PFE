import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { commande } from 'src/app/models/commande.model';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-viewcommandeuser',
  templateUrl: './viewcommandeuser.component.html',
  styleUrls: ['./viewcommandeuser.component.css']
})
export class ViewcommandeuserComponent implements OnInit {


  
  id!: string;
  commande!:commande;

  form: FormGroup = new FormGroup({
    Products: new FormControl('',[Validators.required]),
    Qte: new FormControl('',[Validators.required]),
    Prix: new FormControl('',[Validators.required]),
 

    

  });
  constructor(private commandeService:CommandeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['commandeId'];
         
    this.commandeService.find(this.id).subscribe((data: commande)=>{
      this.commande = data;
    });
  }

}
