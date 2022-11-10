import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FLYZER';
  viewBag: boolean = false;
  viewFlight: boolean = false;
  viewDiscFind: boolean = false;
  viewFriends: boolean = false;

  gotoBag(): void{
    this.viewBag = !this.viewBag;
    this.viewFlight = false;
    this.viewDiscFind = false;
    this.viewFriends = false;
  }
  gotoFlight(): void{
    this.viewFlight = !this.viewFlight;
    this.viewBag = false;
    this.viewDiscFind = false;
    this.viewFriends = false;
  }
  gotoDiscFind(): void{
    this.viewDiscFind = !this.viewDiscFind;
    this.viewFlight = false;
    this.viewBag = false;
    this.viewFriends = false;
  }
  gotoFriends(): void{
    this.viewFriends = !this.viewFriends;
    this.viewFlight = false;
    this.viewDiscFind = false;
    this.viewBag = false;
  }
}
