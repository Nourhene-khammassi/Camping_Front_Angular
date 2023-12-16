import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from './../../../service/shared.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-detaile-reclamtion',
  templateUrl: './detaile-reclamtion.component.html',
  styleUrls: ['./detaile-reclamtion.component.scss']
})
export class DetaileReclamtionComponent implements OnInit {
  @Input() obj;
  @Input() type_u;
  @Input() rep;
  model:any={}
  constructor(public activeModal: NgbActiveModal,private shared:SharedService ) { }

  ngOnInit() {
   // alert(this.rep)
  }
  add_rep(val:any){

    //
    const obj ={id:this.obj.id_reclamation  ,rep: this.model.explanation ,etat: val}
    this.shared.updateReclmation(obj).subscribe({next:(data)=>{
      this.activeModal.dismiss();
      swal('Success', '', 'success');
      this.shared.reloadComponent()
    },error:(err)=>{
      this.activeModal.dismiss();
      swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
    }})
  }

}
