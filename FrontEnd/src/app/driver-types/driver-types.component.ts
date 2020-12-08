import { Component, OnInit } from '@angular/core';

import { DriverType } from '../driverType';
import { DriverTypeService } from '../driver-type.service';

@Component({
  selector: 'app-driverTypes',
  templateUrl: './driver-types.component.html',
  styleUrls: ['./driver-types.component.css']
})
export class DriverTypesComponent implements OnInit {
  driverTypes: DriverType[] | undefined;

  constructor(private driverTypeService: DriverTypeService) { }

  ngOnInit() {
    this.getDriverTypes();
  }

  getDriverTypes(): void {
    this.driverTypeService.getDriverTypes()
    .subscribe(driverTypes => this.driverTypes = driverTypes);
  }
}