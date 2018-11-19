import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.css']
})
export class Test01Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isVisible = true;
  isConfirmLoading = false;
  speed:object=['2x','4x','6x'];
  ratio:object=['16:9','10:8',"1:1"];
  speedC:string;
  ratioC:string;
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  selectRatio(r){
    this.ratioC=r;
  }
  selectSpeed(s){
    this.speedC=s
  }
}
