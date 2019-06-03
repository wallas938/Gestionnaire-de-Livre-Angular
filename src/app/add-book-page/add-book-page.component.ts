import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Book } from '../models/book.model'
import { BookService } from '../services/book-service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.css']
})
export class AddBookPageComponent implements OnInit {

  id_owner: string

  addBookForm = new FormGroup({
    bookTitle: new FormControl('', Validators.required),
    bookAuthor: new FormControl('', Validators.required),
    bookEdition: new FormControl('', Validators.required),
    bookReleaseDate: new FormControl(''),
    bookResume: new FormControl(''),
  })

  constructor(private bookService: BookService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id_owner = this.route.snapshot.params['id'];
  }

  onNewBookSubmit() {
    
    let id_owner = this.id_owner

    this.bookService.addNewBook(new Book(
      id_owner,
      this.addBookForm.value.bookTitle,
      this.addBookForm.value.bookAuthor,
      this.addBookForm.value.bookEdition,
      this.addBookForm.value.bookReleaseDate,
      this.addBookForm.value.bookResume
      ))
      
  }

}
