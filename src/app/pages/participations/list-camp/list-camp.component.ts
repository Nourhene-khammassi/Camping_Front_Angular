import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CampingService } from './../../../service/camping.service';
import { SharedService } from './../../../service/shared.service';
@Component({
  selector: 'app-list-camp',
  templateUrl: './list-camp.component.html',
  styleUrls: ['./list-camp.component.scss']
})
export class ListCampComponent implements OnInit {
  listCampedispo: any[] = []
  constructor(private serviceCamping:CampingService,public sahredserv:SharedService,private modalService: NgbModal) { }

 async ngOnInit() {
  await  this.getAllCampingForPartsipation()
  }
  async getAllCampingForPartsipation()
  {
   
    const id_org : string="1";
    await this.serviceCamping.getListCampForPartsipation().subscribe({
      next: (data) => {
        const donne: any = data;
         this.listCampedispo = donne;
         console.log(JSON.stringify(donne));
         
      }, error: (err) => {
        this.listCampedispo = [];
      }
    })
  }
}
