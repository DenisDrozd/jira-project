import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    DragulaModule.forRoot()
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}
