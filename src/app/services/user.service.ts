import { Injectable } from '@angular/core';
import {user} from "../models/user.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  BehaviorSubject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
const AUTH_API = 'http://localhost:3000/';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  register(data: any):Observable<user[]>{
    return  this.http.post<any>(AUTH_API + 'users',data);
  
  
  }
  create(data: any):Observable<user[]>{
    return  this.http.post<any>(AUTH_API + 'users',data);
  
  
  }

 /* login(data: any, ):Observable<user[]>{
    return  this.http.post<any>(AUTH_API + 'auth',data)

}
   */  

  getAllData(): Observable<any> {
    return this.http.get<user[]>(AUTH_API+'users')
 }

 find(id:string): Observable<user> {
  return this.http.get<user>(AUTH_API + 'users/' + id)
 
}

delete(id:string){
  return this.http.delete<user>(AUTH_API + 'users/' + id)

}

update(id:string, user:user): Observable<user> {
  return this.http.put<user>( AUTH_API + 'users/' + id, JSON.stringify(user),this.httpOptions)
 

}

// getbyid(id:string):Observable<user>{
//   return this.http.get<user>( AUTH_API+'users/'+id )

// }

sendEmail(user:user){
  return this.http.post(AUTH_API + 'email/emailTemplate', user)
  
  
}


}
