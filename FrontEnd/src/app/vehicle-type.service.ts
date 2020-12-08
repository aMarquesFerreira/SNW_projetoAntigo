import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { VehicleType } from './vehicleType';
//import { VEHICLETYPES } from './mockDB';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class VehicleTypeService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getVehicleTypes(): Observable<any> {
    this.messageService.add('Fetched vehicle types');
    return this.http.get('http://localhost:3000/api/vehicleTypes');
  }

  getVehicleType(vehicleId: string): Observable<any> {
    this.messageService.add('Fetched vehicle type vehicleId=${vehicleId}');
    return this.http.get('http://localhost:3000/api/vehicleTypes/' + vehicleId);
  }

  createVehicleType(newvehicleid: string, newname: string, newautonomy: number, newcost: number, newaverageSpeed: number, newfuelType: number, newconsumption: number, newemissions: number): void {
    this.http.post('http://localhost:3000/api/vehicleTypes',
      {
        "vehicleId": newvehicleid,
        "name": newname,
        "autonomy": newautonomy,
        "cost": newcost,
        "averageSpeed": newaverageSpeed,
        "energySource": {
          "fuelType": newfuelType
        },
        "consumption": newconsumption,
        "emissions": newemissions
      })
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body", val);
          this.messageService.add('Created/Updated vehicle type with vehicleid ' + newvehicleid);
        },
        response => {
          console.log("POST call in error", response);
          this.messageService.add('Error creating vehicle type with newvehicleid ' + newvehicleid);

        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }
}
