import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { TravelLine } from './travelLine';
//import { TRAVELLINES } from './mockDB';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class TravelLineService {

  constructor(private messageService: MessageService, private http: HttpClient) { }


  getTravelLines(): Observable<any> {
    this.messageService.add('Fetched travel lines');
    return this.http.get('http://localhost:3000/api/lines');
  }

  getTravelLine(code: string): Observable<any> {
    this.messageService.add('Fetched travel line with code ' + code);
    let params = new HttpParams()
    .set("code", code);
    return this.http.get('http://localhost:3000/api/lines/search', {params});

  }

  createTravelLine(newcode: string, newname: string, newcolor: string, newterminalnode1:string, newterminalnode2:string, newpathid1: string, neworientation1: string): void {
    this.http.post('http://localhost:3000/api/lines',
    {
        "name": newname,
        "code": newcode,
        "color": newcolor,
        "terminalNode1": newterminalnode1,
        "terminalNode2": newterminalnode2,
        "linePaths":   [
          {
          "pathId":newpathid1,
          "orientation":neworientation1
      }],
    })
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", val);
            this.messageService.add('Created/Updated travel line with code ' + newcode);
        },
        response => {
            console.log("POST call in error", response);
            this.messageService.add('Error creating travel line with code ' + newcode);

        },
        () => {
            console.log("The POST observable is now completed.");
        });
  }
}
