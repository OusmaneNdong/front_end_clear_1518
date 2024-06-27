import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit{


  ngOnInit(): void {


//             id.parentElement.querySelector('.error').innerHTML= text ;
//         }

//         function validation(e:any) {

//             let input = e.target.querySelectorAll('input');
//             Array.from(input).forEach((element:any) => {
//                 if(element.type === 'text'){
//                     if(element.value ===''){
//                         setError(element, "Required Field");
//                         e.preventDefault();
//                     }
//                 }

//             })

 //        }  
        }

         setError= (id: HTMLElement, text: string)=>{
         const errorElement = id.parentElement?.querySelector('.error');
         if(errorElement){
          errorElement.innerHTML = text;
         }
      }

       validation(event: Event) {
        event.preventDefault();

        const form = event.target as HTMLAnchorElement;
        const inputs = form.querySelectorAll('input');
        let isValid = true;
        let pass = '';
        let emailform = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        inputs.forEach((id)=>{
          if(id.type === 'text'){
            if(id.value === ''){
              this.setError(id, "saisir votre nom");
              isValid = false;
            }else {
              this.setError(id, "");
            }
          }

         else if(id.type === 'email'){
            if(id.value === ''){
              this.setError(id, "saisir votre email");
              isValid = false;
            }else if(!emailform.test(id.value)){
              this.setError(id, "format email incorrect");
            }else {
              this.setError(id, "");
            }
           
          }

         else if(id.type === 'password'){
            if(id.name === 'confirmPass'){
              if(id.value !== pass){
                  this.setError(id, "mot de passe et confirm mot de passe not identiques")
              }else {
                this.setError(id, "");
              }

            }else{
              pass = id.value;
              if(id.value === ''){
                this.setError(id, "saisir votre mot de passe");
                isValid = false;
              }else {
                this.setError(id, "");
              }
            }
          }
        })
      }

          // let input = e.target.querySelectorAll('input');
          // Array.from(input).forEach((element)=>{
          //     if(element.type === 'text'){
          //         if(element.value ===''){
          //             setError(element, "Required Field");
          //             e.preventDefault();
          //         }
          //     }
          // })
      
    
        

        // second scipt
        // setError(element: HTMLElement, message: string) {
        //   const errorElement = element.parentElement?.querySelector('.error');
        //   if (errorElement) {
        //     errorElement.innerHTML = message;
        //   }
        // }
      
        // validation(event: Event) {
        //   event.preventDefault();
        //   const form = event.target as HTMLFormElement;
        //   const inputs = form.querySelectorAll('input');
        //   let isValid = true;
      
        //   inputs.forEach((element) => {
        //     if (element.type === 'text' || element.type === 'email' || element.type === 'password') {
        //       if (element.value === '') {
        //         this.setError(element, "Required Field");
        //         isValid = false;
        //       } else {
        //         this.setError(element, "");
        //       }
        //     }
        //   });
      
        //   return isValid;
        // }

}
