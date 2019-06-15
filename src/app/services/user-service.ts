import { User } from '../models/users.model'
import { Router } from '@angular/router'
import { Subject } from 'rxjs'
import { Injectable } from '@angular/core'
import { AuthService } from './auth.service'
import { HttpClient } from '@angular/common/http'

@Injectable()

export class UserService {

  private users: User[] = []

  id_user: string

  userSubject = new Subject<User[]>()

  constructor(private authService: AuthService,
              private httpClient: HttpClient,
              private router: Router) {}

  emitAllSubscribedUsers() {

    if(this.users.length > 0) {

      this.userSubject.next(this.users.slice())
    }else {
      this.users = []
    }

  }

  addNewUser(newUser: User) {

    this.users = [...this.users, newUser]

    this.createNewUser()

  }

  getUsers() {
    this.httpClient.get<any[]>('https://gestionnaire-de-livres-users.firebaseio.com/users.json')
                    .subscribe(
                      (users: any) => {

                        this.users = users 

                        this.emitAllSubscribedUsers()

                    },
                    (error) => {
                      console.error('Erreur suivante: ', error)
                    }
                  )
  }

  createNewUser() {
    this.httpClient.put('https://gestionnaire-de-livres-users.firebaseio.com/users.json', this.users)
                        .subscribe(
                          () => {

                            console.log('Enregistrement terminé !')
                            
                            this.router.navigate(['/home'])
                          
                          },
                          (error) => {
                            
                            console.log('Erreur suivante: ', error)
                          }
                        )
  }
  
  credentialVerificator(userEmail: string, userPassword: string) {

    for(let user in this.users) {

      if (this.users[user].email === userEmail && this.users[user].password === userPassword) {

        this.authService.signIn(this.users[user].generatedId)

        return this.users[user].generatedId
        
      }

    }

  }

  getUserId(id_user: string) {
    this.id_user = id_user
  }

  returnUserId() {
    return this.id_user
  }
  
} 