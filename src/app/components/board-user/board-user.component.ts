import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
  
   loggedIn(){
    return localStorage.getItem('access_token') ;
  }
}
