import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SwiperModule, SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';

import { Property } from '../property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  // styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Input() projects: Property[]
  @ViewChild(SwiperDirective) swiperView: SwiperDirective;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.getProperties();
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit');
    // setTimeout(()=>{
    //   this.swiperView.setIndex(0);
    //   window.dispatchEvent(new Event('resize'));
    // },1000);
  }

  getProperties() {
    this.propertyService.getProperties().subscribe(props => {
      this.projects = props;
      // sad, but following does nothing
      // this.swiperView.update();
      // window.dispatchEvent(new Event('resize'));
    })
  }

  config = {
    initialSlide: 0,
    slidesPerView: 4,
    // slidesPerGroup: 4,
    spaceBetween: 32,
    observer: true,
    updateOnImagesReady: true,
    navigation: {
      nextEl: '.ol-next',
      prevEl: '.ol-prev'
    },
    scrollbar: {
        el: '.swiper-scrollbar'
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 1
      }
    }
  };

}
