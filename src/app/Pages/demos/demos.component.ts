import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashbordService } from 'src/app/Services/dashbord.service';
import { Demande } from 'src/app/modeles/demande.modele';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit{

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
    
  }
  getAllRejeted(){
    
  }
  getAllCours(){
    
  }
}
