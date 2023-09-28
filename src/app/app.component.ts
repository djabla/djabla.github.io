import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Skill, SkillsService } from './services/skills.service';
import { ProjectImgsService } from './services/project-imgs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  currentSection: number = 1;
  currentPosition: any;
  startPosition: number = 0;
  isAtTop = true;
  previousTop = true;
  sidebarVisible: boolean = false;

  public skills: Skill[] = [];
  public goCreateImages: any [] = [];
  public lakbayImages: any [] = [];
  public pokedexImages: any [] = [];
  responsiveOptions: any[] = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 1 }
  ];

  public constructor(
    private router: Router,
    private scroller: ViewportScroller,
    private skillsService: SkillsService,
    private imgService: ProjectImgsService,
  ){}
  
  ngOnInit(): void {
    this.router.navigate(["/"]);
    this.backToTop();
    this.getSkills();
    this.getImages();
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

  getSkills(){
    this.skills = this.skillsService.getSkills();
  }

  getImages(){
    this.goCreateImages = this.imgService.getGoCreate();
    this.lakbayImages = this.imgService.getLakbay();
    this.pokedexImages = this.imgService.getPokedex();
  }

  goToSpecificSection(section: number){
    this.currentSection = section;
    let anchor: string = 'home';
    switch(this.currentSection){
      case 1: anchor = 'home'; break;
      case 2: anchor = 'about'; break;
      case 3: anchor = 'skills'; break;
      case 4: anchor = 'projects'; break;
      case 5: anchor = 'contact'; break;
    }
    this.sidebarVisible = false;
    document.getElementById(anchor)!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  backToTop(){
    this.currentSection = 1;
    document.getElementById('home')!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  goToSite(link: any){
    window.open(link, '_blank');
  }

}
