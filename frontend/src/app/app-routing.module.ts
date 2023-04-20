import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NutzerAnlegenComponent} from "./components/nutzer-anlegen/nutzer-anlegen.component";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {AnmeldeseiteComponent} from "./components/anmeldeseite/anmeldeseite.component";
import {NutzerBearbeitenComponent} from "./components/nutzer-bearbeiten/nutzer-bearbeiten.component";
import {WahlAuswahlComponent} from "./components/wahl-auswahl/wahl-auswahl.component";
import {BundestagswahlComponent} from "./components/bundestagswahl/bundestagswahl.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'newUser', component: NutzerAnlegenComponent},
  {path: 'admin', component: AdminDashboardComponent},
  {path: 'login', component: AnmeldeseiteComponent},
  {path: 'editUser', component: NutzerBearbeitenComponent},
  {path: 'wahlAuswahl', component: WahlAuswahlComponent},
  {path: 'bundestagswahl', component: BundestagswahlComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
