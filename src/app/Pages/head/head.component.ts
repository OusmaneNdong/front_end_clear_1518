import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
  
})
export class HeadComponent {
  constructor(private router:Router){}


  deconnect(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('profile');
    localStorage.removeItem('nin');
    this.router.navigate(['/formule']);
   
  }

}
