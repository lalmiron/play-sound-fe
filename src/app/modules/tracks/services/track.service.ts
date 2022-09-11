import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api
  constructor(private http: HttpClient) {
  }
  

  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}: any) => 
      {return data}
      )
    )
  }

  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}: any) => 
      {return data.reverse()}
      )
    )
  }
}
