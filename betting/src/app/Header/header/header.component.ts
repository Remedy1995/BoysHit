import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent implements OnInit {
  
  
sitename="Sure 2 Odds";
name='Japhet Adjiietey';
date=new Date();
current_date=new Date();
get_Sitename(){
  return this.sitename;
}

  constructor() { 
  
  }

  ngOnInit(): void {
  }
get_Greeting(){
 const gethours=this.current_date.getHours();
 if(gethours<=11){
   return 'Good Morning';
 }
 else if(gethours>11 && gethours<=17){
  return 'Good Afternoon';
 }
  else{
    return 'Good Evening';
  }
}


get_Date(){
  return this.current_date;
}



}


