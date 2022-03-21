import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILeagueTable } from 'interface/prediction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetLeagueTableService {
  private_url="http://127.0.0.1:5000/leaguetable/leaguetable";
  constructor( private http:HttpClient) { }

getLeagueTable():Observable<ILeagueTable>{
  return this.http.get<ILeagueTable>(this.private_url)

}


  
}


