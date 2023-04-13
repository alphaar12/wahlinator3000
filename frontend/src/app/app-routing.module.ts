import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NutzerAnlegenComponent} from "./components/nutzer-anlegen/nutzer-anlegen.component";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {AnmeldeseiteComponent} from "./components/anmeldeseite/anmeldeseite.component";
import {NutzerBearbeitenComponent} from "./components/nutzer-bearbeiten/nutzer-bearbeiten.component";

const routes: Routes = [
  {path: 'newUser', component: NutzerAnlegenComponent},
  {path: 'admin', component: AdminDashboardComponent},
  {path: 'login', component: AnmeldeseiteComponent},
  {path: 'editUser', component: NutzerBearbeitenComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
