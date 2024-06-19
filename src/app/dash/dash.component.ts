import { Component, OnInit } from '@angular/core';
import { DashbordService } from '../Services/dashbord.service';
import { Router } from '@angular/router';
import { Demandeur } from '../modeles/demandeur.modele';
import { Demande } from '../modeles/demande.modele';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit{

  // data!: Demandeur[] ;
  data:any;
  dataApprouved: Demande[]=[];
  dataRejeted: Demande[]=[];
  dataCours: Demande[]=[];
  approuves: Demande[]=[];
  rejetes: Demande[]=[];
  cours: Demande[]=[];

constructor(private dashbordService:DashbordService,private routes:Router){}

  ngOnInit(): void {
    
    this.getCount();
    
    this.getApprouved();
    this.getCours();
    this.getRejeted();

    this.getAllApprouved();
    this.getAllCours();
    this.getAllRejeted();
  }

   getCount(){
    this.dashbordService.getDemandeCount().subscribe((response:any)=>{
      this.data = response;
      
    })
  }
  getApprouved(){
    this.dashbordService.getDemandeApprouved().subscribe((response :any) =>{
      this.dataApprouved = response;
      
    } )
  }
  getRejeted(){
    this.dashbordService.getDemandeRejeted().subscribe((response:any)=>{
      this.dataRejeted = response;
     
    })
  }

  getCours(){
    this.dashbordService.getDemandeCours().subscribe((response:any)=>{
      this.dataCours = response;
      
      
    })
  }
  getAllApprouved(){
    this.dashbordService.getByStatutApprouved().subscribe((response:any)=>{
      this.approuves = response;
      
    })
  }
  getAllRejeted(){
    this.dashbordService.getByStatutRejeted().subscribe((response:any)=>{
      this.rejetes = response;
      
    })
  }
  getAllCours(){
    this.dashbordService.getByStatutCours().subscribe((response:any)=>{
      this.cours = response;
      
      
    })
  }

}
