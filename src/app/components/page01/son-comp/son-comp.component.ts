import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-son-comp',
  templateUrl: './son-comp.component.html',
  styleUrls: ['./son-comp.component.css']
})
export class SonCompComponent implements OnInit {
  @Input() childDataName: string = "I'm from child component";
  constructor() { }

  ngOnInit() {
  }

}
