import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Property } from '../property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Input() projects: Property[]

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.getProperties();
  }

  ngAfterViewInit() {
    // swiper().update();
  }

  getProperties() {
    this.propertyService.getProperties().subscribe(props => {
      this.projects = props;
      // console.log(props);
    })
  }


  config = {
    initialSlide: 0,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 32,
    observer: true,
    navigation: {
      nextEl: '.ol-next',
      prevEl: '.ol-prev'
    },
    scrollbar: {
        el: '.swiper-scrollbar'
    },
  };

}
