import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IFootball } from '../interface/football';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetfootballService {
private_url="http://127.0.0.1:5000/result";
  constructor( private http:HttpClient) {
   
   }

   getFootball():Observable<IFootball[]>{
    return this.http.get<IFootball[]>(this.private_url); 
   }
}
