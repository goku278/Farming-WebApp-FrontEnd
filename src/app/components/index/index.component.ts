import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  v: any;
  v1: any;
  v2: any;
  constructor(private router: Router, private el: ElementRef) {}

  ngOnInit(): void {
     this.check();
  }

  check() {
    var c = localStorage.getItem('isLogin');
    if (c == 'true') {
      this.removeClass()
    }
  }

  signin() {
    this.router.navigate(['/signin']);
    this.removeClass();
  }

  removeClass() {
    let myTag = this.el.nativeElement.querySelector('div');
    myTag.remove('right-tab');
    // myTag.classList.remove('right-tab');
  }

  signup() {
    this.router.navigate(['/signup']);
  }
}
