import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  declarations: [DashboardComponent, DynamicComponent],
  imports: [CommonModule, FormsModule, SharedModule, DashboardRoutingModule, TranslateModule]
})
export class DashboardModule {
  constructor() {
    // create dynamic route
    DashboardRoutingModule.addRoute({ path: 'dynamic-route', component: DynamicComponent });
  }
}
