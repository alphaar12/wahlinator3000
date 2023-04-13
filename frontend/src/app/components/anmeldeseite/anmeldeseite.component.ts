import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-anmeldeseite',
  templateUrl: './anmeldeseite.component.html',
  styleUrls: ['./anmeldeseite.component.css']
})
export class AnmeldeseiteComponent {



  createForm: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
    this.createForm = this.formBuilder.group({
      personalNumber: ['', Validators.required],
      password: ['', Validators.required],
    });
  }





}
