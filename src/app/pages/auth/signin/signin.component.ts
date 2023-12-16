import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './../../../service/shared.service';
import swal from 'sweetalert';
@NgModule()
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})

export class SigninComponent implements OnInit {

  constructor(private route: Router, private atherser:SharedService,) { }

  ngOnInit() {
  }
  async onSignin(email: string, password: string) {

    this.atherser.getlogin(email, password).subscribe((data) => {
      const donne: any = data;
      const err = donne.error;
      const mayUser = donne;
      // alert(JSON.stringify(mayUser));
      if (!err) {
        localStorage.setItem('email', donne.email);
        if (mayUser['type_user'] == 1) {
          const nom_prenom = (donne.nom + " " + donne.prenom).toString();
          localStorage.setItem('id_user', JSON.stringify(donne.id_user));
          localStorage.setItem('type', "admin");
          localStorage.setItem('nomuser', nom_prenom);
          this.route.navigate(['/dashboard']);
        }else if (mayUser['type_user'] == 2){
          const nom_prenom = (donne.nom + " " + donne.prenom).toString();
          localStorage.setItem('id_user', JSON.stringify(donne.id_user));
          localStorage.setItem('type', "o");
          localStorage.setItem('nomuser', nom_prenom);
          this.route.navigate(['/dashboard']);
        }else {
          const nom_prenom = JSON.stringify(donne.nom + " " + donne.prenom);
          localStorage.setItem('id_user', JSON.stringify(donne.id_user));
          localStorage.setItem('type', "p");
          localStorage.setItem('nomuser', nom_prenom);

          this.route.navigate(['/dashboard'])
        }
      } else {
        swal('warning', 'Vérifier votre Émail et/ou votre mot de passe', 'warning')
      }
    });
  }
}
