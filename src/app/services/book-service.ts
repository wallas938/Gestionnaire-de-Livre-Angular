import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Book } from '../models/book.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class BookService {

  private userBooks: Book[] = []

  bookSubject = new Subject <Book[]>()
  
  constructor(private httpClient: HttpClient,
              private router: Router) {}



  emitAllUsersBooks() {

      this.bookSubject.next(this.userBooks.slice())

  }

  addNewBook(newBook: Book) {
    
    this.userBooks.push(newBook)

    console.log(newBook['id_owner'])

    this.addBookToServer(newBook['id_owner'])

  }

  getAllBooks(id_user: string) {

    this.httpClient.get<any[]>('https://gestionnaire-de-livres-users.firebaseio.com/books.json')
                    .subscribe(
                      (response: any) => {

                        this.userBooks = response
                        
                        this.emitAllUsersBooks()
                      } 
                    )
  }

  addBookToServer(id_user: string) {
    this.httpClient.put('https://gestionnaire-de-livres-users.firebaseio.com/books.json', this.userBooks)
                    .subscribe(
                      () => {

                        this.router.navigate([`/user-books/${id_user}`]) //Ajouter l'id
                      },
                      (error) => {
                        console.error('Erreur suivante: ', error)
                      }
                    )
  }

  searchUserBooks() {

  }

}