import { Component } from '@angular/core';

@Component({
  selector: 'app-buying-process',
  templateUrl: './buying-process.component.html',
  styleUrls: ['./buying-process.component.scss']
})
export class BuyingProcessComponent {
  activeIndex: any = 0;
  images: any[] | undefined = [
    '../../../../assets/processes/selling/1.jpeg',
    '../../../../assets/processes/buying/2.jpg',
    '../../../../assets/processes/buying/3.webp',
    '../../../../assets/processes/buying/4.jpg',
  ]

  public constructor() { }

  ngOnInit() {
    
  }

  isAccordionTabDisabled(index: number): boolean {
    return index === this.activeIndex;
  }
}
