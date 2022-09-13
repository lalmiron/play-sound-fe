import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  private readonly URL = environment.api;

  constructor(private _http:HttpClient) { }

  getUserPlaylist$():  Observable<any>{
    return this._http.get(`${this.URL}/playlists`).pipe(
      map(({playlist}:any)=>{
        return playlist
      })
    )
  }
}
