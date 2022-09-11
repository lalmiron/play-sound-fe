import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private readonly URL = environment.api

  constructor(private _http: HttpClient) { }

  createPlaylist(name: string, description:string): Observable<any> {
    const body = {
      name,
      userId:4
    }
    return this._http.post(`${this.URL}/playlist`, body)
  }
}
