import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from './../../environments/environment.prod';
import swal from 'sweetalert';
import { DeleteAllTabComponent } from '../pages/general/delete-all-tab/delete-all-tab.component';
import { DatePipe } from '@angular/common';
import { pipe } from 'rxjs/internal-compatibility';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private router: Router,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }
  reloadComponent() {
    const currentRoute = this.router.url;
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]);
    });
  } 

  getAll(tab:string) {
    let param1 = new HttpParams;
    param1 = param1.set('tab', tab);
    return this.httpClient.get(environment.apiUrl + "General/get_All",{ params: param1 });
  }

  //dont tatche this part 


  addAll(object: any, point: any) {
    // alert(JSON.stringify(object))
    return this.httpClient.post(environment.apiUrl + point + "/post", object);
  }
  UpdateAll(object: any, point: any,rederect?:boolean,pageRederect?:string) {
    return this.httpClient.patch(environment.apiUrl + `${point}/update/${object.id}`, object).
      subscribe({
        next: (data) => {
          this.modalService.dismissAll();
          swal('Success', '', 'success');
          if(!rederect){ this.reloadComponent()}else{this.router.navigate([pageRederect]);}

        }, error: () => {
          this.modalService.dismissAll();
          swal('Error', 'Quelque Chose Ne Fonctionne Pas', 'error')
        }
      });
  }
  openDelete(id: string, titre: string, point: string) {
    const modalRef = this.modalService.open(DeleteAllTabComponent);
    modalRef.componentInstance.titre = titre;
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.point = point;

  }





  
  getAllForList() {
    return this.httpClient.get(environment.apiUrl + "client/getNom");
  }
  getDetaileBeBs(point:string,id:string) {
    return this.httpClient.get(environment.apiUrl + `${point}/getDetaile/${id}`);
  }
  getAllBayEndPoint(point:string,endpoint:string,) {
    return this.httpClient.get(environment.apiUrl + `${point}/${endpoint}`);
  }
  stringtoint(x:string)
  {
    return parseInt(x);
  }

  getlogin(email: string, mot_passe: string) {
  //   let param1 = new HttpParams;
  //   param1 = param1.set('email',email );//email
  //   param1 = param1.set('mot_passe',mot_passe );//mot_passe
  //  const obj={email:email,mot_passe:mot_passe}
    return this.httpClient.get(environment.apiUrl+`cors-library/api/user/login/${email}/${mot_passe}`);
  }
  getWeather(location) {
    return this.httpClient.get(
      'http://api.weatherstack.com/current?access_key=efbaeda5d8b576677f61e19271a4f77c&query=' +
        location
    );
  }

  updateReclmation (object: any) {
    // alert(JSON.stringify(object))
    return this.httpClient.put(environment.apiUrl + "upd_reclamtion_rep" , object);
  }



}