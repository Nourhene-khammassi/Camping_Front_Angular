import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { AccuComponent } from "./pages/accu/accu.component";
import { RegesterComponent } from "./pages/auth/regester/regester.component";
import { SigninComponent } from "./pages/auth/signin/signin.component";
import { DashboardDefaultComponent } from "./pages/dashboard/dashboard-default/dashboard-default.component";
import { AddUpdateCampingComponent } from "./pages/mang-Camp/add-update-camping/add-update-camping.component";
import { ListCampingComponent } from "./pages/mang-Camp/list-camping/list-camping.component";
import { DetaileOneCampingPartComponent } from "./pages/participations/detaile-one-camping-part/detaile-one-camping-part.component";
import { ListCampComponent } from "./pages/participations/list-camp/list-camp.component";
import { RecuPaymentComponent } from "./pages/participations/recu-payment/recu-payment.component";
import { ListReclamtionComponent } from "./pages/Reclamtion/list-reclamtion/list-reclamtion.component";
import { SimplePageComponent } from "./pages/simple-page/simple-page.component";
import { ProfileComponent } from "./pages/user/profile/profile.component";

const routes: Routes = [

  { path: "", component: AccuComponent },
  { path: "signin", component: SigninComponent },
  { path: "register", component: RegesterComponent },

  {
    path: "dashboard",
    component: HomePageComponent,
    children: [
      {
        path: '', component: DashboardDefaultComponent
      },
      {
        path: 'May_camping', component: ListCampingComponent
      },
      
      {
        path: 'all_camping', component: ListCampComponent
      },
      
      {
        path: 'detaile_camping/:id', component: DetaileOneCampingPartComponent
      },
      {
        path: "profil",
        component: ProfileComponent,
      },
      { path: "Reclamtions", component: ListReclamtionComponent },
      { path: "simple", component: SimplePageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
