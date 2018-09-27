import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {MatCardModule} from '@angular/material';
import {DragulaModule} from 'ng2-dragula';
import {AsideModule} from './aside/aside.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    AsideModule,
    DragulaModule.forRoot()
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}
