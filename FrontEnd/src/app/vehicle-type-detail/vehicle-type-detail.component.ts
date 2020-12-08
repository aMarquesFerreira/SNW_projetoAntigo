import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { VehicleType } from '../vehicleType';
import { VehicleTypeService } from '../vehicle-type.service';

@Component({
  selector: 'app-vehicle-type-detail',
  templateUrl: './vehicle-type-detail.component.html',
  styleUrls: ['./vehicle-type-detail.component.css']
})
export class VehicleTypeDetailComponent implements OnInit {

  vehicleType: VehicleType | undefined;

  constructor(
    private route: ActivatedRoute,
    private vehicleTypeService: VehicleTypeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getVehicleType();
  }

  getVehicleType(): void {
    let vehicleId = this.route.snapshot.paramMap.get('vehicleId');
    if (vehicleId != null) {
      this.vehicleTypeService.getVehicleType(vehicleId)
        .subscribe(vehicleType => this.vehicleType = vehicleType);
    }
  }

  goBack(): void {
    this.location.back();
  }

  createVehicleType(): void {
    var vehicleId = (<HTMLInputElement>document.getElementById("vehicleId")).value;
    var name = (<HTMLInputElement>document.getElementById("name")).value;
    var autonomy = parseInt((<HTMLInputElement>document.getElementById("autonomy")).value, 10);
    var cost = parseFloat((<HTMLInputElement>document.getElementById("cost")).value);
    var averageSpeed = parseInt((<HTMLInputElement>document.getElementById("averageSpeed")).value, 10);
    var fuelType = parseInt((<HTMLInputElement>document.getElementById("fuelType")).value, 10);
    var consumption = parseFloat((<HTMLInputElement>document.getElementById("consumption")).value);
    var emissions = parseInt((<HTMLInputElement>document.getElementById("emissions")).value, 10);
    this.vehicleTypeService.createVehicleType(vehicleId, name, autonomy, cost, averageSpeed, fuelType, consumption, emissions);
  }
}