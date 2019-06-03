import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms'
import { Validators } from '@angular/forms'
import { UserService } from '../services/user-service';
import { User } from '../models/users.model';
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

    let id_user = this.userService.credentialVerificator(userEmail, userPassword)
    
    if (!id_user) {

      this.connexionErrorMessage = "Veuilliez verifier vos identifiants !"
    
    }else {

      this.router.navigate([`/user-books/${id_user}`])
      
      this.connexionErrorMessage = ""
    }
  
  }
  
}
