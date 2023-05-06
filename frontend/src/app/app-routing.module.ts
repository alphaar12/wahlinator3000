import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {AnmeldeseiteComponent} from "./components/anmeldeseite/anmeldeseite.component";
import {WahlAuswahlComponent} from "./components/wahl-auswahl/wahl-auswahl.component";
import {BundestagswahlComponent} from "./components/bundestagswahl/bundestagswahl.component";
import {FaqComponent} from "./components/faq/faq.component";
import {LandtagswahlbwComponent} from "./components/landtagswahlbw/landtagswahlbw.component";
import {LandtagswahlslComponent} from "./components/landtagswahlsl/landtagswahlsl.component";
import {Landtagswahl1Component} from "./components/landtagswahl1/landtagswahl1.component";


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'admin', component: AdminDashboardComponent},
  {path: 'login', component: AnmeldeseiteComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'wahlAuswahl', component: WahlAuswahlComponent},
  {path: 'bundestagswahl', component: BundestagswahlComponent},
  {path: 'landtagswahl1', component: LandtagswahlbwComponent},
  {path: 'landtagswahl2', component: LandtagswahlslComponent},
  {path: 'landtagswahl3', component: Landtagswahl1Component}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }

/*
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AnmeldeseiteComponent } from './components/anmeldeseite/anmeldeseite.component';
import { FaqComponent } from './components/faq/faq.component';
import { WahlAuswahlComponent } from './components/wahl-auswahl/wahl-auswahl.component';
import { BundestagswahlComponent } from './components/bundestagswahl/bundestagswahl.component';
import { UserAuthGuard } from './guards/user-auth.guard';

import { LandtagswahlbwComponent } from './components/landtagswahlbw/landtagswahlbw.component';
import { LandtagswahlslComponent } from './components/landtagswahlsl/landtagswahlsl.component';
import { Landtagswahl1Component } from './components/landtagswahl1/landtagswahl1.component';
import { AuthGuard } from './auth.guard'; // Import AuthGuard

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard], // Add canActivate attribute with AuthGuard
  },
  { path: 'login', component: AnmeldeseiteComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'wahlAuswahl', component: WahlAuswahlComponent, canActivate: [UserAuthGuard] },
  { path: 'bundestagswahl', component: BundestagswahlComponent, canActivate: [UserAuthGuard] },
  { path: 'landtagswahl1', component: LandtagswahlbwComponent, canActivate: [UserAuthGuard] },
  { path: 'landtagswahl2', component: LandtagswahlslComponent, canActivate: [UserAuthGuard] },
  { path: 'landtagswahl3', component: Landtagswahl1Component, canActivate: [UserAuthGuard] },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
})
export class AppRoutingModule {}

 */
