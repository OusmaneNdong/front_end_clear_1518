import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DemandService } from 'src/app/Services/demand.service';
import { DemandeurService } from 'src/app/Services/demandeur.service';
import { HelperService } from 'src/app/Services/helper.service';
import { UtilisateurService } from 'src/app/Services/utilisateur.service';
import { Demande } from 'src/app/modeles/demande.modele';
import { Demandeur } from "src/app/modeles/demandeur.modele";
import { Structure } from 'src/app/modeles/structure';
import { Utilisateur } from 'src/app/modeles/utilisateur.modele';
import { environment } from 'src/environments/environment';
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
  apiurl: string = environment.apiUrl
  

  constructor(private  demandeurService: DemandeurService,private route: ActivatedRoute, private demandeService: DemandService,
                  private router:Router, private helperService: HelperService,private spinner:NgxSpinnerService,
                  private utilisateurService: UtilisateurService){}

                  openSpinner(){
                    this.spinner.show();
                    setTimeout(()=>{
                      this.spinner.hide();
                    },5000)
                  }
  

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.utilisateurId = Number(localStorage.getItem("userId"));
    this.getDemande(id);

  }

  getDemande(id:number){
    this.demandeService.getDemanderById(id).subscribe({
       next:(data)=>{
         this.demande = data;
         
       }
     })
   }

   

  approuvedAttestaion() {
    this.demandeService.approuvedAttestation(this.utilisateurId, this.demande.demandeurDTO.id, Number(this.demande.id)).subscribe({
      next:(data)=>{
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Attestation envoyee au demandeur",
          showConfirmButton: false,
          timer: 9000
        }).then(() => {
        this.router.navigate(['/dash/list_demandes']);        
        })
      },
      error:(err:any)=>{
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Une erreur s'est produite",
          showConfirmButton: false,
          timer: 6000
        }).then(() => {
        this.router.navigate(['/verification',this.demande.id]);        
        })
          
      }
     })
   
    // this.demandeService.approuvedAttestation(this.utilisateurId, this.demande.demandeurDTO.id, Number(this.demande.id)).subscribe({
    //   next: (data) => {
    //     alert("Demande approuvée avec succès " + "\n" + "Attestation A L'addresse mail:" + this.demandeur.email);
    //     this.router.navigate(['/dash/list_demandes']);
    //     this.demande = data;
    //     console.log(data);
    //   }
    // });
  }

   rejectedAttestation(){
    this.demandeService.rejectedAttestation(Number(this.demande.id)).subscribe({
      next:(data)=>{
       Swal.fire({
        position: "center",
        icon: "success",
        title: "Demande Rejetée",
        showConfirmButton: false,
        timer: 6000
      }).then(() => {
      this.router.navigate(['/verification',this.demande.id]);        
      })
       
      },
      error:(err:any)=>{
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Une erreur s'est produite",
          showConfirmButton: false,
          timer: 6000
        }).then(() => {
        this.router.navigate(['/verification',this.demande.id]);        
        })

        
      }
    })
   }


   RetourToListDemandes(){
    this.router.navigate(['/dash/list_demandes']);
   }


}
