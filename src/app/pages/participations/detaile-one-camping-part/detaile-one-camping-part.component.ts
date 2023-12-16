import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddParticipationPoupupComponent } from '../add-participation-poupup/add-participation-poupup.component';
import { CampingService } from './../../../service/camping.service';

@Component({
  selector: 'app-detaile-one-camping-part',
  templateUrl: './detaile-one-camping-part.component.html',
  styleUrls: ['./detaile-one-camping-part.component.scss']
})
export class DetaileOneCampingPartComponent implements OnInit {
campe:any;
actifid:any;
  constructor( private campServ:CampingService,private route: ActivatedRoute,private modalService: NgbModal) {
    this.actifid = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.getOneCamping();
  }
  async getOneCamping()
{
  await this.campServ.getOneCamping(this.actifid).subscribe({
    next: (data) => {
      const donne: any = data;
      this.campe = donne;
      console.log(JSON.stringify(this.campe));
      
      console.log(donne);
    }, error: (err) => {
      this.campe ={};
    }
  })
}
open(){

  const modalRef = this.modalService.open(AddParticipationPoupupComponent);
  modalRef.componentInstance.add = true;
  modalRef.componentInstance.tit = "Add Camping";
}
// this.campServ.getlogin('email1','pass1').subscribe({
//   next: (data) => {
//     const donne: any = data;
   
//     console.log(donne);
//   }, error: (err) => {
   
//   }
// })
}
