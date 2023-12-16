import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CampingService } from './../../../service/camping.service';
import { SharedService } from './../../../service/shared.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-add-update-camping',
  templateUrl: './add-update-camping.component.html',
  styleUrls: ['./add-update-camping.component.scss']
})
export class AddUpdateCampingComponent implements OnInit {
add=true;
@Input() tit;
@Input() obj;
model:any={}
file: File=null;
data: any;
  constructor(public activeModal: NgbActiveModal,private servCamp:CampingService,private shared:SharedService) {
    this.data = new FormData();
   }

  ngOnInit() {
    if(this.add)
    {
      this.model={};
    }else{
      this.model.titre = this.obj.titre;
      this.model.description = this.obj.description;
      this.model.nbr_etoile = this.obj.nbr_etoile;
      this.model.nbr_place_dispo = this.obj.nbr_place_dispo;
      this.model.date_debut = this.obj.date_debut;
      this.model.date_fin = this.obj.date_fin;
      this.model.prix = this.obj.prix;
      this.model.localisation = this.obj.localisation;
      this.model.condition = this.obj.condition;

    }
  }
  mangArt(f: NgForm) {
    const id_org : string="1";
    const {titre,description, nbr_etoile, nbr_place_dispo, prix, date_debut, date_fin,condition, localisation } = f.value;

    if (this.add) {
      // const obj = {: , : , : , : , : ,id_organisateur:id_org};
      // this.addArt(obj);
     // alert(title)
      this.data.append("titre",titre)
      this.data.append("imageup", this.file)
      this.data.append("description", description)
      this.data.append("nbr_etoile", nbr_etoile)
      this.data.append("nbr_place_dispo", nbr_place_dispo)
      this.data.append("prix", prix)
      this.data.append("date_debut", date_debut)
      this.data.append("date_fin", date_fin)
      this.data.append("localisation", localisation)
      this.data.append("condition", condition)
      this.data.append("id_organisateur",id_org);
      //console.log(JSON.stringify(this.data));
      this.addCamp(this.data);
      
  
    } else {
      const obj = {titre:titre, description: description, nbr_etoile: nbr_etoile, nbr_place_dispo: nbr_place_dispo, prix: prix, 
        date_debut: date_debut, date_fin: date_fin, localisation: localisation,id_organisateur:id_org};
          this.servCamp.updateCamp(obj,this.obj.id_camping ).subscribe({next:(data)=>{
            this.activeModal.dismiss();
            swal('Success', '', 'success');
            this.shared.reloadComponent()
          },error:(err)=>{
            this.activeModal.dismiss();
            swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
          }})
    }
  }
  addCamp(obj: FormData) {
   this.servCamp.addCamping(obj).subscribe({next:(data)=>{
     
     this.activeModal.dismiss();
     swal('Success', '', 'success');
     this.shared.reloadComponent()
   },error:(err)=>{

     this.activeModal.dismiss();
     swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
   }})
 }

 fileChange(event) {

  let fileList: FileList = event.target.files;
  if (fileList.length > 0) {
    let file: File = fileList[0];
    this.file = file;
  
  }
}


}
