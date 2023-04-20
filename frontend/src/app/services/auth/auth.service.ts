import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {formatDate} from "@angular/common";
import {environment} from "../../../environments/environment";

const AUTH_API = 'http://localhost:8080/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  // register(username: string, email: string, password: string): Observable<any> {
  //   return this.http.post(
  //     AUTH_API + 'signup',
  //     {
  //       username,
  //       email,
  //       password,
  //     },
  //     httpOptions
  //   );
  // }

  register(personalNumber: String, firstName: String, lastName: String, birthdate: Date, zipCode: number, password: String): Observable<any> {
    const user = {
      personalNumber: personalNumber,
      firstName: firstName,
      lastName: lastName,
      birthdate: formatDate(birthdate, "yyyy-MM-dd", "de-DE"),
      zipCode: zipCode,
      password: password
    };
    return this.http.post(`${environment.apiUrl}/auth/signup/`, user, httpOptions);
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
