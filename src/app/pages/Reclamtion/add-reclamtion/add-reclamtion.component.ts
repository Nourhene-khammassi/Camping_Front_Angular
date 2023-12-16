import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CampingService } from './../../../service/camping.service';
import { SharedService } from './../../../service/shared.service';
import swal from 'sweetalert';
import { NgForm } from '@angular/forms';
import { ReclamationService } from './../../../service/reclamation.service';

@Component({
  selector: 'app-add-reclamtion',
  templateUrl: './add-reclamtion.component.html',
  styleUrls: ['./add-reclamtion.component.scss']
})
export class AddReclamtionComponent implements OnInit {
  add=true;
  @Input() tit;
  @Input() obj;
  model:any={}
  file: File=null;
  data: any;
  constructor(public activeModal: NgbActiveModal,private servCamp:CampingService,private shared:SharedService,private reclamtionSer:ReclamationService) {}

  ngOnInit() {
  }
  mangArt(f: NgForm) {
    const {description } = f.value;

    if (this.add) {
    
    //console.log(JSON.stringify(obj));
    // const obj2 = {
    //   description_reclamation:"desc" ,
    //   idUser: 1 ,
    //   type:  "o"
    //   }
const obje = {idUser:localStorage.getItem("id_user"), type:localStorage.getItem("type"),description_reclamation:description,etat:"0"} ;
const obj2 = 
  {
    description_reclamation:"desc",
    idUser: 1 ,
    type:  "o"
    }
  
        this.addRec(obje);
   
   
   
      } else {
      const obj ={description:description,idUser:localStorage.getItem("id_user"), type:localStorage.getItem("type")};

      //     this.servCamp.updateCamp(obj,this.obj.id_camping ).subscribe({next:(data)=>{
      //       this.activeModal.dismiss();
      //       swal('Success', '', 'success');
      //       this.shared.reloadComponent()
      //     },error:(err)=>{
      //       this.activeModal.dismiss();
      //       swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
      //     }})
    }
  }

  addRec(obj: any) {
    this.reclamtionSer.AddReclamtion(obj).subscribe({next:(data)=>{
      
      this.activeModal.dismiss();
      swal('Success', '', 'success');
      this.shared.reloadComponent()
    },error:(err)=>{
 
      this.activeModal.dismiss();
      swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
    }})
  }
 
}
