import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUpdateCampingComponent } from '../add-update-camping/add-update-camping.component';
import { PoupUpInfoComponent } from '../poup-up-info/poup-up-info.component';
import { CampingService } from './../../../service/camping.service';
import { SharedService } from './../../../service/shared.service';

@Component({
  selector: 'app-list-camping',
  templateUrl: './list-camping.component.html',
  styleUrls: ['./list-camping.component.scss']
})
export class ListCampingComponent implements OnInit {
  listCampe: any[] = []
  p: number;
  term: any;
  id_projet: string = "-1";

  page = 1;
  pageSize = 5;
  pageSizes = [5, 10, 15];

  constructor(private serviceCamping: CampingService, public sahredserv: SharedService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getAllCamping();
  }


  async getAllCamping() {


    await this.serviceCamping.getAllCamping(localStorage.getItem("id_user")).subscribe({
      next: (data) => {
        const donne: any = data;
        this.listCampe = donne;
      }, error: (err) => {
        this.listCampe = [];
      }
    })
  }
  open() {

    const modalRef = this.modalService.open(AddUpdateCampingComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.add = true;
    modalRef.componentInstance.tit = "Add Camping";
  }
  openUpd(obj: any) {

    const modalRef = this.modalService.open(AddUpdateCampingComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.add = false;
    modalRef.componentInstance.obj = obj;
    modalRef.componentInstance.tit = "Update Camping";
  }

  openInfo(obj: any) {
    const modalRef = this.modalService.open(PoupUpInfoComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.titel = "Info Camping";
    modalRef.componentInstance.obj = obj;

  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
  }
}
