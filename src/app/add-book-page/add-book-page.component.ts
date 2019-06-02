import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Book } from '../models/book.model'
@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.css']
})
export class AddBookPageComponent implements OnInit {



  addBookForm = new FormGroup({
    bookTitle: new FormControl('', Validators.required),
    bookAuthor: new FormControl('', Validators.required),
    bookEdition: new FormControl('', Validators.required),
    bookReleaseDate: new FormControl(''),
    bookResume: new FormControl(''),
  })

  constructor( ) { }

  ngOnInit() {
  }

  onBookSubmit() {

  }

}
