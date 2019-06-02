import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms'
import { Validators } from '@angular/forms'
import { UserService } from '../services/user-service';
import { User } from '../models/users.model';
import { Book } from '../models/book.model'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  private users: User[] = []

  userSubscription: Subscription

  connexionErrorMessage: string = ""

  loginForm = new FormGroup({

    loginEmail: new FormControl('', Validators.required),

    loginPassword: new FormControl('', Validators.required)

  })

  constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit() {

    this.userSubscription = this.userService.userSubject.subscribe(
      
      (userListUpdated: User[]) => {

        this.users = userListUpdated

      }
    )
  }

  toSignUpPage() {

    this.router.navigate(['/sign-up'])

  }

  onCredentialSubmit() {
    
    let userEmail = this.loginForm.value.loginEmail

    let userPassword = this.loginForm.value.loginPassword

    let isAuth = this.userService.credentialVerificator(userEmail, userPassword)
    
    if (!isAuth) {

      this.connexionErrorMessage = "Veuilliez verifier vos identifiants !"
    
    }else {

      this.router.navigate(['/user-books'])

      this.connexionErrorMessage = ""
    }

    console.log(new Book({
      title: 'Le petit chat rouge', 
      author: 'Jean Des Bois', 
      edition: 'Les Trois Freres', 
      releaseDate: '12/09/1974', 
      resume: 'Il est très nul...',
    }))
  
  }
  
}
