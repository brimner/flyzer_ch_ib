import { Component, OnInit } from '@angular/core';
import {Disc} from '../disc';
import {DISCS} from '../mock-discs';
import { DiscService } from '../disc.service';
@Component({
  selector: 'app-discs',
  templateUrl: './discs.component.html',
  styleUrls: ['./discs.component.scss']
})
export class DiscsComponent implements OnInit {

  discs: Disc[] = [];


  constructor(
    private discService: DiscService
  ) { }

  ngOnInit(): void {
    this.getDiscs();
  }

  selectedDisc?: Disc;
  onSelect(disc: Disc): void {
    this.selectedDisc = disc;
  }

  getDiscs(): void {
    this.discs = this.discService.getDiscs();
  }

}
