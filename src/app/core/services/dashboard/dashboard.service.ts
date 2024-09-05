import { Injectable } from '@angular/core';
import { IBook } from './dashboard.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private booksList: IBook[] = [
    {
      id: Math.random(),
      name: 'Book 1'
    },
    {
      id: Math.random(),
      name: 'Book 2'
    }
  ];

  constructor() {}

  getBooks(): Observable<IBook[]> {
    return of(this.booksList);
  }

  create(book: IBook): Observable<IBook> {
    this.booksList = [...this.booksList, book];

    return of(book);
  }
  update(updateBook: IBook): Observable<IBook> {
    this.booksList.map((book) => (book.id === updateBook.id ? updateBook : book));

    return of(updateBook);
  }

  delete(book: IBook): Observable<IBook> {
    this.booksList = this.booksList.filter((b) => b.id !== book.id);
    return of(book);
  }
}
