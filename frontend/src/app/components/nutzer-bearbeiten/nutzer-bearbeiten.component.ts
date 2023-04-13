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


  createForm: FormGroup;
  showButton = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  public userDetails: any;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    this.createForm = this.formBuilder.group({
      personalNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthdate: ['', Validators.required],
      zipCode: ['', Validators.required],
    });
  }

  getUser(personalNumber: string) {
    this.userService.getUserByPersonalNumber(personalNumber).subscribe(
      (data: any) => {
        this.userDetails = data;
        console.log(this.userDetails);
        this.setValue("firstName", this.userDetails.firstName);
        this.setValue("lastName", this.userDetails.lastName);
        this.setValue("firstName", this.userDetails.firstName);
        this.setValue("birthdate", this.userDetails.birthdate);
        this.setValue("zipCode", this.userDetails.zipCode);
      }
    );

  }

  setValue(id: string, value: string) {
    const inputField = document.getElementById(id);
    if (inputField) {
      inputField.setAttribute("value", value);
    }
  }

  ngOnInit(): void {
  }

}
