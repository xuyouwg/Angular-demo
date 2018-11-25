import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  fn1() {
    const cancelBtn = document.getElementById('cancel_btn');
    const hotKeys = document.getElementById('hot_keys');
    cancelBtn.style.display = 'block';
    hotKeys.style.display = 'none';
  }
  fn2() {
    const delBtn = document.getElementById('del_btn');
    delBtn.style.display = 'inline';
  }
  fn3() {
    const delBtn = document.getElementById('del_btn');
    const searchForm = document.getElementById('search_form');
    delBtn.style.display = 'none';
    searchForm.reset();
  }
  fn4() {
    const cancelBtn = document.getElementById('cancel_btn');
    const hotKeys = document.getElementById('hot_keys');
    cancelBtn.style.display = 'none';
    hotKeys.style.display = 'block';
  }
}
