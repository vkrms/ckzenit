import { Component, OnInit, Input } from '@angular/core';

import { SlideService } from '../slide.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() slides;

  constructor(private slideService: SlideService) {}

  ngOnInit() {
    this.slideService.getSlides().subscribe(slides => {
      this.slides = slides;
      // console.log(slides);
    });
  }

  config = {
    initialSlide: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    observer: true,
    navigation: {
      nextEl: '.ol-next',
      prevEl: '.ol-prev'
    },
    scrollbar: {
        el: '.swiper-scrollbar'
    }
  }

}
