import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router) { }
  id:any
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.id = id

    });
  }
  user = {
    password:""
  }

  confirmPassword=""

  message =""
  changePassword(){
    if(this.confirmPassword != this.user.password){
      this.message =" Please confirm your password"
    }
    else{
      this.message =""
      console.log(this.user)
      this.http.put('http://localhost:3000/users/update/'+this.id,this.user).subscribe(res => {
        console.log(res)
        this.router.navigate(['/login'])
      })
    }
  }
}
