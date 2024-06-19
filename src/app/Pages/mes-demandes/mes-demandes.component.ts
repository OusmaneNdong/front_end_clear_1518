import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { NgxSpinnerService } from 'ngx-spinner';
import { DemandService } from 'src/app/Services/demand.service';
import { DemandeurService } from 'src/app/Services/demandeur.service';
import { HelperService } from 'src/app/Services/helper.service';
import { UtilisateurService } from 'src/app/Services/utilisateur.service';
import { Demande } from 'src/app/modeles/demande.modele';
import { Demandeur } from 'src/app/modeles/demandeur.modele';
import { Utilisateur } from 'src/app/modeles/utilisateur.modele';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mes-demandes',
  templateUrl: './mes-demandes.component.html',
  styleUrls: ['./mes-demandes.component.css']
})
export class MesDemandesComponent implements OnInit {

  demande!: any;
  statut: any;


  constructor(private utilisateurService:UtilisateurService, private demandeurService:DemandeurService,
    private route: ActivatedRoute, private router:Router, private demandeService:DemandService,
    private helperService: HelperService){}
   
  
   demandes!: Demandeur[];
   utilisateurs!:Utilisateur[];
   demandeur:  Demandeur = {};
   listDemande:  Demande[]=[];
   id!: number;


   ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getDemandeur(this.id);
    this.getAllDemande();
    this.fetch();
    
  }

  public fetch(){
    this.utilisateurService.getUsers().subscribe((response:any)=>{
      this.demandes = response;
      console.log(response);
    })
  }
  public UserFetch(){
    this.utilisateurService.getUtilisateur().subscribe((data:any)=>{
      this.utilisateurs = data;
      console.log(data);
      
    })
  }
  getDemandeur(id:number){
    this.demandeurService.getDemandeurById(id).subscribe({
       next:(data)=>{
        this.router.navigate(['/verificationattestation', id])
         this.demandeur = data;
         console.log(data);
         
       }
     })
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
