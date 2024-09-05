import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../../core/services/dashboard/dashboard.model';
import { select, Store } from '@ngrx/store';
import * as fromBooks from '../../core/store/dashboard/index';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books$!: Observable<IBook[]>;
  isLoading$!: Observable<boolean>;
  selectedBook: IBook = { id: 0, name: '' }; // Track the selected book for editing
  isNewBook = true; // Track whether it's a new book or editing an existing one

  constructor(
    private readonly store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initDispatch();
    this.initSubscriptions();
  }

  goToNewFeature() {
    // Navigate to the dynamically added route when the button is clicked
    this.router.navigate(['dynamic-route'], {
      queryParams: { data: 'Successfully Recieved Data' }
    });
  }

  onCreateBook(name: string): void {
    if (!name) {
      return;
    }

    if (this.isNewBook) {
      // Creating a new book
      this.store.dispatch(
        fromBooks.createBook({
          book: {
            id: Math.random(),
            name
          }
        })
      );
    } else {
      // Updating an existing book
      this.store.dispatch(fromBooks.updateBook({ book: { ...this.selectedBook!, name } }));
      this.isNewBook = true; // Reset to new book mode
    }

    // Clear the input field
    this.selectedBook = { id: 0, name: '' };
  }

  onEditBook(book: IBook): void {
    this.selectedBook = { ...book };
    this.isNewBook = false;
  }

  onCancelEdit(): void {
    this.selectedBook = { id: 0, name: '' };
    this.isNewBook = true;
  }
  onUpdateBook(book: IBook): void {
    this.store.dispatch(fromBooks.updateBook({ book }));
  }

  onDeleteBook(book: IBook): void {
    this.store.dispatch(fromBooks.deleteBook({ book }));
  }

  private initDispatch(): void {
    this.store.dispatch(fromBooks.getBooks());
  }

  private initSubscriptions(): void {
    this.books$ = this.store.pipe(select(fromBooks.selectBooksList));
    this.isLoading$ = this.store.pipe(select(fromBooks.selectBookIsLoading));
  }
}
