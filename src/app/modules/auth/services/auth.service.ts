import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api

  constructor(private _http: HttpClient) { }

  sendCredentials(email: string, passwored: string): void {
    //TODO validar con be
  }
}
