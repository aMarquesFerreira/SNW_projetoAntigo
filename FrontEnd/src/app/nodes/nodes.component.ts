import { Component, OnInit } from '@angular/core';

import { Node } from '../node';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {
  nodes: Node[] | undefined;

  constructor(private nodeService: NodeService) { }

  ngOnInit() {
    this.getNodes();
  }

  getNodes(): void {
    this.nodeService.getNodes()
    .subscribe(nodes => this.nodes = nodes);
  }
}