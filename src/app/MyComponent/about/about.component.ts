import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  counterValue: number = 0;

  ngOnInit(): void {
    this.animateValue(0, 1000, 500); // Count from 0 to 100 in 5 seconds
  }

  animateValue(start: number, end: number, duration: number): void {
    const range = end - start;
    let current = start;
    const increment = range > 0 ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval(() => {
      current += increment;
      this.counterValue = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

}
