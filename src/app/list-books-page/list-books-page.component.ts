import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Subscription } from 'rxjs';
import { BookService } from '../services/book-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-books-page',
  templateUrl: './list-books-page.component.html',
  styleUrls: ['./list-books-page.component.css']
})
export class ListBooksPageComponent implements OnInit {

  private userBooks: Book[] = []

  bookSubscriber: Subscription

  id_user: string

  constructor(private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute) { 
                
              this.id_user = this.route.snapshot.params['id']

              this.bookService.getAllBooks(this.id_user)

            }

  ngOnInit() {
    
    this.bookSubscriber = this.bookService.bookSubject.subscribe(
      
      (userBooks: any[]) => {

        this.userBooks = userBooks.filter((elem, i) => {

          for(let data in elem) {

              return elem['id_owner'] === this.id_user
          }

        //console.log(userBooks)

      },
      (error) => {
        console.error('Erreur suivante: ', error)
      }
    )
    })
  }

  toAddBookPage() {
    
    //console.log(this.userBooks)

    this.router.navigate([`add-new-book/${this.id_user}`])
  }

}
