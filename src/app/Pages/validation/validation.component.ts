import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { get } from 'jquery';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit{




  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}


  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }
        get f(): { [key: string]: AbstractControl } {
          return this.form.controls;
        }
      
        onSubmit(): void {
          this.submitted = true;
          if (this.form.invalid) {
            return;
          }
          console.log(JSON.stringify(this.form.value, null, 2));
        }
      
        onReset(): void {
          this.submitted = false;
          this.form.reset();
        }

}

        export default class Validation {
          static match(controlName: string, checkControlName: string): ValidatorFn {
            return (controls: AbstractControl) => {
              const control = controls.get(controlName);
              const checkControl = controls.get(checkControlName);
        
              if (checkControl?.errors && !checkControl.errors['matching']) {
                return null;
              }
        
              if (control?.value !== checkControl?.value) {
                controls.get(checkControlName)?.setErrors({ matching: true });
                return { matching: true };
              } else {
                return null;
              }
            };
          }
        }


      

       


