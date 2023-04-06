import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nutzer-anlegen',
  templateUrl: './nutzer-anlegen.component.html',
  styleUrls: ['./nutzer-anlegen.component.css']
})
export class NutzerAnlegenComponent {

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
