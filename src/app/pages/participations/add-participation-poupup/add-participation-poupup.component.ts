import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-participation-poupup',
  templateUrl: './add-participation-poupup.component.html',
  styleUrls: ['./add-participation-poupup.component.scss']
})
export class AddParticipationPoupupComponent implements OnInit {
  @Input() name;

  constructor(public activeModal: NgbActiveModal ) { }


  ngOnInit() {
  }
  openPrint()
  {
    this.activeModal.dismiss();

  }

}
