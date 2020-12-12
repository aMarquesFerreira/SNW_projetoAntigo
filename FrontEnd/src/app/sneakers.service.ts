import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SneakersService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getSneakers(): Observable<any> {
    this.messageService.add('Fetched sneakers');
    return this.http.get('http://localhost:2525/api/sneakers');
  }

  getSneaker(name: string): Observable<any> {
    this.messageService.add('Fetched sneakers name=${name}');
    return this.http.get('http://localhost:2525/api/sneakers/' + name);
  }

  createSneakers(newname: string): void {
    this.http.post('http://localhost:2525/api/sneakers',
      {
        "name": newname
      })
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body", val);
          this.messageService.add('Created/Updated sneakers  with name ' + newname);
        },
        response => {
          console.log("POST call in error", response);
          this.messageService.add('Error creating sneakers with name ' + newname);

        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }
}
