import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {AnmeldeseiteComponent} from "./components/anmeldeseite/anmeldeseite.component";
import {WahlAuswahlComponent} from "./components/wahl-auswahl/wahl-auswahl.component";
import {BundestagswahlComponent} from "./components/bundestagswahl/bundestagswahl.component";
import {FaqComponent} from "./components/faq/faq.component";


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'admin', component: AdminDashboardComponent},
  {path: 'login', component: AnmeldeseiteComponent},
  {path: 'wahlAuswahl', component: WahlAuswahlComponent},
  {path: 'bundestagswahl', component: BundestagswahlComponent},
  {path: 'faq', component: FaqComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
