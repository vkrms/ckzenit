import { Component, OnInit, Input } from '@angular/core';

import { Document } from '../document';
import { DocsService } from '../docs.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  // styleUrls: ['./docs.component.css']
  host: {
    '(window:resize)': 'setSlidesPerColumn()',
    '(window:keydown)': 'closeOnEsc($event)'
  }
})
export class DocsComponent implements OnInit {

  @Input() docs;

  popup = {
    active: false,
    src: "",
    srcset: ""
  };

  // this one `closes` the modal
  public close() {
      this.popup.active = false;
  }

  // close modal on esc
  public closeOnEsc(e){
    // console.log(e);
    if (e.keyCode == 27) this.close();
  }

  constructor(private docService: DocsService) {}

  // slidesPerColumn can't be changed from the breakpoints
  // here's a little workaround
  setSlidesPerColumn() {
  // console.log(window.innerWidth);
    if (window.innerWidth <= 600) {
      this.config.slidesPerColumn = 1;
    }
  }

  showModal(src,srcset){
      this.popup.active = true;
      this.popup.src = src;
      this.popup.srcset = srcset;
  }

  ngOnInit() {
    this.docService.getDocuments().subscribe(docs => {
      this.docs = docs;
    });
    this.setSlidesPerColumn();
  }

  config = {
    slidesPerView: 2,
    slidesPerColumn: 2,
    // spaceBetween: 30,
    observer: true,
    navigation: {
      nextEl: '.ol-next',
      prevEl: '.ol-prev'
    },
    scrollbar: {
        el: '.swiper-scrollbar'
    },
    breakpoints: {
      1200: { slidesPerView: 1 }
    }
  }

}
