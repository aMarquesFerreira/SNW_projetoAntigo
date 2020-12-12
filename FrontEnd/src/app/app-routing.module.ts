import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SneakersDetailComponent } from './sneakers-detail/sneakers-detail.component';
import { SneakersComponent } from './sneakers/sneakers.component';


const routes: Routes = [
  { path: 'sneakers/:name', component: SneakersDetailComponent },
  { path: 'sneakers', component: SneakersComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {} 