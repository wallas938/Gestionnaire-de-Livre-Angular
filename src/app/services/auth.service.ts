import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()

export class AuthService {

  isAuth = false;

  constructor(private httpClient: HttpClient) {}

  signIn() {

    this.isAuth = true

    console.log('Vous êtes connecté')
  }

/*   signIn() {
      return new Promise(
      (resolve, reject) => {
          setTimeout(
              () => {
              this.isAuth = true;
              
            console.log('auth its true')
              resolve(true);
              }, 2000
          );
      });
  } */

  signOut() {

      this.isAuth = false;
      
  }
}