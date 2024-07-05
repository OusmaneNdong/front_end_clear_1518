import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../modeles/utilisateur.modele';
import { Router } from '@angular/router';
import { Demandeur } from '../modeles/demandeur.modele';
import { AuthenticationResponse } from '../modeles/authentication-response';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  url = environment.apiUrl;
  http: any;
  baseUrl: any;


email!:string;
password!:string;
isValid:boolean = false;
errorMessage: any;
isLoaging = false;

  constructor(private httpClient:HttpClient, private router: Router) {}


  signUp(data:any){
    return this.httpClient.post(this.url + "/api/utilisateur/register" , data , {
      headers:new HttpHeaders().set('Content-Type' , 'application/json')
    })
  }

  forgotPassword(data:any):Observable<number>{
    return this.httpClient.post<number>(this.url + "/api/utilisateur/password-reset-request", data , {
      headers:new HttpHeaders().set('Content-Type' , 'application/json')
    })
  }
  getById(id: number){
    return this.httpClient.get(this.url + "/api/utilisateur/utilisateurDetails/" + id,{
      headers:new HttpHeaders().set('Content-Type' , 'application/json')
    });
  }

  checkToken() {
    return this.httpClient.get(this.url + "/api/utilisateur/checkToken");
  }

logIn(data:any):Observable<AuthenticationResponse>{
  return this.httpClient.post<AuthenticationResponse>(this.url + "/api/utilisateur/authentication" , data , {
    headers:new HttpHeaders().set('Content-Type' , 'application/json')
  })
}

changePassword(data:any):Observable<number>{
  return this.httpClient.post<number>(this.url + "/api/utilisateur/change-password" , data , {
    headers:new HttpHeaders().set('Content-Type' , 'application/json')
  })
}
  resetpassword(data:any):Observable<string>{
    return this.httpClient.post<string>(this.url+"/api/utilisateur/reset-password", data,{
      headers:new HttpHeaders().set('Content-Type','application/json')
    })
  }

  setPassword(data:any){
    return this.httpClient.post(this.url + "/api/utilisateur/set-password" , data , {
      headers:new HttpHeaders().set('Content-Type' , 'application/json')
    })
  }

getUsers(){
  return this.httpClient.get(this.url + "/api/demandeur/getDemandeur");
}


getUtilisateur(){
  return this.httpClient.get<Demandeur>(this.url + "/api/utilisateur/getUtilisateur");
}
getUtilisateurId(id: number){
  return this.httpClient.get(this.url + "/api/utilisateur/utilisateurDetails/" + id);
}

getUtilisateurStatus(status: string){
  return this.httpClient.get(this.url + "api/utilisateur/statut/Cours/" + status);
}

update(data:any){
  return this.httpClient.post(this.url + "/api/utilisateur/update" , data , {
    headers:new HttpHeaders().set('Content-Type' , 'application/json')
  })
}


}
