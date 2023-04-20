import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import {formatDate} from "@angular/common";
import { registerLocaleData } from '@angular/common';
import localeDE from "@angular/common/locales/de";
import {Observable} from "rxjs";
registerLocaleData(localeDE, "de");

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  formatDate(inputDate: string): string | null {
    // Split the inputDate string into day, month, and year parts
    const parts = inputDate.split('.');
    if (parts.length !== 3) {
      // Invalid date format
      return null;
    }

    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      // Invalid date format
      return null;
    }

    // Create a new Date object using the year, month, and day parts
    const date = new Date(year, month - 1, day);

    // Format the date as yyyy-mm-dd
    const formattedDate = date.toISOString().slice(0, 10);

    return formattedDate;
  }

  addUser(personalNumber: String, firstName: String, lastName: String, birthdate: string, zipCode: number, password: String) {
    const date = this.formatDate(birthdate);

    const user = {
      personalNumber: personalNumber,
      firstName: firstName,
      lastName: lastName,
      birthdate: date,
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
