import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nutzer-bearbeiten',
  templateUrl: './nutzer-bearbeiten.component.html',
  styleUrls: ['./nutzer-bearbeiten.component.css']
})
export class NutzerBearbeitenComponent {


  createForm: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
    this.createForm = this.formBuilder.group({
      personalNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthdate: ['', Validators.required],
      zipCode: ['', Validators.required]
    });
  }

  addUser(personalNumber: String, firstName: String, lastName: String, birthdate: any, zipCode: number) {
    this.userService.addUser(personalNumber, firstName, lastName, birthdate, zipCode).subscribe(() => {
      this.router.navigate(['/list']).then(r => {})
    });
  }

  ngOnInit(): void {


  }


}
