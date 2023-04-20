import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { formatDate } from "@angular/common";
import { registerLocaleData } from '@angular/common';
import localeDE from "@angular/common/locales/de";
import {Observable} from "rxjs";
registerLocaleData(localeDE, "de");

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(personalNumber: String, firstName: String, lastName: String, birthdate: Date, zipCode: number, password: String) {
    const user = {
      personalNumber: personalNumber,
      firstName: firstName,
      lastName: lastName,
      birthdate: formatDate(birthdate, "yyyy-MM-dd", "de-DE"),
      zipCode: zipCode,
      password: password
    };
    return this.http.post(`${environment.apiUrl}/auth/signup/`, user);
  }

  getUserByPersonalNumber(personalNumber: String) {
    return this.http.get(`${environment.apiUrl}/admin/getUser/${personalNumber}`);
  }

  editUser(personalNumber: String, firstName: String, lastName: String, birthdate: string, zipCode: number) {
    const user = {
      personalNumber: personalNumber,
      firstName: firstName,
      lastName: lastName,
      birthdate: formatDate(birthdate, "yyyy-MM-dd", "de-DE"),
      zipCode: zipCode
    };
    return this.http.put(`${environment.apiUrl}/admin/editUser/${personalNumber}`, user);
  }

  getPublicContent(): Observable<any> {
    return this.http.get(`${environment.apiUrl} + all`, { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(`${environment.apiUrl} + user`, { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(`${environment.apiUrl} + mod`, { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(`${environment.apiUrl} + admin`, { responseType: 'text' });
  }

}
