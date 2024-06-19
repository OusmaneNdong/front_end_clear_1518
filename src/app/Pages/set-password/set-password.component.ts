import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelperService } from 'src/app/Services/helper.service';
import { SnackbarService } from 'src/app/Services/snackbar.service';
import { UtilisateurService } from 'src/app/Services/utilisateur.service';
import Swal from 'sweetalert2';
import { GlobalConstants } from '../shared/global-constants';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent  implements OnInit{



  openSpinner(){
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },4000)
  }

  PasswordForm:any = FormGroup;
  responseMessage:any;
  
  registerSucess:boolean = false;
  isButtonVisible = true;

  constructor(private formBulider:FormBuilder, private utilisateurService:UtilisateurService , 
    private snackbarService:SnackbarService,private router: Router,
    private spinner: NgxSpinnerService,private helperService: HelperService, private activateRoute: ActivatedRoute
    ) { }


  ngOnInit(): void {
    console.log(this.activateRoute.snapshot.params['email']);
    
    this.PasswordForm = this.formBulider.group({
      // email:[null, Validators.required],
      newPassword:[null , Validators.required],
      confirmPassword:[null, Validators.required]
  
    });
  }



  handleSubmit(){
    var formData = this.PasswordForm.value;
    var data = {
      email:this.helperService.email,
      newPassword:formData.newPassword,
      confirmPassword:formData.confirmPassword      
    }

     this.utilisateurService.changerpassword(data).subscribe({
      next:(response:any)=>{
        alert("Mot de passe changeé !");
        this.router.navigate(['/formule'])
      },
      error: (err: any)=>{
        alert("ko");
      }
    })
  }



}
