import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandService } from 'src/app/Services/demand.service';
import { DemandeurService } from 'src/app/Services/demandeur.service';
import { HelperService } from 'src/app/Services/helper.service';
import { UtilisateurService } from 'src/app/Services/utilisateur.service';
import { Demande} from 'src/app/modeles/demande.modele';
import { Demandeur } from 'src/app/modeles/demandeur.modele';
import { Utilisateur } from 'src/app/modeles/utilisateur.modele';

@Component({
  selector: 'app-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrls: ['./list-demandes.component.css']
})
export class ListDemandesComponent implements OnInit {

  listDemande:  Demande[]=[];

  constructor(private demandeService:DemandService){}
   
  
   


   ngOnInit(): void {
    this.getAllDemande();
    
  }

  
  
    getAllDemande(){
      this.demandeService.getAllDemandes().subscribe({
        next:(dataDemande)=>{
         // this.listDemande = dataDemande;
          this.listDemande = dataDemande;
          console.log(dataDemande);
          
        }
      })
    }

}
