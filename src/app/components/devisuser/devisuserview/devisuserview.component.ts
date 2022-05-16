import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { devis } from "../../../models/devis.model";
import { DevisService } from "../../../services/devis.service";
@Component({
  selector: 'app-devisuserview',
  templateUrl: './devisuserview.component.html',
  styleUrls: ['./devisuserview.component.css']
})
export class DevisuserviewComponent implements OnInit {

  id!: string;
  devis!:devis;

  form: FormGroup = new FormGroup({
    Date: new FormControl('', [Validators.required]),
      Titre: new FormControl('', Validators.required),
      Total: new FormControl('', Validators.required),
      Quantity: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),


  });

  constructor(
    private devisService:DevisService,     private route: ActivatedRoute,
    private router: Router
   ) { }
     
   
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['devisId'];
         
    this.devisService.find(this.id).subscribe((data: devis)=>{
      this.devis = data;
    });
  }

}
