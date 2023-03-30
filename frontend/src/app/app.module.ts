import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NutzerAnlegenComponent } from './nutzer-anlegen/nutzer-anlegen.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NutzerAnlegenComponent,
    AdminDashboardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterOutlet
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
