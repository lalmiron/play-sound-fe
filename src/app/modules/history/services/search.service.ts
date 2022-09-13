import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL:string = environment.api;
  constructor(private http:HttpClient) { }

  searchTracks$(term:string): Observable<any>{
    return this.http.get(`${this.URL}/tracks?src=${term}`)
    .pipe(
      map((response:any) => { 
        return (response.tracks).map((t:any)=>{
          return {
            name: t.name,
            album: t.Album.description,
            cover: t.Album.cover,
            url: t.url,
            _id:t.id,
            artist: t.Artist,
            createdAt: t.createdAt
          }
        });
      })
    )
  }
}
