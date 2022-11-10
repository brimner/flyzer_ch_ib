import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiscsComponent } from './discs/discs.component';
import { FriendsDisplayComponent } from './friends-display/friends-display.component';
import { MyBagDisplayComponent } from './my-bag-display/my-bag-display.component';
import { FlightChartDisplayComponent } from './flight-chart-display/flight-chart-display.component';
import { DiscFinderDisplayComponent } from './disc-finder-display/disc-finder-display.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    DiscsComponent,
    FriendsDisplayComponent,
    MyBagDisplayComponent,
    FlightChartDisplayComponent,
    DiscFinderDisplayComponent,
    DashboardComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
