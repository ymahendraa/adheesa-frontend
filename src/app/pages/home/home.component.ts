import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private datePipe: DatePipe

  ) { }

  ngOnInit(): void {
    var date = new Date();
    console.log(this.datePipe.transform(date,"yyyy-M-d")); //output : 2018-02-13
  }

}
