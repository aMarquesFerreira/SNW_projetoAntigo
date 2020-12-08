import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LinePathsService } from '../line-paths.service';
import { Path } from '../Path';

@Component({
  selector: 'app-line-paths-detail',
  templateUrl: './line-paths-detail.component.html',
  styleUrls: ['./line-paths-detail.component.css']
})
export class LinePathsDetailComponent implements OnInit {

  linePath: Path | undefined;


  constructor(
    private route: ActivatedRoute,
    private pathService: LinePathsService,
    private location: Location
  ) { }

  ngOnInit(): void {
   this.getLinePaths();
  }

  getLinePaths(): void {
    let pathId = this.route.snapshot.paramMap.get('pathId');
    if (pathId != null) {
      this.pathService.getLinePath(parseInt(pathId, 10))
        .subscribe(linePath => this.linePath = linePath);
    }
  }

  goBack(): void {
    this.location.back();
  }

  createLinePath(): void {
    var pathId = parseInt((<HTMLInputElement>document.getElementById("pathId")).value, 10);
    var isEmpty = (<HTMLInputElement>document.getElementById("isEmpty")).value;
    var distance = parseInt((<HTMLInputElement>document.getElementById("distance")).value, 10);
    var duration = parseFloat((<HTMLInputElement>document.getElementById("duration")).value);
    var initialNode = parseInt((<HTMLInputElement>document.getElementById("initialNode")).value, 10);
    var finalNode = parseInt((<HTMLInputElement>document.getElementById("finalNode")).value, 10);
   // this.linePathsService.createLinePath(pathId, isEmpty, distance, duration, initialNode, finalNode);
  }
}
