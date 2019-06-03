import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()

export class AuthService {

  isAuth = false;

  constructor(private httpClient: HttpClient) {}

  signIn() {

    this.isAuth = true

    console.log('Vous êtes connecté: ', this.isAuth)
  }

  signOut() {

    this.isAuth = false

      console.log('Vous êtes deco: ', this.isAuth)
      
  }
}