import { Component, ElementRef, ViewChild } from '@angular/core';
import $ from 'jquery';
import LocomotiveScroll from 'locomotive-scroll';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  public showSubmenu: boolean = true;
  private scroll: LocomotiveScroll = new LocomotiveScroll;

  constructor() {
  }

  ngOnInit() {

    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]') as HTMLElement,
      smooth: true,
      smartphone:{
        smooth:true,
      },
    });

    $('.menu-btn').click(function () {
      $('.mobile-menu').toggleClass('hidden');
    });
    $('.close-btn').click(function () {
      $('.mobile-menu').toggleClass('hidden');
    });
  }

  ngOnDestroy() {
    this.scroll.stop();
  }
}
