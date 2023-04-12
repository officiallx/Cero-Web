import { Component } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  public showSubmenu: boolean = true;

  constructor() {}

  ngOnInit() {
    $('.menu-btn').click(function () {
      $('.mobile-menu').toggleClass('hidden');
    });
    $('.close-btn').click(function () {
      $('.mobile-menu').toggleClass('hidden');
    });
  }
}
