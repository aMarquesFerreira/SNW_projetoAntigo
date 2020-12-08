import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DriverTypesComponent } from './driver-types/driver-types.component';
import { DriverTypeDetailComponent } from './driver-type-detail/driver-type-detail.component';
import { VehicleTypeDetailComponent } from './vehicle-type-detail/vehicle-type-detail.component';
import { VehicleTypesComponent } from './vehicle-types/vehicle-types.component';
import { NodeDetailComponent } from './node-detail/node-detail.component';
import { NodesComponent } from './nodes/nodes.component';
import { TravelLineComponent } from './travel-lines/travel-lines.component';
import { TravelLinesDetailComponent } from './travel-lines-detail/travel-lines-detail.component';
import { MapComponent } from './map/map.component';
import { LinePathsDetailComponent } from './line-paths-detail/line-paths-detail.component';
import { LinePathsComponent } from './line-paths/line-paths.component';


const routes: Routes = [
  { path: 'driverType/:code', component: DriverTypeDetailComponent },
  { path: 'driverTypes', component: DriverTypesComponent },
  { path: 'vehicleType/:vehicleId', component: VehicleTypeDetailComponent },
  { path: 'vehicleTypes', component: VehicleTypesComponent },
  { path: 'node/:shortName', component: NodeDetailComponent },
  { path: 'nodes', component: NodesComponent },
  { path: 'travelLine/:code', component: TravelLinesDetailComponent },
  { path: 'travelLines', component: TravelLineComponent },
  { path: 'paths/:pathId', component: LinePathsDetailComponent },
  { path: 'paths', component: LinePathsComponent },
  { path: 'map', component: MapComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}