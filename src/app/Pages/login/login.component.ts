import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private fb: FormBuilder) { }
 signupForm: any;
 form:any= FormGroup;

  ngOnInit(): void {
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

    this.form = this.fb.group({
      cni: [''],
      passeport: ['']
    });
  }

  isCniSelected(): boolean {
    return this.form.get('cni').value === 'CNI';
  }

  isPassportSelected(): boolean {
    return this.form.get('passeport').value === 'PassePort';
  }

}


