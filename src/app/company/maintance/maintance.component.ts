import { Component, OnInit } from '@angular/core';

declare let Swiper: any;

@Component({
  selector: 'app-maintance',
  templateUrl: './maintance.component.html',
  styleUrls: ['./maintance.component.scss']
})
export class MaintanceComponent implements OnInit {

  mySwiper: any;

  constructor() { }

  ngOnInit() {
    this.initSwiper();
  }

  initSwiper() {
    this.mySwiper = new Swiper('.swiper-container', {
      freeMode: false,
      observer: true,
      observeParents: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    });
  }
}
