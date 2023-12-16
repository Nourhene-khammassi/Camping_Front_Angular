import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from './../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private httpClient: HttpClient, private modalService: NgbModal, private router: Router,) { }
  getReclamtionBYUserType(id: string) {
    return this.httpClient.get(environment.apiUrl + `cors-library/api/reclamation/idUser/${id}`);
  }
  AddReclamtion(reclamation: any) {
    return this.httpClient.post(environment.apiUrl + `cors-library/api/reclamation/`, reclamation);
  }
}
