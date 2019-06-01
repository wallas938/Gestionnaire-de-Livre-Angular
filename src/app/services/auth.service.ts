import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()

export class AuthService {

  isAuth = false;

  constructor(private httpClient: HttpClient) {}

  signIn() {
    return new Promise(
      (resolve, reject) => {
        this.httpClient.get('https://gestionnaire-de-livres-users.firebaseio.com/home.json')
      }
    )
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