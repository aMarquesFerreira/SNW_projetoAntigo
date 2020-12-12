import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SneakersService } from '../sneakers.service';
import { Sneakers } from '../Sneakers';

@Component({
  selector: 'app-sneakers-detail',
  templateUrl: './sneakers-detail.component.html',
  styleUrls: ['./sneakers-detail.component.css']
})
export class SneakersDetailComponent implements OnInit {

  sneakers: Sneakers | undefined;

  constructor(
    private route: ActivatedRoute,
    private sneakersService: SneakersService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSneaker();
  }

  getSneaker(): void {
    let name = this.route.snapshot.paramMap.get('name');
    if (name != null) {
      this.sneakersService.getSneaker(name)
        .subscribe(sneakers => {
          this.sneakers = sneakers
          console.log("retornou os sneakers:");
          console.log(this.sneakers)
        });
    }
  }

  goBack(): void {
    this.location.back();
  }

  createSneakers(): void {
    var name = (<HTMLInputElement>document.getElementById("name")).value;
    this.sneakersService.createSneakers(name);
  }
}
