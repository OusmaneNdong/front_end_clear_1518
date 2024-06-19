import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { HomeComponent } from './Pages/home/home.component';
import { ForgotPasswordComponent } from './Pages/forgot-password/forgot-password.component';
import { DemandeurComponent } from './Pages/demandeur/demandeur.component';
import { EspaceClientComponent } from './Pages/espace-client/espace-client.component';
import { DashComponent } from './dash/dash.component';
import { TablesComponent } from './dash/tables/tables.component';
import { DashbordComponent } from './dash/dashbord/dashbord.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { FormuleComponent } from './Pages/formule/formule.component';
import { SetPasswordComponent } from './Pages/set-password/set-password.component';
import { TestComponent } from './Pages/test/test.component';
import { ListDemandesComponent } from './Pages/list-demandes/list-demandes.component';
import { DemandeDetailsComponent } from './Pages/demande-details/demande-details.component';
import { UtilisateurDetailsComponent } from './Pages/utilisateur-details/utilisateur-details.component';
import { DemandeurDetailsComponent } from './Pages/demandeur-details/demandeur-details.component';
import { EspaceComponent } from './Pages/espace/espace.component';
import { MesDemandesComponent } from './Pages/mes-demandes/mes-demandes.component';
import { CardComponent } from './Pages/card/card.component';
import { AdminDasboardComponent } from './Pages/admin-dasboard/admin-dasboard.component';
import { DemosComponent } from './Pages/demos/demos.component';
// import { DialogComponent } from './Pages/dialog/dialog.component';

const routes: Routes = [
  {path:'formule',component:FormuleComponent},
  { path:'footer',component:FooterComponent },
  { path:'header', component: HeaderComponent },
  { path:'accueil',component:AccueilComponent },
  {path:'setPassword/:email',component:SetPasswordComponent},
  {path:'',redirectTo:'accueil', pathMatch:'full'},
  // {path:'**',redirectTo:'accueil', pathMatch:'full'},
  { path:"login",component:LoginComponent },
  {path:"demande_details/:id",component:DemandeDetailsComponent},
  {path:"verificationattestation/:id",component:DemandeurDetailsComponent},
  {path:"utilisateur_details/:id",component:UtilisateurDetailsComponent},
  {path:"signup",component:SignupComponent},
  {path:'test',component:TestComponent},
  { path:"home",component:HomeComponent },
  {path:"espace",component:EspaceComponent},
  { path:"password",component:ForgotPasswordComponent },
  { path:"demandeur",component:DemandeurComponent },
  {path:"mesdemandes",component:MesDemandesComponent},
 { path:"espaceClient", component:EspaceClientComponent },
 {path:"card",component:CardComponent},
 {path:"administration",component:AdminDasboardComponent},
 {path:"demo", component:DemosComponent},
 { path: "dash",component:DashComponent,children:[
  {path:'',redirectTo:'dash/dashbord', pathMatch:'full'},
  {path:'', redirectTo:'list_demandes',pathMatch:'full'},
  { path:"table",component:TablesComponent},
  { path:"dashbord",component:DashbordComponent},
  {path:"list_demandes",component:ListDemandesComponent}
 ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
