import { Component, OnInit } from '@angular/core';
import {Disc, DiscDataService} from "../disc-data.service";
import {Observable, switchMap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {response} from "express";

@Component({
  selector: 'app-disc-finder-display',
  templateUrl: './disc-finder-display.component.html',
  styleUrls: ['./disc-finder-display.component.scss']
})
export class DiscFinderDisplayComponent implements OnInit {
  //selectedDiscName: string;
  selectedDisc: Observable<Disc>;
  discs: Observable<Disc[]>;





  constructor(
    private discDataService: DiscDataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {

    //this.selectDisc('D4 Max');
    this.discs = this.discDataService.getDiscDetails()

  }





  public selectDisc(model: string): void {
    this.selectedDisc = this.discDataService.getDisc(model);
  }

  getAllDiscs(): void {
    this.discDataService.getDiscDetails()
      //.subscribe(discs => this.discs = discs);
  }
}
