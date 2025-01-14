import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SneakersComponent } from './sneakers/sneakers.component';
import { SneakersDetailComponent } from './sneakers-detail/sneakers-detail.component';
import { PersonalizedComponent } from './personalized/personalized.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    SneakersComponent,
    SneakersDetailComponent,
    PersonalizedComponent,
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
