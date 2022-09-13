import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api
  constructor(private http: HttpClient) {
  }
  
  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map((response:any) => { 
        return (response.tracks).map((t:any)=>{
          return {
            name: t.name,
            album: t.Album.description,
            cover: t.Album.cover,
            url: t.url,
            _id:t.id,
            artist: t.Artist
          }
        });
      })
    )
  }

  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map((response:any) => { 
        return (response.tracks).map((t:any)=>{
          return {
            name: t.name,
            album: t.Album.description,
            cover: t.Album.cover,
            url: t.url,
            _id:t.id,
            artist: t.Artist
          }
        });
      })
    )
  }
}
