import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TravelLineService } from '../travel-lines.service';
import { TravelLine } from '../travelLine';

import { Node } from '../node';
import { NodeService } from '../node.service';
import { Color } from '../Color';
import { LinePathsService } from '../line-paths.service';
import { Path } from '../Path';


@Component({
  selector: 'app-travel-lines-detail',
  templateUrl: './travel-lines-detail.component.html',
  styleUrls: ['./travel-lines-detail.component.css']
})
export class TravelLinesDetailComponent implements OnInit {

  travelLine: TravelLine | undefined;
  nodes: Node[] | undefined;
  name: string = "";
  paths: Path[] | undefined;
  nodepaths: any[] = [];
  terminalNode1: string = "";
  terminalNode2: string = "";
  colorHex: string = "";
  nodepath: string = "";
  selectedpath: any;
  orientation: string = "";
  pathById: string = "";


  constructor(
    private route: ActivatedRoute,
    private travelLineService: TravelLineService,
    private location: Location,
    private nodeService: NodeService,
    private pathService: LinePathsService

  ) { }

  ngOnInit(): void {
    this.getTravelLine();
    this.getNodes();
    this.getPaths();

  }

  getTravelLine(): void {
    let code = this.route.snapshot.paramMap.get('code');
    if (code != null) {
      this.travelLineService.getTravelLine(code)
        .subscribe(travelLine => {

          if (travelLine != undefined && travelLine.length > 0 && travelLine[0].code != undefined) {
            //se ele encontrar um travelline
            this.travelLine = travelLine[0];
            var id = this.travelLine?.linePaths[0].pathId;
            this.getPathById(id);
            var color = new Color(this.travelLine?.color);
            this.colorHex = color.rgbToHex();
          } else {
            //se nao encontrar o codigo, é porque deve querer criar um novo
            this.travelLine = travelLine;
          }
        });
    }
  }

  getNodes(): void {
    this.nodeService.getNodes()
      .subscribe(nodes => {
        this.nodes = nodes;
      })
      ;
  }

  getPathById(id: any): any {
    this.pathService.getLinePath(id)
      .subscribe(path => {
        for (var x = 0; x < path.segments.length; x++) {
          this.pathById += path.segments[x].initialNode + "-"
          if (x == path.segments.length - 1) {
            this.pathById += path.segments[x].finalNode
          }
        }
      })
      ;
    }


  getPaths(): void {
    this.pathService.getLinePaths()
      .subscribe(paths => {
        this.paths = paths;
        for (var k = 0; k < paths.length; k++) {

          for (var x = 0; x < paths[k].segments.length; x++) {
            this.nodepath += paths[k].segments[x].initialNode + "-"
            if (x == paths[k].segments.length - 1) {
              this.nodepath += paths[k].segments[x].finalNode
              if (this.paths != null) {
                this.nodepaths.push({ id: this.paths[k].pathId, valor: this.nodepath })

              }
              this.nodepath = ""
            }
          }
        }
      })
      ;
  }

  goBack(): void {
    this.location.back();
  }

  createTravelLine(): void {
    var color = (<HTMLInputElement>document.getElementById("color")).value;
    var color2 = new Color(color)
    var colorRgb = color2.toRgb()
    var code = (<HTMLInputElement>document.getElementById("code")).value;
    var name = (<HTMLInputElement>document.getElementById("name")).value;
    var terminalNode1 = this.terminalNode1;
    var terminalNode2 = this.terminalNode2;
    var selectedpath = this.selectedpath; // path id
    var orientation = (<HTMLInputElement>document.getElementById("orientation")).value;
    this.travelLineService.createTravelLine(code, name, colorRgb, terminalNode1, terminalNode2, selectedpath, orientation);
  }
}
