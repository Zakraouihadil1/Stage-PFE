import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezvousService } from "../../../services/rendezvous.service";
import { rendezvous} from "../../../models/rendezvous.model";

@Component({
  selector: 'app-editrendezvous',
  templateUrl: './editrendezvous.component.html',
  styleUrls: ['./editrendezvous.component.css']
})
export class EditrendezvousComponent implements OnInit {

  id!: string;
  rendezvous!: rendezvous;
  form!: FormGroup;
  submitted = false;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public rendezvousService: RendezvousService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['rendezvousId'];
    this.rendezvousService.find(this.id).subscribe((data: rendezvous)=>{
      this.rendezvous = data;
    }); 
      
    this.form = new FormGroup({

      Date: new FormControl('',[Validators.required, ]),
      Lieu: new FormControl('',[Validators.required]),
      DateRDV: new FormControl('',[Validators.required, ]),
      status: new FormControl('repondu',),


       });
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    this.submitted = true;
    if (this.form.invalid) {
      alert("PLEASE VERIFY YOUR INFORMATIONS!!" );

    }
    else {
      this.rendezvousService.update(this.id, this.form.value).subscribe((res:any) => {
        alert('RendezVous updated successfully!');
        this.router.navigateByUrl('rendezvous/index');
   })

   
    }

   


   
  }
}
