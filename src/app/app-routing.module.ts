import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscsComponent } from './discs/discs.component';
import { DiscFinderDisplayComponent } from "./disc-finder-display/disc-finder-display.component";
import { FlightChartDisplayComponent } from "./flight-chart-display/flight-chart-display.component";
import { FriendsDisplayComponent} from "./friends-display/friends-display.component";
import {MyBagDisplayComponent} from "./my-bag-display/my-bag-display.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'disc-finder-display', component: DiscFinderDisplayComponent},
  {path: 'discs', component: DiscsComponent},
  {path: 'flight-chart-display', component: FlightChartDisplayComponent},
  {path: 'friends-display', component: FriendsDisplayComponent},
  {path: 'my-bag-display', component: MyBagDisplayComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/discs', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
