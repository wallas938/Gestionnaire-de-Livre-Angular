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

    this.addBookToServer()

  }

  getAllBooks(id_user: string) {

    this.httpClient.get<any[]>('https://gestionnaire-de-livres-users.firebaseio.com/books.json')
                    .subscribe(
                      (response: any) => {
                        /** A revoir */
                        this.userBooks = response.filter((elem, i) => {
                          for(let data in elem) {
                            if (elem[data].id_onwer === id_user) {
                              console.log(elem[data]['id_onwer'])
                              return elem
                            } 
                          }
                        
                        })

                        console.log(this.userBooks)

                        //console.log('UserBooks from book-service: ', this.userBooks)

                        this.emitAllUsersBooks()
                      } 
                    )
  }

  addBookToServer() {
    this.httpClient.put('https://gestionnaire-de-livres-users.firebaseio.com/books.json', this.userBooks)
                    .subscribe(
                      () => {

                        this.router.navigate(['/user-books/1']) //Ajouter l'id
                      },
                      (error) => {
                        console.error('Erreur suivante: ', error)
                      }
                    )
  }

  searchUserBooks() {

  }

}