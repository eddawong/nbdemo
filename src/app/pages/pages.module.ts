import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { NbMenuModule } from '@nebular/theme';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    NbMenuModule,
    PagesRoutingModule,
    LayoutsModule,
    DashboardModule
  ]
})
export class PagesModule { }
