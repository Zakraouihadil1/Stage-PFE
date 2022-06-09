import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { commande } from '../models/commande.model';
const AUTH_API = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }


  getAllData(): Observable<any> {
    return this.http.get<commande[]>(AUTH_API+'commande')
 }
 

  find(id:string): Observable<commande> {
    return this.http.get<commande>(AUTH_API + 'commande/' + id)
   
  }
  findbyuserid(user:string):Observable<any>{
    return this.http.get<commande[]>(AUTH_API+'commande/user/'+user)
  
   }

  create(data: any): Observable<commande> {
    return this.http.post<commande>(AUTH_API + 'commande/', data)
   
  }
  
  
  delete(id:string){
    return this.http.delete<commande>(AUTH_API + 'commande/' + id)
  
  }
}
