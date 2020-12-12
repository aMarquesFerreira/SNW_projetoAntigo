import { Component, OnInit } from '@angular/core';
import { Sneakers } from '../Sneakers';
import { SneakersService } from '../sneakers.service';

@Component({
  selector: 'app-sneakers',
  templateUrl: './sneakers.component.html',
  styleUrls: ['./sneakers.component.css']
})
export class SneakersComponent implements OnInit {
  sneakers: Sneakers[] | undefined;

  constructor(private sneakersService: SneakersService) { }

  ngOnInit() {
    this.getSneakers();
  }

  getSneakers(): void {
    this.sneakersService.getSneakers()
    .subscribe(sneakers => this.sneakers = sneakers);
  }
}
