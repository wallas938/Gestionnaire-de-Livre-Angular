import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UserService } from '../services/user-service'
import { User } from '../models/users.model'
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  passVal1: string
  passVal2: string
  errorMessage: string = ""



  signUpForm = new FormGroup({
    newUserLastName: new FormControl('', Validators.required),
    newUserFirstName: new FormControl('', Validators.required),
    newUserAdress: new FormControl('', Validators.required),
    newUserEmail: new FormControl('', Validators.required),
    newUserPassword: new FormControl('', Validators.required),
    newUserPasswordConfirmation: new FormControl('', Validators.required),
  })

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  passVerificator(pass1: string, pass2: string) {

    return pass1 === pass2

  }

  inscriptionValidatorHandler() {
    this.errorMessage = ""
    let ln = this.signUpForm.value.newUserLastName
    let fn = this.signUpForm.value.newUserFirstName
    let ad = this.signUpForm.value.newUserAdress
    let em = this.signUpForm.value.newUserEmail
    let ps = this.signUpForm.value.newUserPassword

    this.userService.addNewUser(new User(ln, fn, ad, em, ps))
    console.log(new User(ln, fn, ad, em, ps))
    
    
  }

  inscriptionErrorHandler() {
    this.errorMessage = "Vos mots de Passe ne sont pas identiques !"
    this.router.navigate(['/sign-up'])

  }

  onSignUpSubmit() {  
    this.passVal1 = this.signUpForm.value.newUserPassword
    this.passVal2 = this.signUpForm.value.newUserPasswordConfirmation

    let passChecker = this.passVerificator(this.passVal1, this.passVal2)

    passChecker ? this.inscriptionValidatorHandler() : this.inscriptionErrorHandler()
  }

}
