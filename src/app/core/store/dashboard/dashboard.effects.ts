import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap } from 'rxjs/operators';

import * as fromBooks from './index';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { IBook } from '../../services/dashboard/dashboard.model';

@Injectable()
export class BookEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly dashboardService: DashboardService
  ) {}

  getBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromBooks.getBooks.type),
      switchMap(() => this.dashboardService.getBooks()),
      map((books: IBook[]) => fromBooks.getBooksSuccess({ books }))
    )
  );

  createBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromBooks.createBook),
      switchMap(({ book }) => this.dashboardService.create(book)),
      map((book: IBook) => fromBooks.createBookSuccess({ book }))
    )
  );

  updateBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromBooks.updateBook),
      switchMap(({ book }) => this.dashboardService.update(book)),
      map((book: IBook) => fromBooks.updateBookSuccess({ book }))
    )
  );

  deleteBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromBooks.deleteBook),
      switchMap(({ book }) => this.dashboardService.delete(book)),
      map((book: IBook) => fromBooks.deleteBookSuccess({ book }))
    )
  );
}
