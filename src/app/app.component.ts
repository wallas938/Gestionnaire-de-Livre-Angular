import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user-service';
import { BookService } from './services/book-service';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'gestionnaire-de-livre'

  isUserAuth: boolean

  pathToCurrentUserBooks: string

  constructor(private userService: UserService,
              private authService: AuthService) {
                
    
    console.log(this.pathToCurrentUserBooks)
  }

  ngOnInit() {

    this.syncWithCurrentUserId()

    this.userService.getUsers()
  
  }


  syncWithCurrentUserId() {

    this.pathToCurrentUserBooks = ""

    if(this.authService.isAuth) {
      
      let currentId = this.authService.returnCurrentId()

      this.isUserAuth = this.authService.isAuth

      this.pathToCurrentUserBooks = 'user-books/'+currentId
      
    }
  }

}
