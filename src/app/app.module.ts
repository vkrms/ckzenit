// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AppRoutingModule } from './/app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { DocsComponent } from './docs/docs.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ModalPropComponent } from './modal-prop/modal-prop.component';

// SERVICES
import { PropertyService } from './property.service';
import { DocsService } from './docs.service';
import { SlideService } from './slide.service';
import { CompanyService } from './company.service';
import { ContactService } from './contact.service';
import { DomService } from './dom.service';
import { ModalService } from './modal.service';

// PIPES
import { SafePipe } from './safe.pipe';

//CLASSES & INTERFACES



const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    HomeComponent,
    ProjectsComponent,
    DocsComponent,
    ClientsComponent,
    ContactsComponent,
    SafePipe,
    ModalPropComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    SwiperModule,
    PerfectScrollbarModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: SWIPER_CONFIG,      useValue: DEFAULT_SWIPER_CONFIG },
    PropertyService,
    DocsService,
    SlideService,
    CompanyService,
    ContactService,
    ModalService,
    DomService
  ],
  entryComponents:[
    ModalPropComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
