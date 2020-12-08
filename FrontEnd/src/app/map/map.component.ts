import { AfterViewInit, Component } from '@angular/core';

import { Node } from '../node';
import { NodeService } from '../node.service';
import { TravelLine } from '../travelLine';
import { TravelLineService } from '../travel-lines.service';

import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  private map: any;
  private nodes: Node[] | undefined;
  private lines: TravelLine[] | undefined;

  constructor(private nodeService: NodeService, private travelLineService: TravelLineService) {
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.addNodesToMap();
  }

  private initMap(): void {

    this.map = L.map('map', {
      center: [41.206155, -8.369784],
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  private addNodesToMap(): void {
    this.nodeService.getNodes()
      .subscribe(res => {
        this.nodes = res;
        if (this.nodes != undefined) {
          this.nodes.forEach(node => {
            this.addCircle(node.coordinates.props.latitude, node.coordinates.props.longitude)
          });
        }
      });
  }

  private addCircle(latitude: number, longitude: number): void {
    L.circle([latitude, longitude], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 1,
      radius: 50
    }).addTo(this.map);
  }

  private addLinesToMap(): void {
    this.travelLineService.getTravelLines()
      .subscribe(res => {
        this.lines = res;
        if (this.lines != undefined) {
          this.lines.forEach(line => {
            this.addLineToMap(line);
          })
        }
      });
  }

  private addLineToMap(line: TravelLine): void {
    const color = line.color;
    line.linePaths.forEach(element => {
      // get path by element.id
    });
  }

  private addEdge(lat1: number, long1: number, lat2: number, long2: number, color: string) {

    var pointA = new L.LatLng(lat1, long1);
    var pointB = new L.LatLng(lat2, long2);
    var pointList = [pointA, pointB];

    var edge = new L.Polyline(pointList, {
      color: color,
      weight: 3,
      opacity: 0.8,
      smoothFactor: 1
    });

    edge.addTo(this.map);
  }
}