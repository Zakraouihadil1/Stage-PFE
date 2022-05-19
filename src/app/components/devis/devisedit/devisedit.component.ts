import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../../utils/validation';
import { devis } from "../../../models/devis.model";
import { DevisService } from "../../../services/devis.service";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-devisedit',
  templateUrl: './devisedit.component.html',
  styleUrls: ['./devisedit.component.css']
})
export class DeviseditComponent implements OnInit {

  id!: string;
  devis!: devis;
  form!: FormGroup;
  submitted = false;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public devisService: DevisService,
    private route: ActivatedRoute,
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
      
    this.form = new FormGroup({

      Date: new FormControl('', [Validators.required]),
      // Titre: new FormControl('', Validators.required),
      Total: new FormControl('', Validators.required),
      Quantity: new FormControl('', Validators.required),
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
      this.devisService.update(this.id, this.form.value).subscribe((res:any) => {
        alert('Devis updated successfully!');
        this.router.navigateByUrl('devis/index');
   })

   
    }


   


  


   
  }
}
