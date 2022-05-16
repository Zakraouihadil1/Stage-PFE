import { Component, OnInit } from '@angular/core';
import { ProjetService } from "../../../services/projet.service"
import { projet } from 'src/app/models/projet.model';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editprojet',
  templateUrl: './editprojet.component.html',
  styleUrls: ['./editprojet.component.css']
})
export class EditprojetComponent implements OnInit {

  id!: string;
  projet!: projet;
  form!: FormGroup;
  submitted = false;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public projetService: ProjetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['projetId'];
    this.projetService.find(this.id).subscribe((data: projet)=>{
      this.projet = data;
    }); 
      
    this.form = new FormGroup({

    Titre: new FormControl('',[Validators.required]),
    Description: new FormControl('',[Validators.required]),
    M1: new FormControl('',),
    Process: new FormControl('',),
    Machines: new FormControl('',),
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
      this.projetService.update(this.id, this.form.value).subscribe((res:any) => {
        alert('Etude Projet updated successfully!');
        this.router.navigateByUrl('projet/index');
   })

   
    }

   


   
  }
}
