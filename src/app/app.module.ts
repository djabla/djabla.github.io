import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketingPlanComponent } from './sections/marketing-plan/marketing-plan.component';
import { ProcessComponent } from './sections/process/process.component';
import { FooterComponent } from './sections/footer/footer.component';
import { ContactUsComponent } from './sections/contact-us/contact-us.component';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { GalleriaModule } from 'primeng/galleria';
import { SidebarModule } from 'primeng/sidebar';
import { CarouselModule } from 'primeng/carousel';
import { AccordionModule } from 'primeng/accordion';
import { BuyingProcessComponent } from './sections/process/buying-process/buying-process.component';
import { CapabilitiesComponent } from './sections/capabilities/capabilities.component';
import { OfferComponent } from './sections/offer/offer.component';
import { MarketComponent } from './sections/market/market.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketingPlanComponent,
    ProcessComponent,
    FooterComponent,
    ContactUsComponent,
    BuyingProcessComponent,
    CapabilitiesComponent,
    OfferComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ChipModule,
    GalleriaModule,
    SidebarModule,
    CarouselModule,
    AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
