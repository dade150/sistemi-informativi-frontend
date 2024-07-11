import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {UserDto} from "../models/UserDto";
import {UserRegistrationDto} from "../models/UserRegistrationDto";
import {UpdateUserDto} from "../models/UserUpdateDto";
import {UserLoginDto} from "../models/UserLoginDto";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) {

  }

  getAll():Observable<UserDto[]>{

    return  this.http.get<UserDto[]>('http://localhost:8080/api/user/all').pipe(retry(3),
      catchError(this.handleError));
  }

  register(userRegisterRequest:UserRegistrationDto):Observable<any>{
    return this.http.post("http://localhost:8080/api/user/reg",userRegisterRequest).pipe(retry(3),catchError(this.handleError));
  }

  updateUserData(updateUserData: UpdateUserDto){
    return this.http.post("http://localhost:8080/api/user/update",updateUserData).pipe(retry(3),catchError(this.handleError));
  }

  login(userLogin:UserLoginDto):Observable<any>{
    return this.http.post("http://localhost:8080/api/user/login",userLogin).pipe(retry(3),catchError(this.handleError));
  }

  delete(email:string):Observable<any>{
    return this.http.delete("http://localhost:8080/api/user/delete/"+email).pipe(retry(3),catchError(this.handleError));
  }

  check(email:string):Observable<any>{
    return  this.http.get("http://localhost:8080/api/user/check/"+email).pipe(retry(3),catchError(this.handleError));
  }

  getUserByEmail(email:string):Observable<any>{
    return this.http.get("http://localhost:8080/api/user/getuser/"+email).pipe(retry(3),catchError(this.handleError));
  }

  subscribe(id_user: number, id_course: number):Observable<any>{
    return this.http.put("http://localhost:8080/api/user/"+id_user+"/course/"+id_course+"/subscribe",null).pipe(retry(3),catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));

  }
}
