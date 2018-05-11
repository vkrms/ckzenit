import { Component, OnInit, Input, ViewChild, ViewChildren } from '@angular/core';
import { SwiperModule, SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';


import { CompanyService } from '../company.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  // styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  @Input() clients;
  @Input() partners;
  @ViewChild('swiper1') swiper1: SwiperDirective;
  @ViewChild('swiper2') swiper2: SwiperDirective;

  @ViewChildren(SwiperDirective) swipers;


  constructor( private companyService: CompanyService ) { }

  ngOnInit() {
    this.companyService.getCompanies().subscribe( (comps:any) => {
      this.clients  = comps.client;
      this.partners = comps.partner;

      // this.swiperView.update();
      // this.swiperView.setIndex(0);

      // console.log(comps);
    });
  }

  ngAfterViewInit() {
    // this.swipers.changes.subscribe((r)=>{
    //   this.swipers.forEach((swiper)=>{
    //     // swiper.setIndex(0);
    //     setTimeout(swiper.setIndex(0),450);
    //     console.log('yep');
    //   });
    // });
    // setTimeout(()=>this.swiper1.setIndex(0),450);
    // setTimeout(()=>this.swiper2.setIndex(0),450);
  }

  config_a = {
    slidesPerView: 4,
    spaceBetween: 30,
    observer: true,
    navigation: {
      nextEl: '.ol-next-c',
      prevEl: '.ol-prev-c'
    },
    scrollbar: {
        el: '.swiper-scrollbar-c',
        hide: false
    },
  }

  config_b = {
    slidesPerView: 3,
    spaceBetween: 30,
    observer: true,
    navigation: {
      nextEl: '.ol-next-p',
      prevEl: '.ol-prev-p'
    },
    scrollbar: {
        el: '.swiper-scrollbar-p',
        hide: false
    },
  }

}
