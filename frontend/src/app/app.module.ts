import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { NutzerAnlegenComponent } from './components/nutzer-anlegen/nutzer-anlegen.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, RouterOutlet } from "@angular/router";
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { AnmeldeseiteComponent } from './components/anmeldeseite/anmeldeseite.component';

@NgModule({
  declarations: [
    AppComponent,
    NutzerAnlegenComponent,
    AdminDashboardComponent,
    AnmeldeseiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
