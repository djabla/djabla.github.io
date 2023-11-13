import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  isAtTop = true;
  previousTop = true;
  currentSection: number = 1;
  sidebarVisible = false;
  private translations = [
    'Services',
    'Serbisyo',
    'サービス',
    'Servicio',
    '服务性',
    'Onderhoud',
    'ﺧِﺪﻣَﺔ',
    'Bedienung',
    '서비스',
  ];
  currentTranslation = this.translations[0];
  currentIndex = 1;

  public constructor(
    private router: Router,
  ){
  }
  ngAfterViewInit() {
  }
  
  ngOnInit() {
    this.translate();
    //this.router.navigate(["/"]);
    //this.backToTop();
  }

  translate(){
    setInterval(() => {
      const titleId = document.getElementById('hero-title');
      titleId!.classList.remove('hero-in');
      titleId!.classList.add('hero-out');
      setTimeout(() => {
        this.currentTranslation = this.translations[this.currentIndex];
        this.currentIndex = this.currentIndex == 8 ? 0 : this.currentIndex + 1;
        titleId!.classList.remove('hero-out');
        titleId!.classList.add('hero-in');
      }, 500);
      console.log('translated')
    }, 4000);
  }

  onScroll(e: any) {
    const scrollTop = e.target.scrollTop;
    const isTop = scrollTop <= 350;
    this.isAtTop = isTop;
    if (this.isAtTop != this.previousTop) {
      this.previousTop = this.isAtTop;
      console.log(this.isAtTop);
      this.toggleNav(this.isAtTop);
    }
  }

  toggleNav(bool: boolean){
    const navBar = document.getElementById('nav-bar');
    const homeButton = document.getElementById('home-button');
    const menuButton = document.getElementById('menu-button');
    if(bool){
      navBar!.classList.add('nav-show');
      navBar!.classList.remove('nav-hide');
      homeButton!.classList.add('nav-left-hide');
      homeButton!.classList.remove('nav-left-show');
      menuButton!.classList.add('nav-right-hide');
      menuButton!.classList.remove('nav-right-show');
    }else{
      navBar!.classList.remove('nav-show');
      navBar!.classList.add('nav-hide');
      homeButton!.classList.add('nav-left-show');
      homeButton!.classList.remove('nav-left-hide');
      homeButton!.classList.remove('home-button');
      menuButton!.classList.add('nav-right-show');
      menuButton!.classList.remove('nav-right-hide');
      menuButton!.classList.remove('home-button');
    }
  }

  backToTop(){
    this.currentSection = 1;
    document.getElementById('home')!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

}
