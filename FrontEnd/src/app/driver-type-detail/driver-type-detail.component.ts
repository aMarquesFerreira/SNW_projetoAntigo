import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DriverType } from '../driverType';
import { DriverTypeService } from '../driver-type.service';

@Component({
  selector: 'app-driver-type-detail',
  templateUrl: './driver-type-detail.component.html',
  styleUrls: [ './driver-type-detail.component.css' ]
})
export class DriverTypeDetailComponent implements OnInit {

  driverType: DriverType | undefined;

  constructor(
    private route: ActivatedRoute,
    private driverTypeService: DriverTypeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDriverType();
  }

  getDriverType(): void {
    let code = this.route.snapshot.paramMap.get('code');
    if (code != null) {
      this.driverTypeService.getDriverType(code)
      .subscribe(driverType => this.driverType = driverType); 
    }
  }

  goBack(): void {
    this.location.back();
  }

  createDriverType(): void {
    var code = (<HTMLInputElement>document.getElementById("code")).value;
    var name = (<HTMLInputElement>document.getElementById("name")).value;
    var description = (<HTMLInputElement>document.getElementById("description")).value;
    this.driverTypeService.createDriverType(code, name, description);
  }
}