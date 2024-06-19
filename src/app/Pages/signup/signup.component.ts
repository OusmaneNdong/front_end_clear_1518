import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from 'src/app/Services/snackbar.service';
import { UtilisateurService } from 'src/app/Services/utilisateur.service';
import { GlobalConstants } from '../shared/global-constants';
import { trigger, state, style, transition, animate } from '@angular/animations';
import Swal from 'sweetalert2';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  selectedIdType: string = 'cni';
  selectedValue: boolean = true;

  private helper = new JwtHelperService();

[x: string]: any;
nin!:string;

legendText: string = "Prénom:";


showStatusInput: boolean = true;
  password = true;
  hidePassword: boolean = true;
  confirmpassword = true;
  signupForm:any = FormGroup;
  responseMessage:any;
  hide: any;
  loginForm: any = FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router,private utilisateurService:UtilisateurService,private snackbarService:SnackbarService,
                 private spinner: NgxSpinnerService,private route:ActivatedRoute) {}

    openSpinner(){
      this.spinner.show();
      setTimeout(()=>{
        this.spinner.hide();
      },4000)
    }

  ngOnInit(): void {
    

    this.signupForm = this.formBuilder.group({
      prenom:[null , [Validators.required]],
      nom:[null, [Validators.required]],
      email:[null , Validators.required],
      confirmemail:[null , [Validators.required]],
      password:[null , Validators.required],
      confirmpassword:[null , [Validators.required]],
      nin:[null , [Validators.required, Validators.maxLength(13)]],
      // typePieces:[null, [Validators.required]]
      // passePort:[null, [Validators.required],]
    })


    
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
   
    if (signUpButton && container) {
      signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
      });
    }

    if (signInButton && container) {
      signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
      });
    }

  }

  validateSubmit(){
    if(this.signupForm.controls['password'].value !== this.signupForm.controls['confirmpassword'].value &&
      this.signupForm.controls['email'].value !== this.signupForm.controls['confirmemail'].value){
      return true;
    }else{
      return false;
    }
  }

  getNin(){
    if( localStorage.getItem("token")?.lastIndexOf != null){
      const decodedToken = this.helper.decodeToken(localStorage.getItem("token")!);
      this.nin = decodedToken.nin;
    }
    return this.nin;
  }

  handleSubmit(){

    var formDate = this.signupForm.value;
    var data = {
      prenom:formDate.prenom,
      nom: formDate.nom,
      email: formDate.email,
      confirmemail: formDate.confirmemail,
      password: formDate.password,
      confirmpassword: formDate.confirmpassword,
      nin:formDate.nin,
      // passePort:formDate.passePort
    }

    this.utilisateurService.signUp(data).subscribe((response:any)=>{
      this.responseMessage = response?.message;
        this.snackbarService.openSnackBar(this.responseMessage," ");
        this.router.navigate(['/formule']);
    }
    ,(error: { error: { message: any; }; })=>{
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }else{
        this.responseMessage = GlobalConstants.genericError;
      }
      Swal.fire({
        position: "center", 
        icon: 'error',
        title: this.responseMessage + " " + GlobalConstants.error,
        text: this.responseMessage
      });
      this.snackbarService.openSnackBar(this.responseMessage , GlobalConstants.error);
    })
  }

  // refresh(){
  //   window.location.reload();
  // }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onFormSubmit() {
    this.signupForm.reset();
    this.signupForm.patchValue({
      status: 'Your default status value' 
    });
    this.showStatusInput = false;
  }

  isCniSelected(): boolean {
    return this.signupForm.get('cni').value === 'CNI';
  }

  isPassportSelected(): boolean {
    return this.signupForm.get('passeport').value === 'PassePort';
  }
  changeLegend() {
    this.legendText = "New Legend Text"; // Change it to whatever text you want
  }

}
