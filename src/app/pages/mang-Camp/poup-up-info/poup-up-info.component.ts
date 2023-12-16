import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from './../../../service/shared.service';

@Component({
  selector: 'app-poup-up-info',
  templateUrl: './poup-up-info.component.html',
  styleUrls: ['./poup-up-info.component.scss']
})
export class PoupUpInfoComponent implements OnInit {

  @Input() titel;
  @Input() obj;

  constructor(public activeModal: NgbActiveModal,public shared:SharedService ) { }

  ngOnInit() {
    console.log(JSON.stringify(this.obj));
    
  }

}
