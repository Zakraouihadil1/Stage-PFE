import { Component, OnInit } from '@angular/core';
import { commande } from 'src/app/models/commande.model';
import { user } from 'src/app/models/user.model';
import { CommandeService } from 'src/app/services/commande.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  commandes: commande[] = [];
  users: user[] = [];
 
  user={
    firstname:'',
    id:'',
  }

  constructor(private userService:UserService,private commandeService:CommandeService) { }

  ngOnInit(): void {
    this.commandeService.getAllData().subscribe((data: commande[])=>{
      this.commandes = data;
      console.log(this.commandes);
    
    })  

    this.userService.getAllData().subscribe((data: user[])=>{
      this.users = data;
      console.log(this.users);
    })  
  }

}
