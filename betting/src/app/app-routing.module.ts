import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes,RouterModule } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:'match',component:MatchesComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,MatchesComponent]
