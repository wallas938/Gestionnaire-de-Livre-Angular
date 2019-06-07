import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()

export class AuthService {

  isAuth = false;

  currentId: string

  constructor(private httpClient: HttpClient) {}

  signIn(currentId: string) {

    this.isAuth = true

    this.currentId = currentId

    this.returnCurrentId()

    //console.log('Vous êtes connecté: ', this.isAuth)
  }

  signOut() {

    this.isAuth = false

    this.currentId = ""

      //console.log('Vous êtes deco: ', this.isAuth)
      
  }

  returnCurrentId() {

    //console.log(this.currentId)

    return this.currentId

  }
}