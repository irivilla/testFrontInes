import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClickOutsideModule } from 'ng-click-outside';

import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { VerticalComponent } from './vertical/vertical.component';

@NgModule({
  declarations: [
    LayoutComponent, 
    TopbarComponent, 
    FooterComponent, 
    VerticalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ClickOutsideModule
  ],
  providers: [],
  exports: [LayoutComponent],
})
export class LayoutsModule { }
