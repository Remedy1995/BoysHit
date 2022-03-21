import { Component, OnInit } from '@angular/core';
import { sidebarModel } from 'Models/sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

   image1='assets/images/logo1.jpg';
sports:sidebarModel[]=[
  new sidebarModel('Football',this.image1),
  new sidebarModel('Basketball',this.image1),
  new sidebarModel('Boxing',this.image1),
  new sidebarModel('Athletics',this.image1),
  new sidebarModel('Cricket',this.image1),
  new sidebarModel('Golf',this.image1),
  new sidebarModel('Baseball',this.image1),
  new sidebarModel('Motor Sports',this.image1)

]
  constructor() { }

  ngOnInit(): void {
  }

}
