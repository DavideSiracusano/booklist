import { Component } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  newTitle: string = '';
  newAuthor: string = '';

  books: Book[] = [];

  AddBook() {
    if (this.newTitle != '' && this.newAuthor != '') {
      this.books.push({
        id: this.books.length + 1,
        title: this.newTitle,
        author: this.newAuthor,
      });
      this.newTitle = '';
      this.newAuthor = '';
    }
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  DeleteBook(id: number) {
    this.books.splice(id, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  constructor() {}

  ngOnInit() {
    let savedBooks = localStorage.getItem('books');
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }
}
