import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public imgUrl: any;
  constructor() { }
  ngOnInit() {
    this.imgUrl = ['../../assets/images/1.jpg',
    '../../assets/images/2.jpg', '../../assets/images/3.jpg', '../../assets/images/4.jpg', '../../assets/images/5.jpg'];
  }
}
