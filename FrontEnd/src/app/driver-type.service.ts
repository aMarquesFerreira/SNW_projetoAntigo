import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { DriverType } from './driverType';
import { DRIVERTYPES } from './mockDB';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class DriverTypeService {

  constructor(private messageService: MessageService, private http: HttpClient) { }


  getDriverTypes(): Observable<any> {
    this.messageService.add('Fetched driver types');
    return this.http.get('http://localhost:3000/api/driverTypes');
  }

  getDriverType(code: string): Observable<any> {
    this.messageService.add('Fetched driver type with code ' + code);
    return this.http.get('http://localhost:3000/api/driverTypes/' + code);

  }

  createDriverType(newcode: string, newname: string, newdescription: string): void {
    this.http.post('http://localhost:3000/api/driverTypes',
    {
        "name": { "name": newname },
        "code": { "code": newcode },
        "description": { "description": newdescription }
    })
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", val);
            this.messageService.add('Created/Updated driver type with code ' + newcode);
        },
        response => {
            console.log("POST call in error", response);
            this.messageService.add('Error creating driver type with code ' + newcode);

        },
        () => {
            console.log("The POST observable is now completed.");
        });
  }
}
