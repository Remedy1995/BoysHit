import { Component, OnInit } from '@angular/core';
import { GetfootballService } from '../../../Services/getfootball.service';
import { NgxSpinnerService} from 'ngx-spinner';
import { GetLeagueTableService } from 'Services/get-league-table.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
getdatas:any=[];
getparameter:any=[];
getteams:any=[];
getleaguedata:any=[];
getleaguedatas:any=[];
gettables:any=[]


  constructor(private home_data:GetfootballService,private spinner:NgxSpinnerService
    ,private leaguetable:GetLeagueTableService) { }

  ngOnInit(): void {

 
    this.spinner.show();

    setTimeout(()=>{
    this.spinner.hide();
    },5000);
  
  


  this.home_data.getFootball().subscribe((data=>{

    try{
       this.getdatas=data;
       this.getparameter=this.getdatas.parameters;
       this.getteams=this.getdatas.response;
      
       console.log("this",this.getteams)
    }
    catch(error)
    {
      console.log(error)
    }

    

  }))

this.leaguetable.getLeagueTable().subscribe((leaguedata=>{


  try{
    this.getleaguedatas=leaguedata;
    this.gettables =this.getleaguedatas.data.total;
   
    console.log("this",this.gettables)
 }
 catch(error)
 {
   console.log(error)
 }

  
}))


  }


}
