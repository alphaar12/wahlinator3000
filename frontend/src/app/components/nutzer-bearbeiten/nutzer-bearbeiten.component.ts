import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-nutzer-bearbeiten',
  templateUrl: './nutzer-bearbeiten.component.html',
  styleUrls: ['./nutzer-bearbeiten.component.css']
})
export class NutzerBearbeitenComponent {


  editForm: FormGroup;
  showButton = false;
  isSuccessful = false;
  errorMessage = '';
  public userDetails: any;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    this.editForm = this.formBuilder.group({
      personalNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthdate: ['', Validators.required],
      zipCode: ['', Validators.required],
    });
  }

  getUser(personalNumber: string) {
    this.userService.getUserByPersonalNumber(personalNumber).subscribe({
      next: data => {
        this.isSuccessful = true;
        this.userDetails = data;
        this.editForm.get("personalNumber")?.setValue(this.userDetails.personalNumber);
        this.editForm.get("firstName")?.setValue(this.userDetails.firstName);
        this.editForm.get("lastName")?.setValue(this.userDetails.lastName);
        this.editForm.get("birthdate")?.setValue(this.userDetails.birthdate);
        this.editForm.get("zipCode")?.setValue(this.userDetails.zipCode);
        this.showButton = true;
      },
      error: err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.snackBar.open('Nutzer konnte nicht geladen werden! ' + this.errorMessage, 'OK', {
          duration: 3000
        });
      }
    });
  }

  editUser(personalNumber: String, firstName: String, lastName: String, birthdate: any, zipCode: number) {
    this.userService.editUser(personalNumber, firstName, lastName, birthdate, zipCode).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.snackBar.open('Nutzer wurde erfolgreich bearbeitet!', 'OK', {
          duration: 3000
        });
      },
      error: err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.snackBar.open('Nutzer konnte nicht bearbeitet werden! ' + this.errorMessage, 'OK', {
          duration: 3000
        });
      }
    })
  }

  ngOnInit(): void {
  }

}
