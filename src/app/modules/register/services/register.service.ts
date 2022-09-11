import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly URL = environment.api

  constructor(private _http: HttpClient) { }

  createUser(name: string, email: string, password: string, role: string):Observable<any> {
    const body = {
      name,
      email,
      password,
      role
    }
    return this._http.post(`${this.URL}/user`,body)
  }
}
