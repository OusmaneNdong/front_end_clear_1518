import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { NgxSpinnerService } from 'ngx-spinner';
import { DemandService } from 'src/app/Services/demand.service';
import { DemandeurService } from 'src/app/Services/demandeur.service';
import { HelperService } from 'src/app/Services/helper.service';
import { UtilisateurService } from 'src/app/Services/utilisateur.service';
import { Demande } from 'src/app/modeles/demande.modele';
import { Demandeur } from "src/app/modeles/demandeur.modele";
import { Structure } from 'src/app/modeles/structure';
import { Utilisateur } from 'src/app/modeles/utilisateur.modele';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demandeur-details',
  templateUrl: './demandeur-details.component.html',
  styleUrls: ['./demandeur-details.component.css']
})
export class DemandeurDetailsComponent implements OnInit{

  id!: number;
  email!: string;
  demande: Demande = {};
  structure: Structure = {};
  demandeur:  Demandeur = {};
  validate: boolean = false;
   utilisateur: Utilisateur = {};
  nin!: string;
  demandeurId!: number;
  utilisateurId!: number;
  

  constructor(private  demandeurService: DemandeurService,private route: ActivatedRoute, private demandeService: DemandService,
                  private router:Router, private helperService: HelperService,private spinner:NgxSpinnerService,
                  private utilisateurService: UtilisateurService){}

                  openSpinner(){
                    this.spinner.show();
                    setTimeout(()=>{
                      this.spinner.hide();
                    },6000)
                  }
  

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.utilisateurId = Number(localStorage.getItem("userId"));
    const demandeurId = Number(this.route.snapshot.paramMap.get('demandeurId'));
    const demandeId = Number(this.route.snapshot.paramMap.get('demandeId'));

    console.log("id" + id);
    console.log(" id utilisateur "+ this.utilisateurId);
    console.log( " id demandeur " + demandeurId);
    console.log( " id demande " + demandeId);
    
    
  this.rejectedAttestation();
    this.getDemande(id);
    this.getDemandeur(id);
    this.getUtilisateurId(id);

  }
  

  getDemandeur(id:number){
   this.demandeurService.getDemandeurById(id).subscribe({
      next:(data)=>{
        this.demandeur = data;
        console.log(data);
      }
    })
  }

  getDemande(id:number){
    this.demandeService.getDemanderById(id).subscribe({
       next:(data)=>{
         this.demande = data;
         console.log(data);
         
       }
     })
   }

   getUtilisateurId(id:number){
    this.utilisateurService.getUtilisateurId(id).subscribe({
      next:(data)=>{
        this.utilisateur = data;
        console.log(data);
      }
    })
   }

  approuvedAttestaion() {
  
    this.demandeService.approuvedAttestation(this.utilisateurId, this.demande.demandeurDTO.id, Number(this.demande.id)).subscribe({
      next: (data) => {
        alert("Demande approuvée avec succès " + "\n" + "Attestation A L'addresse mail:" + this.demandeur.email);
        this.router.navigate(['/dash/list_demandes']);
        this.demande = data;
        console.log(data);
      }
    });
  }

   rejectedAttestation(){
    this.demandeService.rejectedAttestation(Number(this.demande.id)).subscribe({
      next:(data)=>{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Email rejet envoyé avec success à : " + this.demande.id,
          showConfirmButton: true,
          timer: 7000
        });
        this.router.navigate(['/dash/list_demandes']);
        console.log(data);
        
        this.router.navigate(['/dash/list_demandes']);
      }
    })
   }


   RetourToListDemandes(){
    this.router.navigate(['/dash/list_demandes']);
   }
  // public fechtDemandeurById(){
  //   this.demandeurService.getDemandeurById(this.id).subscribe((response:any)=>{
  //     this.demandeur = response;
  //     window.location.reload();
  //     console.log(data);
      
  //   })
  // }

}
