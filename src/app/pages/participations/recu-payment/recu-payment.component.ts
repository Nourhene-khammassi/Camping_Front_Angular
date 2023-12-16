import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-recu-payment',
  templateUrl: './recu-payment.component.html',
  styleUrls: ['./recu-payment.component.scss'],
  providers: [DatePipe]
})
export class RecuPaymentComponent implements OnInit {
  myDate:any = new Date();
  pId:any=0;
  CId:any=0;
  constructor(private datePipe: DatePipe) { 
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.pId=Math.floor(Math.random() * 999999) + 1;
    this.CId=Math.floor(Math.random() * 99) + 1;
  }

  ngOnInit() {
  }

}
