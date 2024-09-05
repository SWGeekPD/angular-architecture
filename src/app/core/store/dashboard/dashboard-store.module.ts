import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BookEffects } from './dashboard.effects';
import { bookReducer } from './dashboard.reducers';

@NgModule({
  imports: [StoreModule.forFeature('book', bookReducer), EffectsModule.forFeature([BookEffects])]
})
export class BookStoreModule {}
