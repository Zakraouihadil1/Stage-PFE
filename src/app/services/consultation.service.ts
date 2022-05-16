import { Injectable } from '@angular/core';
import {consultation} from "../models/consultation.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable} from 'rxjs';
const AUTH_API = 'http://localhost:3000/';





@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }


  getAllData(): Observable<any> {
    return this.http.get<consultation[]>(AUTH_API+'consultations')
 }
 findbyuserid(user:string):Observable<any>{
  return this.http.get<consultation[]>(AUTH_API+'consultations/user/'+user)

 }

  find(id:string): Observable<consultation> {
  
    return this.http.get<consultation>(AUTH_API + 'consultations/' + id)
  }

  create(data: any): Observable<consultation> {
    return this.http.post<consultation>(AUTH_API + 'consultations/', data)
   
  }
  
  
  delete(id:string){
    return this.http.delete<consultation>(AUTH_API + 'consultations/' + id)
  
  }
  
  update(id:string, consultation): Observable<consultation> {
    return this.http.put<consultation>( AUTH_API + 'consultations/' + id, JSON.stringify(consultation),this.httpOptions)
   
  
  }
}
