import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import {  tap} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api

  constructor(private _http: HttpClient, private cookie: CookieService) {}
 

  sendCredentials(email: string, password: string): Observable<any> {

    const body = {
      email,
      password
    }

    return this._http.post(`${this.URL}/login`, body)
      .pipe(
        tap((responseOk:any) => {
          const { token, user } = responseOk
          this.cookie.set('token', token, 4, '/')
        })
      )
  }
}
