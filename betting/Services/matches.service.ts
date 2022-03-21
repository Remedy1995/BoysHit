import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMatch } from 'interface/match';
@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private http:HttpClient) { }

private_url="http://127.0.0.1:5000/matches/matches";
  
getMatches():Observable<IMatch>{
    
    return this.http.get<IMatch>(this.private_url)
  }
}


