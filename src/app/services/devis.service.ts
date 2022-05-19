import { Injectable } from '@angular/core';
import { devis } from "../models/devis.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  BehaviorSubject, Observable} from 'rxjs';
const AUTH_API = 'http://localhost:3000/';


@Injectable({
  providedIn: 'root'
})
export class DevisService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public cartItemList: any = []
  public product: any = []

  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  private _items: { icon: string }[] = [];
  constructor(private http:HttpClient) { }


  create(data: any): Observable<devis> {
    return this.http.post<devis>(AUTH_API + 'devis/', data)
   
  }

  getAllData(): Observable<any> {
    return this.http.get<devis[]>(AUTH_API+'devis')
 }


 findbyuserid(user:string):Observable<any>{
  return this.http.get<devis[]>(AUTH_API+'devis/user/'+user)

 }

 find(id:string): Observable<devis> {
  return this.http.get<devis>(AUTH_API + 'devis/' + id)
 
}

delete(id:string){
  return this.http.delete<devis>(AUTH_API + 'devis/' + id)

}

update(id:string, devis:devis): Observable<devis> {
  return this.http.put<devis>( AUTH_API + 'devis/' + id, JSON.stringify(devis),this.httpOptions)
 

}



}
