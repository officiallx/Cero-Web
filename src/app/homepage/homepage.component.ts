import { Component } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import $ from 'jquery';
import { gsap } from 'gsap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {

  private scroll: LocomotiveScroll = new LocomotiveScroll;
  public showSubmenu:boolean = true;

  constructor() { }

  ngOnInit() {
    this.initScroll();
    $('.menu-btn').click(function () {
      $('.mobile-menu').toggleClass('hidden');
    });
    $('.close-btn').click(function () {
      $('.mobile-menu').toggleClass('hidden');
    });
  }

  private initScroll() {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('#scroll-container') as HTMLElement,
      smooth: true,
      multiplier: 1,
      smartphone: {
        smooth: true,
      },
    });

    // Register GSAP plugins
    this.scroll.on('scroll', (args: any) => {
      gsap.to('.my-element', {
        y: args.scroll.y * 0.5,
        duration: 0.5,
        ease: 'power3.out',
      });
    });
  }

  ngOnDestroy(): void {
    if (this.scroll) {
      this.scroll.destroy();
    }
  }
}
