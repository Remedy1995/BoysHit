import { Component, OnInit,Input } from '@angular/core';
import { GetfootballService } from '../../../Services/getfootball.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() element!: { type: string; name: string; content: string; };

  
  constructor(private footballresult:GetfootballService) { 

  }

  ngOnInit(): void {
  //  console.log(this.footballresult.getFootball().subscribe(data=>data))

    
  }

}
