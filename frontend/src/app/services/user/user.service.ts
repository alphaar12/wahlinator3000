import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {registerLocaleData} from "@angular/common";
import localeDE from "@angular/common/locales/de";
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

  editUser(personalNumber: String, firstName: String, lastName: String, birthdate: string, federalState: String, constituency: String) {
    const user = {
      personalNumber: personalNumber,
      firstName: firstName,
      lastName: lastName,
      birthdate: this.authService.formatDate(birthdate),
      federalState: federalState,
      constituency: constituency
    };
    return this.http.put(`${environment.apiUrl}/admin/editUser/${personalNumber}`, user);
  }

}
