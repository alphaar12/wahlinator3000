import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NutzerAnlegenComponent} from "./nutzer-anlegen/nutzer-anlegen.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  {path: 'newUser', component: NutzerAnlegenComponent},
  {path: 'admin', component: AdminDashboardComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
