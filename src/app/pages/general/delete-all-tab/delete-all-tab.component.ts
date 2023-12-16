import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CampingService } from './../../../service/camping.service';

import swal from 'sweetalert';
import { SharedService } from './../../../service/shared.service';
@Component({
  selector: 'app-delete-all-tab',
  templateUrl: './delete-all-tab.component.html',
  styleUrls: ['./delete-all-tab.component.scss']
})
export class DeleteAllTabComponent implements OnInit {
  @Input() id;
  @Input() point;
  @Input() titre;
  constructor(private shared:CampingService) {}
  ngOnInit() {
 
  }
  async deleteAll()
  {
await this.shared.DeleteAll(this.id,this.point);
//await  this.sahredserv.DeleteAll(this.id,this.point);

  }

}
