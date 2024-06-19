import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from 'src/app/Services/utilisateur.service';
import { SignupComponent } from '../signup/signup.component';
import { ForgotPasswordComponent } from 'src/app/Pages/forgot-password/forgot-password.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

 
   constructor(private utilisateurService:UtilisateurService,private router:Router) { }
 

  ngOnInit(): void {
     this.utilisateurService.checkToken().subscribe((response:any)=>{
      this.router.navigate(['/dash/list_demandeur']);
     },(error:any)=>{
      console.log(error);
      
     })
 }

  handleSignupAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
  }

  handleforgotPasswordAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";

  }
  handleLoginAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
  }
  
}
