import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user/user.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DropdownItems} from "../../DropdownItems";

interface federalState {
  value: string;
}

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
  maxDate: Date;
  federalStates: any;
  constituencies: any;


  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    this.editForm = this.formBuilder.group({
      personalNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthdate: ['', Validators.required],
      federalState: ['', Validators.required],
      constituency: ['', Validators.required],
    });
    this.maxDate = new Date();
    this.constituencies = [];
    this.federalStates = DropdownItems.federalStates;
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
        this.editForm.get("federalState")?.setValue(this.userDetails.federalState);
        this.constituencies = DropdownItems.checkConstituencies(this.userDetails.federalState);
        this.editForm.get("constituency")?.setValue(this.userDetails.constituency);
        this.showButton = true;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.snackBar.open('Nutzer konnte nicht geladen werden! ' + this.errorMessage, 'OK', {
          duration: 3000
        });
      }
    });
  }

  editUser(personalNumber: String, firstName: String, lastName: String, birthdate: any, federalState: String, constituency: String) {
    this.userService.editUser(personalNumber, firstName, lastName, birthdate, federalState, constituency).subscribe({
      next: data => {
        this.isSuccessful = true;
        this.snackBar.open('Nutzer wurde erfolgreich bearbeitet!', 'OK', {
          duration: 3000
        });
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.snackBar.open('Nutzer konnte nicht bearbeitet werden! ' + this.errorMessage, 'OK', {
          duration: 3000
        });
      }
    })
  }

  checkAvailableConstituencies(federalState: string) {
    this.constituencies = DropdownItems.checkConstituencies(federalState);
  }

  ngOnInit(): void {
  }

}
