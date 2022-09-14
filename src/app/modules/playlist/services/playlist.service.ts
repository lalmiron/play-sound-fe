import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private readonly URL = environment.api
  public newPlaylist$: BehaviorSubject<any> = new BehaviorSubject(undefined);

  constructor(private _http: HttpClient) { 
    this.newPlaylist$.subscribe(responseOK => {
      if(responseOK){
        console.log('RESP--->', responseOK);
        
      }
    })
   }

  createPlaylist(name: string, description:string): Observable<any> {
    const body = {
      name,
      description
    }
    return this._http.post(`${this.URL}/playlist`, body)
  }
}
