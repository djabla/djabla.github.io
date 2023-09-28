import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectImgsService {
  goCreateImages: any [] = [
    '../assets/gocreate/buyer-logo.svg',
    '../assets/gocreate/1-landing-page.png',
    '../assets/gocreate/2-login-page.png',
    '../assets/gocreate/3-signup-page.png',
    '../assets/gocreate/4-buyer-homepage.png',
  ];
  lakbayImages: any [] = [
    '../assets/lakbay/2d Adventure Game.png',
    /* '../assets/',
    '../assets/',
    '../assets/',
    '../assets/',
    '../assets/', */
  ];
  pokedexImages: any [] = [
    '../assets/gocreate/1-landing-page.png',
    /* '../assets/',
    '../assets/',
    '../assets/',
    '../assets/',
    '../assets/', */
  ];
  constructor() { }

  getGoCreate(){
    return this.goCreateImages;
  }
  getLakbay(){
    return this.lakbayImages;
  }
  getPokedex(){
    return this.pokedexImages;
  }
}
