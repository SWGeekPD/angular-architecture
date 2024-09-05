import { IBook } from '../../services/dashboard/dashboard.model';

export interface IBookState {
  books: IBook[];
  isLoading: boolean;
}
