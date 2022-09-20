import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly URL = environment.api

  constructor(private _http:HttpClient) { }

  public sendTrack$(data:FormData): Observable<any> {
    return this._http.post(`${this.URL}/track`,data)
  }

  public getAlbums$(): Observable<any> {
    return this._http.get(`${this.URL}/albums`).pipe(
      map((res:any) =>{
        const { albums } = res
        return albums;
      })
    )
  }
}
