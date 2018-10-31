import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrls: ['./page01.component.css']
})
export class Page01Component implements OnInit {
  fatherData: string = "I'm from father component";
  user : object={
    uid:1,
    uname:'tom'
  };
  constructor() { }
  ngOnInit() {
  }

}
