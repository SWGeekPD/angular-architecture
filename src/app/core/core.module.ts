import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { BookStoreModule } from './store/dashboard/dashboard-store.module';
import { SharedModule } from '../shared/shared.module';

// later change the BookStoreModule to AppStore module and import all store module into AppStoreModule
@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutModule, BookStoreModule , SharedModule]
})
export class CoreModule {}
