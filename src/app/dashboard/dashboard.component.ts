import {Component} from '@angular/core';
import {CLASS_TASK_COLOR} from '../models/type-task.model';
import {dashboardList} from '../models/dashboard-tasks.model';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.template.html',
  styleUrls: ['./dashboard.style.scss']
})
export class DashboardComponent {
  dashboard = dashboardList;
  columns = "columns";
  currentSelect = null;

  chooseColorTask(typeColor) {
    return CLASS_TASK_COLOR[typeColor];
  }

  moreInformation(item) {
    this.currentSelect = item;
  }

  closeAside() {
    this.currentSelect = null;
  }
}
