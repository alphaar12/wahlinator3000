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
  {path: 'wahlAuswahl', component: WahlAuswahlComponent},
  {path: 'bundestagswahl', component: BundestagswahlComponent},
  {path: 'faq', component: FaqComponent},
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
