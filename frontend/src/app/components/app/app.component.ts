import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {StorageService} from "../../services/storage/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wahlinator';
  isSuccessful = false;
  errorMessage = '';
  isLoggedIn = false;

  constructor(private authService: AuthService, private storageService: StorageService, private snackBar: MatSnackBar) {
  }

  logout() {
    this.authService.logout().subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isLoggedIn = false;
        this.storageService.clean();
        window.location.reload();
        this.snackBar.open('Sie wurden abgemeldet!', 'OK', {
          duration: 3000
        });
      },
      error: err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.snackBar.open('Abmeldung fehlgeschlagen!' + this.errorMessage, 'OK', {
          duration: 3000
        });
      }
    })
  }
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
  }
}
