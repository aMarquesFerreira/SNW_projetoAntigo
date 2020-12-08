import { Component, OnInit } from '@angular/core';

import { VehicleType } from '../vehicleType';
import { VehicleTypeService } from '../vehicle-type.service';

@Component({
  selector: 'app-vehicleTypes',
  templateUrl: './vehicle-types.component.html',
  styleUrls: ['./vehicle-types.component.css']
})
export class VehicleTypesComponent implements OnInit {
  vehicleTypes: VehicleType[] | undefined;

  constructor(private vehicleTypeService: VehicleTypeService) { }

  ngOnInit() {
    this.getVehicleTypes();
  }

  getVehicleTypes(): void {
    this.vehicleTypeService.getVehicleTypes()
    .subscribe(vehicleTypes => this.vehicleTypes = vehicleTypes);
  }
}
