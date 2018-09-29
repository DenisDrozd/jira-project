import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {NewTaskComponent} from '../dashboard/new-task/new-task.component';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.template.html',
  styleUrls: ['./sidebar.style.scss']
})
export class SidebarComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      width: '640px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
