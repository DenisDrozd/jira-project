import {Component, Input} from '@angular/core';
import {CLASS_STATUS_COLOR, STATUS_NAME} from '../../app/models/type-task.model';

@Component({
  selector: 'status',
  templateUrl: './status.template.html',
  styleUrls: ['./status.style.scss']
})
export class StatusComponent {
  @Input() status;

  checkStatus(status) {
    return CLASS_STATUS_COLOR[status];
  }

  getStatusName(status) {
    return STATUS_NAME[status];
  }
}
