import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ChipModule,
    GalleriaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
