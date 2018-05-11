import { Component, OnInit, Input } from '@angular/core';

import { CompanyService } from '../company.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  // styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  @Input() clients;
  @Input() partners;


  constructor( private companyService: CompanyService ) { }

  ngOnInit() {
    this.companyService.getCompanies().subscribe( (comps:any) => {
      this.clients  = comps.client;
      this.partners = comps.partner;

      // console.log(comps);
    });
  }


config_a = {
  slidesPerView: 4,
  // spaceBetween: 30,
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
