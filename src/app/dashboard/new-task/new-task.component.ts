import {Component, Inject} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl} from '@angular/forms';
import {TYPE_TASK_ARRAY, CLASS_TASK_COLOR} from '../../models/type-task.model';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.template.html',
  styleUrls: ['./new-task.style.scss']
})
export class NewTaskComponent {
  typeArray = TYPE_TASK_ARRAY;

  selectedValue = this.typeArray[0].type;

  constructor(public dialogRef: MatDialogRef<NewTaskComponent>) {
  }

  getClassTypeColor(type) {
    return CLASS_TASK_COLOR[type] + '_border';
  }

  getClassTypeSelectColor(type) {
    return CLASS_TASK_COLOR[type];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
