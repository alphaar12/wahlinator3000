import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {formatDate, registerLocaleData} from "@angular/common";
import localeDE from "@angular/common/locales/de";
import {Observable} from "rxjs";
import {AuthService} from "../auth/auth.service";

registerLocaleData(localeDE, "de");

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getUserByPersonalNumber(personalNumber: String) {
    return this.http.get(`${environment.apiUrl}/admin/getUser/${personalNumber}`);
  }

  editUser(personalNumber: String, firstName: String, lastName: String, birthdate: string, zipCode: number) {
    const user = {
      personalNumber: personalNumber,
      firstName: firstName,
      lastName: lastName,
      birthdate: this.authService.formatDate(birthdate),
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
