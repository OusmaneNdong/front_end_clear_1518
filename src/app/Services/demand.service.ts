import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../modeles/utilisateur.modele';
import { Demandeur } from '../modeles/demandeur.modele';
import { Demande } from '../modeles/demande.modele';
import { Structure } from '../modeles/structure';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  url = environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  getAllDemandes(): Observable<Demande[]> {
    return this.httpClient.get<Demande[]>(this.url + "/api/demande/getDemande");
  }

  getDemanderById(id: number): Observable<Demande>{
    return this.httpClient.get<Demande>(this.url + "/api/demande/demandeDetails/" + id);
  }

 createDemande(id: number){
    return this.httpClient.post(this.url + "/api/demande/demandez?id=" + id,{
      headers:new HttpHeaders().set('Content-Type' , 'application/json')
    });
  }

  makeDemande(demandeurId: number){
    return this.httpClient.post(this.url + "/api/demande/demandez/" + demandeurId, {});
  }


  approuvedAttestation(utilisateurId: number, demandeurId: number, demandeId: number){
    return this.httpClient.get(this.url + "/api/attestation/pdf_genere/"+ utilisateurId +"/"+ demandeurId+"/"+ demandeId+"/1");
  }

  rejectedAttestation(id:number){
    return this.httpClient.get(this.url + "/api/mail/mail_rejete/" + id, {});
  }


}
