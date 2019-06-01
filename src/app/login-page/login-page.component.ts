import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service'
import { FormGroup, FormControl } from '@angular/forms'
import { Validators } from '@angular/forms'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm = new FormGroup({
    loginEmail: new FormControl('', Validators.required),
    loginPassword: new FormControl('', Validators.required)

  })
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    
  }

  toSignUpPage() {
    this.router.navigate(['/sign-up'])
  }

  onCredentialSubmit() {
    console.log(this.loginForm.value)
  }
  
}
