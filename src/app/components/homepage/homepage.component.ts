import { Component, OnInit,ElementRef } from '@angular/core';
import { HttpClient } from "@angular/common/http"
declare let wx:any;
declare let GIF:any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  speed:number=0;
  startPoint:number=500;
  gifUrl:string='';
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
  constructor(private el:ElementRef,private http:HttpClient) { }

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
    var t =this;
    gif.on('finished', (blob)=> {
      var gifUrl=URL.createObjectURL(blob);
      const a = document.getElementById('giflink')
      a.setAttribute('href',gifUrl);
      a.setAttribute('download',gifUrl+'.gif');
      a.click();
    });
    setTimeout(() => {
        gif.render();
    },30);
    // this.http.get<any>('https://api.weixin.qq.com/cgi-bin/token?grant_type:client_credential&appid:wx2903df3655ec569a&secret:bf51180493d57f0476d8ec513565e428')
    // .subscribe((res)=>{
    //   console.log(res);
    // })
    wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wx2903df3655ec569a', // 必填，公众号的唯一标识
        timestamp:new Date() , // 必填，生成签名的时间戳
        nonceStr: 'sdgerwg24dsf', // 必填，生成签名的随机串
        signature: '',// 必填，签名
        jsApiList: [] // 必填，需要使用的JS接口列表
    });
  }
  
}
