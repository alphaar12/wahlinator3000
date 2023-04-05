import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(id: number, firstName: String, lastName: String, birthdate: Date, zipCode: number) {
    const user = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      birthdate: birthdate,
      zipCode: zipCode
    };
    return this.http.post(`${environment.apiUrl}/newUser/`, user);
  }
}
