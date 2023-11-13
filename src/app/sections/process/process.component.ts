import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent {
  activeIndex: any = 0;
  images: any[] | undefined = [
    '../../../assets/processes/selling/1.jpeg',
    '../../../assets/processes/selling/2.jpg',
    '../../../assets/processes/selling/3.webp',
    '../../../assets/processes/selling/4.jpeg',
    '../../../assets/processes/selling/5.png',
  ]

  public constructor() { }

  ngOnInit() {
    
  }

  isAccordionTabDisabled(index: number): boolean {
    return index === this.activeIndex;
  }
}
