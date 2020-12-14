import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SneakersService } from '../sneakers.service';
import { Sneakers } from '../Sneakers';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sneakers-detail',
  templateUrl: './sneakers-detail.component.html',
  styleUrls: ['./sneakers-detail.component.css']
})
export class SneakersDetailComponent implements OnInit {
  selectedFile: File | undefined;
  sneakers: Sneakers | undefined;

    constructor(
    private route: ActivatedRoute,
    private sneakersService: SneakersService,
    private location: Location,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getSneaker();
  }

  // onFileSelected(event) {
  //   this.selectedFile = <File>event.target.files[0];
  // }

  // onUpload(){
  //   const fd = new FormData();
  //   if(this.selectedFile != undefined){
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
  //   this.http.post('http://localhost:3030/api/sneakers', fd)
  //   .subscribe(res => {
  //     console.log(res)
  //   });
  // }
  // }
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
