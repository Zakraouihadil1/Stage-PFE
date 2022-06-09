import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezvousService } from "../../../services/rendezvous.service";
import { rendezvous} from "../../../models/rendezvous.model";
@Component({
  selector: 'app-viewrendezvoususer',
  templateUrl: './viewrendezvoususer.component.html',
  styleUrls: ['./viewrendezvoususer.component.css']
})
export class ViewrendezvoususerComponent implements OnInit {

  id!: string;
  rendezvous!:rendezvous;

  form: FormGroup = new FormGroup({
    Date: new FormControl('',[Validators.required]),
    Lieu: new FormControl('',[Validators.required]),
    DateRDV: new FormControl('',[Validators.required]),
    

  });

  constructor(
    private consultationService:RendezvousService, private route: ActivatedRoute, private router: Router) { }
     
   
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['rendezvousId'];
         
    this.consultationService.find(this.id).subscribe((data: rendezvous)=>{
      this.rendezvous = data;
    });
  }

}
