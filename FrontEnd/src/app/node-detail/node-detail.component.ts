import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Node } from '../node';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.css']
})
export class NodeDetailComponent implements OnInit {

  node: Node | undefined;

  constructor(
    private route: ActivatedRoute,
    private nodeService: NodeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getNode();
  }

  getNode(): void {
    let shortName = this.route.snapshot.paramMap.get('shortName');
    if (shortName != null) {
      this.nodeService.getNode(shortName)
        .subscribe(node => {
          this.node = node
          console.log("retornou o node:");
          console.log(this.node)
        });
    }
  }

  goBack(): void {
    this.location.back();
  }

  createNode(): void {
    var shortName = (<HTMLInputElement>document.getElementById("shortName")).value;
    var fullName = (<HTMLInputElement>document.getElementById("fullName")).value;
    var latitude = parseFloat((<HTMLInputElement>document.getElementById("latitude")).value);
    var longitude = parseFloat((<HTMLInputElement>document.getElementById("longitude")).value);
    var isDepot = (<HTMLInputElement>document.getElementById("isDepot")).checked;
    var isReliefPoint = (<HTMLInputElement>document.getElementById("isReliefPoint")).checked;
    var duration = parseInt((<HTMLInputElement>document.getElementById("duration")).value);
    this.nodeService.createNode(shortName, fullName, latitude, longitude, isDepot, isReliefPoint, duration);
  }
}