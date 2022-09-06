import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api

  constructor(private _http: HttpClient) { }

  sendCredentials(email: string, password: string): Observable<any> {

    const body = {
      email,
      password
    }

    return this._http.post(
  `${this.URL}/login`, body)
  }
}
