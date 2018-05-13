import { Component, OnInit } from '@angular/core';
import { SwiperModule, SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal-prop',
  templateUrl: './modal-prop.component.html',
  // styleUrls: ['./modal-prop.component.css']
})
export class ModalPropComponent implements OnInit {

  total; index; images;
  // index = 0o1;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  public close() {
    this.modalService.destroy();
  }

  public onIndexChange(index: number) {
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
