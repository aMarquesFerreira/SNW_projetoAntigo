import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodesComponent } from './nodes/nodes.component';
import { TravelLineComponent } from './travel-lines/travel-lines.component';
import { VehicleTypesComponent } from './vehicle-types/vehicle-types.component';
import { DriverTypesComponent } from './driver-types/driver-types.component';
import { MessagesComponent } from './messages/messages.component';
import { DriverTypeDetailComponent } from './driver-type-detail/driver-type-detail.component';
import { FormsModule } from '@angular/forms';
import { VehicleTypeDetailComponent } from './vehicle-type-detail/vehicle-type-detail.component';
import { TravelLinesDetailComponent } from './travel-lines-detail/travel-lines-detail.component';
import { NodeDetailComponent } from './node-detail/node-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { LinePathsComponent } from './line-paths/line-paths.component';
import { LinePathsDetailComponent } from './line-paths-detail/line-paths-detail.component';
import { MapComponent } from './map/map.component';
import { SneakersComponent } from './sneakers/sneakers.component';
import { SneakersDetailComponent } from './sneakers-detail/sneakers-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NodesComponent,
    TravelLineComponent,
    VehicleTypesComponent,
    DriverTypesComponent,
    MessagesComponent,
    DriverTypeDetailComponent,
    VehicleTypeDetailComponent,
    TravelLinesDetailComponent,
    NodeDetailComponent,
    LinePathsComponent,
    LinePathsDetailComponent,
    MapComponent,
    SneakersComponent,
    SneakersDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
