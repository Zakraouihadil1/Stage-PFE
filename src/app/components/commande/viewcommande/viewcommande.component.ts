import { Component, OnInit } from '@angular/core';
import { commande } from 'src/app/models/commande.model';
import { CommandeService } from 'src/app/services/commande.service';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-viewcommande',
  templateUrl: './viewcommande.component.html',
  styleUrls: ['./viewcommande.component.css']
})
export class ViewcommandeComponent implements OnInit {
  id!: string;
  commande!:commande;
  user : user ={
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    roles: '',
  
  }
  users: user[] = [];

  form: FormGroup = new FormGroup({
    Products: new FormControl('',[Validators.required]),
    Qte: new FormControl('',[Validators.required]),
    Prix: new FormControl('',[Validators.required]),
    user:new FormControl(this.user.firstname,[Validators.required]),
  });

    
  constructor(private commandeService:CommandeService,private route: ActivatedRoute,  private userService:UserService, 
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['commandeId'];
         
    this.userService.getAllData().subscribe((data: user[])=>{
      this.users = data;
      console.log(this.users);
    })  
    this.commandeService.find(this.id).subscribe((data: commande)=>{
      this.commande = data;
    });

  }

}
