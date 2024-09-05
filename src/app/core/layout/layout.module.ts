import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './header/profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnauthorizedUserComponent } from './unauthorized-user/unauthorized-user.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ProfileComponent,
    FooterComponent,
    PageNotFoundComponent,
    UnauthorizedUserComponent
  ],
  imports: [CommonModule, LayoutRoutingModule, TranslateModule]
})
export class LayoutModule {}
