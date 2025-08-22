import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class HomeComponent implements  OnInit {
public age: number = 20;

  public traiCay =['táo','nho','quýt','xoài'];
  constructor() {
  }
  ngOnInit(): void {
    console.log('trái cây =', this.traiCay);
  }
}

