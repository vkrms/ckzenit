import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Property } from '../property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  @Input() property: Property;
  @Input() images;
  @Input() prev;
  @Input() next;

  props; id;
  IDs = [];


  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private location: Location
  ) {
    route.params.subscribe(val => {
      this.getProperty();
      this.setPrevNextLink();
    });
  }

  ngOnInit(): void {

    this.id = +this.route.snapshot.paramMap.get('id');

    this.getProperty();

    this.setPrevNextLink();

  }

  getProperty() {
    // console.log(this.route);

    this.id = +this.route.snapshot.paramMap.get('id');

    this.propertyService.getProperty(this.id)
      .subscribe(property => {
        this.property = property;
        this.images = property.attachments;
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

  swiperCfg = {
    direction: 'vertical',
    slidesPerView: 1,
    // loop: true,
    mousewheel: true,
    navigation: {
      nextEl: '.sc-next',
      prevEl: '.sc-prev'
    }
  };

}
