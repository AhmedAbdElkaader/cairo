import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    stagePadding:2,
    center : true,
    autoplay:true,
    autoplaySpeed:1500,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    nav: false,
    rtl:true,
    items: 1
  }
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    center : false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    nav: false,
    rtl:true,
    items: 2,
    margin:20
  }
  customOptions3: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    center : false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    nav: false,
    rtl:true,
    items: 1,
    margin:10
  }

  customOptions4: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    center : false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    nav: true,
    rtl:true,
    items: 6,
    margin:10
  }
  customOptions5: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    center : false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    nav: false,
    rtl:true,
    items: 2,
    margin:10
  }
}
