import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LinePathsService {

  constructor(private messageService: MessageService, private http: HttpClient) { }


  getLinePaths(): Observable<any> {
    this.messageService.add('Fetched line paths');
    return this.http.get('http://localhost:3000/api/paths');
  }

  getLinePath(pathId: number): Observable<any> {
    this.messageService.add('Fetched line path with id ' + pathId);
    return this.http.get('http://localhost:3000/api/paths/'+ pathId);

  }

  createLinePaths(newpathid: number, isempty: boolean, newdistance1: number, newdistance2: number,newduration1: number, newduration2: number, newinitialnode1: string, newinitialnode2: string, newfinalnode1: string, newfinalnode2: string): void {

    this.http.post('http://localhost:3000/api/paths',
      {
        "pathId": newpathid,
        "isEmpty": isempty,
        "distance": newdistance1 + newdistance2,
        "duration": newduration1 + newduration2,
        "segments": [
          {
            "initialNode": newinitialnode1,
            "finalNode": newfinalnode1,
            "duration": newduration1,
            "distance": newdistance1
          },
          {
            "initialNode": newinitialnode2,
            "finalNode": newfinalnode2,
            "duration": newduration2,
            "distance": newdistance2
          }],
      })
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body", val);
          this.messageService.add('Created/Updated line path with id ' + newpathid);
        },
        response => {
          console.log("POST call in error", response);
          this.messageService.add('Error creating line path with id ' + newpathid);

        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }
}
