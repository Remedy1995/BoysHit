import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'Services/matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
getmatches:any=[]
allmatches:any=[]
  constructor(private today_match:MatchesService) { }

  ngOnInit(): void {

    this.today_match.getMatches().subscribe(matches=>{
      this.getmatches.data=matches;
     this.allmatches=this.getmatches.data.data;
      console.log("hi",this.allmatches)  
      
    })
  }

}
