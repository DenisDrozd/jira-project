import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewTaskComponent} from './new-task.component';
import {MatDialogModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule
  ],
  declarations: [NewTaskComponent],
  exports: [NewTaskComponent]
})
export class NewTaskModule {}
