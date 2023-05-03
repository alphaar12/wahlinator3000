import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { NutzerAnlegenComponent } from './components/admin-dashboard/nutzer-anlegen/nutzer-anlegen.component';
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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AnmeldeseiteComponent } from "./components/anmeldeseite/anmeldeseite.component";
import { NutzerBearbeitenComponent } from "./components/admin-dashboard/nutzer-bearbeiten/nutzer-bearbeiten.component";
import { WahlAuswahlComponent } from './components/wahl-auswahl/wahl-auswahl.component';
import { BundestagswahlComponent } from './components/bundestagswahl/bundestagswahl.component';

import { httpInterceptorProviders } from './helpers/http.interceptor';
import {MatSelectModule} from "@angular/material/select";
import { FaqComponent } from './components/faq/faq.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTabsModule} from "@angular/material/tabs";
import { LandtagswahlbwComponent } from './components/landtagswahlbw/landtagswahlbw.component';
import { LandtagswahlslComponent } from './components/landtagswahlsl/landtagswahlsl.component';
import { Landtagswahl1Component } from './components/landtagswahl1/landtagswahl1.component';

@NgModule({
  declarations: [
    AppComponent,
    NutzerAnlegenComponent,
    AdminDashboardComponent,
    AnmeldeseiteComponent,
    NutzerBearbeitenComponent,
    WahlAuswahlComponent,
    BundestagswahlComponent,
    FaqComponent,
    LandtagswahlbwComponent,
    LandtagswahlslComponent,
    Landtagswahl1Component
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
        MatSnackBarModule,
        MatSelectModule,
        MatMenuModule,
        MatIconModule,
        MatExpansionModule,
        MatTabsModule,
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
    MatSnackBarModule,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},
    httpInterceptorProviders,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
