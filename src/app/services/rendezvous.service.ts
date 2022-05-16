import { Injectable } from '@angular/core';
import {rendezvous} from "../models/rendezvous.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable} from 'rxjs';
const AUTH_API = 'http://localhost:3000/';


@Injectable({
  providedIn: 'root'
})
export class RendezvousService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }


  create(data: any): Observable<rendezvous> {
    return this.http.post<rendezvous>(AUTH_API + 'rendezvous/', data)
   
  }

  getAllData(): Observable<any> {
    return this.http.get<rendezvous[]>(AUTH_API+'rendezvous')
 }

 findbyuserid(user:string):Observable<any>{
  return this.http.get<rendezvous[]>(AUTH_API+'rendezvous/user/'+user)

 }

 find(id:string): Observable<rendezvous> {
  return this.http.get<rendezvous>(AUTH_API + 'rendezvous/' + id)
 
}

delete(id:string){
  return this.http.delete<rendezvous>(AUTH_API + 'rendezvous/' + id)

}

update(id:string, rendezvous): Observable<rendezvous> {
  return this.http.put<rendezvous>( AUTH_API + 'rendezvous/' + id, JSON.stringify(rendezvous),this.httpOptions)
 

}
}
