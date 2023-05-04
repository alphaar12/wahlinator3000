import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

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
    return date.toISOString().slice(0, 10);
  }

  login(personalNumber: string, password: string): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/auth/signin/`,
      {
        personalNumber,
        password,
      },
      httpOptions
    );
  }

  register(personalNumber: String, firstName: String, lastName: String, birthdate: string, constituency: String, federalState: String, password: String): Observable<any> {
    const user = {
      personalNumber: personalNumber,
      firstName: firstName,
      lastName: lastName,
      birthdate: this.formatDate(birthdate),
      constituency: constituency,
      federalState: federalState,
      password: password
    };
    return this.http.post(`${environment.apiUrl}/auth/signup/`, user, httpOptions);
  }

  logout(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/signout/`, {}, httpOptions);
  }
}
