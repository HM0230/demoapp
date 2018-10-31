import { Component, OnInit,EventEmitter ,Output } from '@angular/core';

@Component({
  selector: 'app-son-comp-two',
  templateUrl: './son-comp-two.component.html',
  styleUrls: ['./son-comp-two.component.css']
})
export class SonCompTwoComponent implements OnInit {
  @Output() dataUpdate:EventEmitter<any> = new EventEmitter<any>();
  childDataName: string = "I'm from child component";
  constructor() {
  }
  ngOnInit() {
  }
  childDataChange(){
    this.dataUpdate.emit({
      "childDataName":this.childDataName
    });
  }
}
