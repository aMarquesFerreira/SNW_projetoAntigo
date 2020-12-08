import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class NodeService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getNodes(): Observable<any> {
    this.messageService.add('Fetched nodes');
    return this.http.get('http://localhost:3000/api/nodes');
  }

  getNode(shortName: string): Observable<any> {
    this.messageService.add('Fetched node with code ' + shortName);
    return this.http.get('http://localhost:3000/api/nodes/' + shortName);
  }

  createNode(newShortName: string, newFullName: string, newLatitude: number, newLongitude: number, isDepot: boolean, isReliefPoint: boolean, newDuration: number): void {
    this.http.post('http://localhost:3000/api/nodes',
      {
        "shortName": newShortName,
        "fullName": newFullName,
        "coordinates": {
          "latitude": newLatitude,
          "longitude": newLongitude,
        },
        "isDepot": isDepot,
        "isReliefPoint": isReliefPoint,
        "crewTravelTime": {
          "duration": newDuration
        }
      })
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body", val);
          this.messageService.add('Created/Updated node with code ' + newShortName);
        },
        response => {
          console.log("POST call in error", response);
          this.messageService.add('Error creating node with code ' + newShortName);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }
}