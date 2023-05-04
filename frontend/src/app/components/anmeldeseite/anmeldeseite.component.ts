import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {StorageService} from "../../services/storage/storage.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-anmeldeseite',
  templateUrl: './anmeldeseite.component.html',
  styleUrls: ['./anmeldeseite.component.css']
})
export class AnmeldeseiteComponent {
  createForm: FormGroup;
  isLoggedIn = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService, private userService: UserService, private formBuilder: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    this.createForm = this.formBuilder.group({
      personalNumber: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  login(personalNumber: string, password: string) {
    this.authService.login(personalNumber, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        console.log(data);
        if (data.roles[0] == 'ROLE_USER') {
          this.router.navigate([`/wahlAuswahl`]).then(() => {
            window.location.reload();
          });
        } else {
          this.router.navigate([`/admin`]).then(() => {
            window.location.reload();
          });
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.snackBar.open('Anmeldung fehlgeschlagen! ' + this.errorMessage, 'OK', {
          duration: 3000
        });
      }
    });
  }

}
