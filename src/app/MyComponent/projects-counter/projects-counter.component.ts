import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-counter',
  templateUrl: './projects-counter.component.html',
  styleUrls: ['./projects-counter.component.scss']
})
export class ProjectsCounterComponent implements OnInit {

  counterValue1: number = 0;
  counterValue2: number = 0;
  counterValue3: number = 0;
  counterValue4: number = 0;

  ngOnInit(): void {
    this.animateValue1(0, 6, 3000); // Count from 0 to 100 in 5 seconds

    this.animateValue2(0, 500, 1000); // Count from 0 to 100 in 5 seconds

    this.animateValue3(0, 13000, 1500); // Count from 0 to 100 in 5 seconds

    this.animateValue4(0, 200, 500); // Count from 0 to 100 in 5 seconds
  }

  animateValue1(start: number, end: number, duration: number): void {
    const range = end - start;
    let current = start;
    const increment = range > 0 ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval(() => {
      current += increment;
      this.counterValue1 = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }


  animateValue2(start: number, end: number, duration: number): void {
    const range = end - start;
    let current = start;
    const increment = range > 0 ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval(() => {
      current += increment;
      this.counterValue2 = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }


  animateValue3(start: number, end: number, duration: number): void {
    const range = end - start;
    let current = start;
    const increment = range > 0 ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval(() => {
      current += increment;
      this.counterValue3 = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }


  animateValue4(start: number, end: number, duration: number): void {
    const range = end - start;
    let current = start;
    const increment = range > 0 ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const timer = setInterval(() => {
      current += increment;
      this.counterValue4 = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

}
