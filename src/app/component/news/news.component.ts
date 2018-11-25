import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public list: any;

  constructor() { }

  ngOnInit() {
    this.list = [{
      imgUrl: '../../../assets/images/toplist1.jpg',
      number: '1910.0',
      title: '巅峰榜·流行指数',
      lists: [
        {textName: '那一夜', author: 'G.E.M. 邓紫棋'},
        {textName: '梦不落雨林', author: '张艺兴'},
        {textName: '归去来兮', author: '叶炫清'}
    ]
    },
    {
      imgUrl: '../../../assets/images/toplist2.jpg',
      number: '1970.0',
      title: '巅峰榜·热歌',
      lists: [
        {textName: '没说什么', author: '张杰'},
        {textName: '耳朵', author: '李荣浩'},
        {textName: '光年之外', author: 'G.E.M. 邓紫棋'}
    ]
    },
    {
      imgUrl: '../../../assets/images/toplist3.jpg',
      number: '1208.8',
      title: '巅峰榜·新歌',
      lists: [
        {textName: '耳朵', author: '李荣浩'},
        {textName: '没说什么', author: '张杰'},
        {textName: '那一夜', author: 'G.E.M. 邓紫棋'}
    ]
    },
    {
      imgUrl: '../../../assets/images/toplist4.jpg',
      number: '910.0',
      title: '巅峰榜·2018中国好声音',
      lists: [
        {textName: '为你我受冷风吹', author: '大壮'},
        {textName: '魔鬼中的天使 (Live)', author: '康树龙'},
        {textName: '魔鬼中的天使 (醇享版)', author: '康树龙'}
    ]
    }
  ];
  }

}
