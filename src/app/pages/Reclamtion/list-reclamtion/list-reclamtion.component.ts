import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { nextTick } from 'process';
import { ReclamationService } from './../../../service/reclamation.service';
import { AddReclamtionComponent } from '../add-reclamtion/add-reclamtion.component';
import { DetaileReclamtionComponent } from '../detaile-reclamtion/detaile-reclamtion.component';
import { SharedService } from './../../../service/shared.service';

@Component({
  selector: 'app-list-reclamtion',
  templateUrl: './list-reclamtion.component.html',
  styleUrls: ['./list-reclamtion.component.scss']
})
export class ListReclamtionComponent implements OnInit {
  listCampe: any[] = []
  p: number;
  term: any;
  id_projet: string = "-1";

  page = 1;
  pageSize = 5;
  pageSizes = [5,10,15];
  userRole:string;

  constructor(private shared:SharedService,private modalService: NgbModal,private reclamtionser:ReclamationService) { }
//getAllBayEndPoint
  ngOnInit() {
    this.userRole=localStorage.getItem("type");
    //alert(this.userRole)
    if(this.userRole == 'p' || this.userRole == 'o'){
      this.getReclatmationbayId(this.userRole=localStorage.getItem("id_user").toString());
    }else{
     // this.getAllBayType("o");
    }
   // this.sendToAPIXU("sfax");
  }
  getReclatmationbayId(id:string){
    this.listCampe = [];
    this.reclamtionser.getReclamtionBYUserType(id).subscribe({
      next: (data) => {
        const donne: any = data;
         this.listCampe = donne;
      }, error: (err) => {
        this.listCampe = [];
      }
    })
  }
getAllBayType(type:string){
  this.listCampe = [];
this.shared.getAllBayEndPoint("reclamtaion_all",type).subscribe({
  next: (data) => {
    const donne: any = data;
     this.listCampe = donne;
  }, error: (err) => {
    this.listCampe = [];
  }
})
}
openInfo(obj:any){
  const modalRef = this.modalService.open(DetaileReclamtionComponent);
  modalRef.componentInstance.titel = "Details Complaons";
  modalRef.componentInstance.obj = obj;
  modalRef.componentInstance.type_u = this.userRole;
}
open(){
  const modalRef = this.modalService.open(AddReclamtionComponent);
  modalRef.componentInstance.tit = "Add Comlaints";
  modalRef.componentInstance.type_u = this.userRole;
}


handlePageSizeChange(event: any): void {
  const v = event.target.value;
  this.listCampe = [];
  this.getAllBayType(v);

}

sendToAPIXU(formValues) {
  this.shared.getWeather(formValues.location).subscribe(data => {
    //this.weatherData = data;
    const donne: any = data;
    console.log(donne);
  });
}
}

