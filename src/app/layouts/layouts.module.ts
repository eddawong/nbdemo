import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NbLayoutModule, NbSidebarModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [LayoutsComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbIconModule,
    NbSidebarModule,
    NbEvaIconsModule
  ],
  exports: [LayoutsComponent]
})
export class LayoutsModule { }
