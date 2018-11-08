import { Component, OnInit,ElementRef } from '@angular/core';
declare let GIF:any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  speed:number=0;
  startPoint:number=500;
  run(cxt){
      this.speed=-7;
      cxt.clearRect(0,0,600,300);
      //cxt.top+=speed;    
      this.startPoint+=this.speed;
      cxt.beginPath();
      cxt.arc(this.startPoint,150,30,0,2*Math.PI,true);
      cxt.closePath();
      cxt.fill();
  }
  constructor(private el:ElementRef) { }

  ngOnInit() {
    let element = this.el.nativeElement;
    let canvas=element.querySelector('canvas');
    canvas.height=300;
    canvas.width=600;
    var context=canvas.getContext('2d');
    context.fillStyle='red';
    context.beginPath();
    context.arc(800,150,30,0,2*Math.PI,true);
    context.closePath();
    context.fill();
    setInterval(()=>{
        this.run(context);
    }, 50);
    var gif = new GIF({
      workers: 2,
      quality: 10
    });
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        gif.addFrame(canvas, { delay: 30 });
      }, 30)
    }
    console.log(gif);
    gif.on('finished', function(blob) {
      console.log('end');
      window.open(URL.createObjectURL(blob));
    });
    setTimeout(() => {
        gif.render();
    },30);
  }

}
