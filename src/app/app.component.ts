import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user-service';
import { BookService } from './services/book-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gestionnaire-de-livre';

  constructor(private userService: UserService,
              private userBook: BookService) {

  }

  ngOnInit() {
    this.userService.getUsers()
  }


}
