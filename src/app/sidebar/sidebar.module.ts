import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar.component';
import {
  MatSidenavModule,
  MatCheckboxModule,
  MatRadioModule
} from '@angular/material';
import {NewTaskModule} from '../dashboard/new-task/new-task.module';
import {NewTaskComponent} from '../dashboard/new-task/new-task.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatRadioModule,
    NewTaskModule
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  entryComponents: [NewTaskComponent]
})
export class SidebarModule {}
