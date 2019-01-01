import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.css']

})
export class Test01Component implements OnInit {
  @ViewChild('treeCom') treeCom;
  @ViewChild('selectTree') selectTree;
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.geturl().subscribe(res => {
      console.log('2')
      console.log(res);
    }, err => {
    })
  }
  geturl() {
    return this.http.get('../../../assets/shorturl.php');
  }
  isVisible = false;
  isConfirmLoading = false;
  speed: object = ['2x', '4x', '6x'];
  ratio: object = ['16:9', '10:8', "1:1"];
  speedC: string;
  ratioC: string;
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    this.isVisible = false;
  }
  handleCancel(): void {
    this.isVisible = false;
  }
  selectRatio(r) {
    this.ratioC = r;
  }
  selectSpeed(s) {
    this.speedC = s
  }
  step1() {
    var a = 123;
    this.step2(a);
  }
  step2(a) {
    var b = a;
    if (b == 123) {
      console.log('=================')
    } else {
      this.step3(b);
    }
  }
  step3(a) {
    console.log(a);
  }
  copy() {
    // document.getElementById('testcopy').select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? '成功复制到剪贴板' : '11该浏览器不支持点击复制到剪贴板';
      alert(msg);
    } catch (err) {
      alert('22该浏览器不支持点击复制到剪贴板');
    }
  }
  nodes = [{
    title: '全部国家',
    key: '100',
    children: [{
      title: '亚洲',
      key: '1001',
      children: [
        { title: '中国', key: 'CN', isLeaf: true },
        { title: '日本', key: 'JP', isLeaf: true },
        { title: '韩国', key: 'KR', isLeaf: true }
      ]
    }, {
      title: '欧洲',
      key: '1002',
      children: [
        { title: '法国', key: 'FR', isLeaf: true },
        { title: '比利时', key: 'BE', isLeaf: true },
        { title: '意大利', key: 'IT', isLeaf: true },
        { title: '希腊', key: 'GR', isLeaf: true }
      ]
    }, {
      title: '美洲',
      key: '1003',
      children: [
        { title: '阿根廷', key: 'CA', isLeaf: true },
        { title: '美国', key: 'CB', isLeaf: true },
        { title: '加拿大', key: 'CC', isLeaf: true },
        { title: '巴西', key: 'CR', isLeaf: true }
      ]
    }]
  }];
  storeArr = [];
  fun(keys) {
    this.storeArr = keys.nodes;
    // console.log(this.storeArr);
  }
  fun1(event: NzFormatEmitEvent): void {
    // console.log(event, event.checkedKeys, event.keys, event.nodes);
  }
  //searchValue
  searchValue: '';
  //当只有一个level3可选的时候 进level==0 判断有问题
  add() {
    var newNodes = JSON.parse(JSON.stringify(this.nodes));
    var newSelectedKeys = JSON.parse(JSON.stringify(this.SelectedKeys));
    let arr = [];
    this.SelectedKeys[0].children.map(item=>{
      arr.push(item.key);
    })
    console.log(this.storeArr);
    this.storeArr.map((item) => {
      if (item.level == 0) {
        newNodes[0].children = []
        item.origin.children.map(continent=>{
          newSelectedKeys[0].children.push(continent);
        })
      } else if (item.level == 1) {
        // arr.push(item.key);
        for (let i = 0; i < newNodes[0].children.length; i++) {
          if (item.key == newNodes[0].children[i].key) {
            newNodes[0].children.splice(i, 1);
            break;
          }
        }
        if(arr.indexOf(item.key)>=0){
            for(let c= 0;c< newSelectedKeys[0].children.length;c++)
            if(newSelectedKeys[0].children[c].key==item.key){
              console.log(newSelectedKeys[0].children[c]);
              item.origin.children.map(country=>{
                newSelectedKeys[0].children[c].children.push(country);
              })
              break;
            }
        }else{
          newSelectedKeys[0].children.push(item.origin)
            console.log(item)
        }
      } else if (item.level == 2) {
        for (let i = 0; i < newNodes[0].children.length; i++) {
          if (item.parentNode.key == newNodes[0].children[i].key) {
            for (let k = 0; k < newNodes[0].children[i].children.length; k++) {
              if (newNodes[0].children[i].children[k].key == item.key) {
                newNodes[0].children[i].children.splice(k, 1);
                break;
              }
            }
          }
        };
        if (arr.indexOf(item.parentNode.key) >= 0) {
          console.log('have');
          for (let i = 0; i < newSelectedKeys[0].children.length; i++) {
            if (newSelectedKeys[0].children[i].key == item.parentNode.key) {
              newSelectedKeys[0].children[i].children.push(item.origin);
            }
          }
        } else {
          newSelectedKeys[0].children.push({
            title: item.parentNode.title,
            key: item.parentNode.key,
            checked: true,
            expanded: true,
            children: [{
              title: item.origin.title,
              key: item.origin.key,
              checked: true,
            }]
          })
        }
      }
    })
    this.nodes = newNodes;
    this.SelectedKeys = newSelectedKeys;
  }
  del() {

  }
  default: any = [{
    title: '全部国家',
    key: '100',
    children: [],
    expanded: true
  }];
  SelectedKeys = JSON.parse(JSON.stringify(this.default));
}
