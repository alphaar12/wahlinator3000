import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'app-nutzer-anlegen',
  templateUrl: './nutzer-anlegen.component.html',
  styleUrls: ['./nutzer-anlegen.component.css']
})
export class NutzerAnlegenComponent {

  createForm: FormGroup;
  showButton = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  maxDate: Date;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    this.createForm = this.formBuilder.group({
      personalNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthdate: ['', Validators.required],
      zipCode: ['', Validators.required],
    });
    this.maxDate = new Date();
  }

  register(personalNumber: String, firstName: String, lastName: String, birthdate: string, zipCode: number, password: String) {
    this.authService.register(personalNumber, firstName, lastName, birthdate, zipCode, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.snackBar.open('Nutzer wurde erfolgreich angelegt!', 'OK', {
          duration: 3000
        });
      },
      error: err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        this.snackBar.open('Nutzer wurde nicht angelegt! ' + this.errorMessage, 'OK', {
          duration: 3000
        });
      }
    });
  }

  generatePassword() {
    const inputField = document.getElementById("passwordField");
    const inputVal = new Array(12).fill(1).map(() => String.fromCharCode(Math.random() * 86 + 40)).join("");
    if (inputField) {
      inputField.setAttribute("value", inputVal);
    }
    this.showButton = true;
  }

  ngOnInit(): void {
  }

}
