import { Injectable } from '@angular/core';
import { projet } from "../models/projet.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable} from 'rxjs';
const AUTH_API = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }


  getAllData(): Observable<any> {
    return this.http.get<projet[]>(AUTH_API+'projet')
 }
 findbyuserid(user:string):Observable<any>{
  return this.http.get<projet[]>(AUTH_API+'projet/user/'+user)

 }
  find(id:string): Observable<projet> {
    return this.http.get<projet>(AUTH_API + 'projet/' + id)
   
  }

  create(data: any): Observable<projet> {
    return this.http.post<projet>(AUTH_API + 'projet/', data)
   
  }
  
  
  delete(id:string){
    return this.http.delete<projet>(AUTH_API + 'projet/' + id)
  
  }
  
  update(id:string, projet:projet): Observable<projet> {
    return this.http.put<projet>( AUTH_API + 'projet/' + id, JSON.stringify(projet),this.httpOptions)
   
  
  }
}
