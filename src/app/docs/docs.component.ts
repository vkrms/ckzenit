import { Component, OnInit, Input } from '@angular/core';

import { Document } from '../document';
import { DocsService } from '../docs.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  // styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  @Input() docs;

  constructor(private docService: DocsService) {}

  ngOnInit() {
    this.docService.getDocuments().subscribe(docs => {
      this.docs = docs;
    });
  }

  config = {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 30,
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
