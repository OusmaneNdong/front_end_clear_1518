import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../Services/snackbar.service';
import { UtilisateurService } from '../../Services/utilisateur.service';
import { GlobalConstants } from '../shared/global-constants';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { JwtHelperService } from '@auth0/angular-jwt';
import { data, error } from 'jquery';
import { HelperService } from 'src/app/Services/helper.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit{

  //private helper = new JwtHelperService();
  //email!:string;
  //nin!:string;

  openSpinner(){
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },4000)
  }

  setPasswordForm:any = FormGroup;
  responseMessage:any;
  
  registerSucess:boolean = false;
  isButtonVisible = true;

  constructor(private formBulider:FormBuilder, 
    private utilisateurService:UtilisateurService , 
    private snackbarService:SnackbarService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private helperService: HelperService
    ) { }


  ngOnInit(): void {

//console.log("getEmail()", localStorage.getItem('mail') as string);
//this.email = this.helperService.email;


    //this.email = localStorage.getItem('email')!;
    this.setPasswordForm = this.formBulider.group({
//      email:[this.email, Validators.required],
      oldPassword:[null , Validators.required],
      newPassword:[null , Validators.required],
      confirmPassword:[null, Validators.required]
     

    });
    
  }

  handleSubmit(){
    var formData = this.setPasswordForm.value;
    var data = {
      email:this.helperService.email,
      oldPassword:formData.oldPassword,
      newPassword:formData.newPassword,
      confirm:formData.confirmPassword
      
    }
    this.utilisateurService.changePassword(data).subscribe({
      next:(data)=>{
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "mot de passe modifiée! ",
          showConfirmButton: false,
          timer: 5000
        }).then(() => {
          this.router.navigate(['/espaceClient']);      });
        
      },
      error:(err:any)=>{
        console.log("erreur ="+err.error.errorMessage);
        if (err.error.errorMessage==='NOT_MATCH_PASSWORD') {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Les mots de passe ne correspondent pas ",
            showConfirmButton: false,
            timer: 5000
          }) 
        }
        if (err.error.errorMessage==='NOT_MATCH_PASSWORD_OLD') {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "L'ancien mot de passe saisit n'est pas correct",
            showConfirmButton: false,
            timer: 5000
          }) 
        }
        
        
        // if(err.error?.message){
        //   this.responseMessage = err.error?.message;
        //   Swal.fire({
        //     icon: "error",
        //     text: "Erreur de!",
        //     footer: '<a routerLing="/login">Échec modification !</a>'
        //   });
        // }else{
        //   this.responseMessage = GlobalConstants.genericError;
        // }
        // this.snackbarService.openSnackBar(this.responseMessage , GlobalConstants.error);
      }
    })
    // alert(data.email+" "+data.confirm+" "+data.oldPassword);
    /*this.utilisateurService.changePassword(data).subscribe((response:any)=>{
      this.responseMessage = response?.message;
      this.snackbarService.openSnackBar(this.responseMessage,"");
      alert("ok");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "mot de passe modifiée! ",
        showConfirmButton: false,
        timer: 5000
      }).then(() => {
        this.router.navigate(['/login']);      });
      
    }
    ), (error: { error: { message: any; }; })=>{
       if(error.error?.message){
        this.responseMessage = error.error?.message;
        Swal.fire({
          icon: "error",
          text: "Erreur de!",
          footer: '<a routerLing="/login">Échec modification !</a>'
        });
      }else{
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage , GlobalConstants.error);
    }*/
    this.registerSucess=true; 
    this.isButtonVisible = false;  
    
    //  this.utilisateurService.changerpassword(data).subscribe({
    //   next:(response:any)=>{
    //     alert("ok");
    //   },
    //   error: (err: any)=>{
    //     alert("ko");
    //   }
    // })
  }

  

     checkPassword(){
    var formData = this.setPasswordForm.value;
    const nPassword = formData.newPassword;
     const confPassword = formData.confirmPassword;

     if(nPassword != confPassword){
      return "mot de passe differents";
     }
     return true;
  }

}
