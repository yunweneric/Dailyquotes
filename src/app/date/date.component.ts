import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
})
export class DateComponent implements OnInit {
  constructor() {}
  title = 'DailyQuotes';
  time: any;
  hours: any;
  message: any;
  hr: any;
  min: any;
  sec: any;
  finale: any;

  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date().getHours();
      this.hr = new Date().getHours();
      this.min = new Date().getMinutes();
      this.sec = new Date().getSeconds();
      this.finale = `${this.hr} : ${this.min} : ${this.sec}`
      console.log(this.time);
      this.hours = new Date().getHours();
      console.log(this.hours);
      if (this.hours > 0 && this.hours < 12) {
        this.message = 'Good Morning';
        // console.log(this.message);
      } else if (this.hours > 12 && this.hours < 15) {
        this.message = 'Good Afternoon';
        // console.log(this.message);
      } else if (this.hours > 15 && this.hours < 20) {
        this.message = 'Good Evening';
      } else if (this.hours > 21 && this.hours < 0) {
        this.message = 'Good Night';
      }
      console.log(this.message);
    }, 1000);
  }
  // current() {
  //   setInterval(() => {
  //     this.time = new Date();
  //     console.log(this.time);

  //   }, 1000);
  // };

  // decide() {
  //   this.hours = new Date().getHours();
  //   console.log(this.hours);
  //   if (this.hours < 10) {
  //     this.message = 'Good Morning';
  //   } else if (this.hours > 12 && this.hours < 15) {
  //     this.message = 'Good Afternoon';
  //   } else if (this.hours > 15) {
  //     this.message = 'Good Evening';
  //   }else if (this.hours > 20) {
  //     this.message = 'Good Night';
  //   }
  // }
}
