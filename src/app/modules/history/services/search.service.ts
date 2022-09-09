import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL:string = environment.api;
  constructor(private http:HttpClient) { }

  searchTracks$(term:string): Observable<any>{
    return this.http.get(`${this.URL}/tracks?src=${term}`)
  }
}
