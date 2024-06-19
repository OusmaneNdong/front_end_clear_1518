import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/Services/utilisateur.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private auth: UtilisateurService,  private router:Router){}

  isLogin =false;
  
  ngOnInit(): void {
    this.isLogin = this.auth.isLoaging

    if(localStorage.getItem("token")){
       this.isLogin = true;
    }
      console.log(this.isLogin);
    
  }

refresh(){
  window.location.reload();
}

deconnect(){
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('profile');
  localStorage.removeItem('nin');
  this.router.navigate(['/formule']);
  this.refresh()
}

}
