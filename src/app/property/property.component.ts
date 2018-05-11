import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Property } from '../property';
import { PropertyService } from '../property.service';

import { SwiperModule, SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  // styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  @Input() property: Property;
  @Input() images;
  @Input() prev;
  @Input() next;

  @ViewChild(SwiperDirective) swiperView: SwiperDirective;

  props; id; total;

  index = 0o1;
  IDs = [];

  anew($event) {
    console.log('click');
  }

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private location: Location
  ) {
    route.params.subscribe(val => {
      this.getProperty();
      this.setPrevNextLink();
      // this.test = 0; //reset swiper position
    });
  }



  ngOnInit(): void {

    this.id = +this.route.snapshot.paramMap.get('id');

    this.getProperty();

    this.setPrevNextLink();

  }

  resetIndex(){
    this.swiperView.setIndex(0);
  }

  getProperty() {
    // console.log(this.route);

    this.id = +this.route.snapshot.paramMap.get('id');

    this.propertyService.getProperty(this.id)
      .subscribe(property => {
        this.property = property;
        this.images = property.attachments;
        this.total = property.attachments.length;
      });
  }

  setPrevNextLink(){
    this.propertyService.getProperties().subscribe(props => {
      this.props = props;
      // console.log(props);
      for (var prop of props) {
        // console.log(prop.id);
        this.IDs.push(prop.id);
      }
      var index = this.IDs.findIndex((el)=>el==this.id);
      var n = index + 1;
      var p = index - 1;
      this.next = '/property/'+this.IDs[n];
      this.prev = '/property/'+this.IDs[p];
      // console.log('next',this.next,'prev',this.prev);
    });
  }

  public onIndexChange(index: number): void {
    // console.log('Swiper index: ', index);
    this.index = index + 1;
  }


  swiperCfg = {
    direction: 'vertical',
    slidesPerView: 1,
    observer: true,
    mousewheel: true,
    navigation: {
      nextEl: '.sc-next',
      prevEl: '.sc-prev'
    }
  };

}
