import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReclamationService } from './../../../service/reclamation.service';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.scss']
})
export class RegesterComponent implements OnInit {

  constructor(private reclamtionser:ReclamationService) { }
type = 0 ;

  ngOnInit() {
  }
  mangArt(f:NgForm){
    console.log(JSON.stringify(f.value));
    
    const {nom,prenom,email,mot_passe,cin,type_user } = f.value;
    const obj ={type_user:type_user}

    

  }
  heckCheckBoxvalue(event){
    alert(this.type)
    console.log(event.checked)
  }
}
