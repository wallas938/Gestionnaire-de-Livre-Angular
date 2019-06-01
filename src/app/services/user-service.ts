import { User } from '../models/users.model'
import { Subject } from 'rxjs'
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()

export class UserService {

  private users: User

  userSubject = new Subject<User>()

  constructor(private authService: AuthService) {}

  addNewUser(newUser: User) {

  }
} 