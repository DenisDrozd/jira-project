import {Component, Output, EventEmitter, Input} from '@angular/core';
import {CLASS_STATUS_COLOR, STATUS_NAME} from '../../models/type-task.model';

@Component({
  selector: 'aside',
  templateUrl: './aside.template.html',
  styleUrls: ['./aside.style.scss']
})
export class AsideComponent {
  @Input() item: any;
  @Output() close: EventEmitter<any> = new EventEmitter();

  closeAside($event) {
    this.close.emit(null);
  }

  checkStatus(status) {
    return CLASS_STATUS_COLOR[status];
  }

  getStatusName(status) {
    return STATUS_NAME[status];
  }
}
