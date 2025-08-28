import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  message: string = "Xin chào! Đây là Home Component.";
  counter: number = 0;
  public traiCay =['cam','quy','mit','dua','canh','tao','oi','xoai','nhan'];
  public traiCay1 =[{ten:'táo',gia:12},{ten:'quýt',gia:1},{ten:'cà',gia:-1},{ten:'bưởi',gia:-19},{ten:'mận',gia:32},{ten:'lê',gia:42},{ten:'quả',gia:-12},{ten:'mận',gia:42},{ten:'quả',gia:-90},{ten:'mận',gia:-4}]

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
