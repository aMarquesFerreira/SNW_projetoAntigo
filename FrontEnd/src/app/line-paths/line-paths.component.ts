import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinePathsService } from '../line-paths.service';
import { Path } from '../Path';
import { Location } from '@angular/common';


@Component({
  selector: 'app-line-paths',
  templateUrl: './line-paths.component.html',
  styleUrls: ['./line-paths.component.css']
})
export class LinePathsComponent implements OnInit {

  linePaths: Path[] | undefined;
  path: String = "";
  nodepaths: any[] = [];


  constructor(
    private route: ActivatedRoute,
    private pathService: LinePathsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getLinePath();
  }

  getLinePath(): void {
    this.pathService.getLinePaths()
      .subscribe(linePath => {
        this.linePaths = linePath;
        console.log("LINE PATHS:")
        console.log(this.linePaths)

        if(this.linePaths != undefined){
          for(var k = 0; k < this.linePaths.length; k++){
            var pathId = this.linePaths[k].pathId;
            for (var x = 0; x < this.linePaths[k].segments.length; x++) {
              this.path += this.linePaths[k].segments[x].initialNode + "-"
              if (x == this.linePaths[k].segments.length - 1) {
                this.path += this.linePaths[k].segments[x].finalNode
                this.nodepaths.push({ id: pathId, valor: this.path })
                this.path = "";
              }
            }
          }
          
        }
        console.log(this.nodepaths)
        
      });
  }

}
