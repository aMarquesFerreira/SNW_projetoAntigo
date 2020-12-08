import { Component, OnInit } from '@angular/core';

import { TravelLine } from '../travelLine';
import { TravelLineService } from '../travel-lines.service';

@Component({
  selector: 'app-travelLine',
  templateUrl: './travel-lines.component.html',
  styleUrls: ['./travel-lines.component.css']
})
export class TravelLineComponent implements OnInit {
  travelLines: TravelLine[] | undefined;

  constructor(private travelLineService: TravelLineService) { }

  ngOnInit() {
    this.getTravelLine();
  }

  getTravelLine(): void {
    this.travelLineService.getTravelLines()
    .subscribe(travelLine => this.travelLines = travelLine);
  }
}
