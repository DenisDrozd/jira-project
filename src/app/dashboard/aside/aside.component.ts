import {Component, Output, EventEmitter, Input} from '@angular/core';
import {CLASS_STATUS_COLOR} from '../../models/type-task.model';

@Component({
  selector: 'aside',
  templateUrl: './aside.template.html',
  styleUrls: ['./aside.style.scss']
})
export class AsideComponent {
  @Input() item;
  @Output() close: EventEmitter<any> = new EventEmitter();

  closeAside() {
    this.close.emit(null);
  }

  checkStatus(status) {
    return CLASS_STATUS_COLOR[status];
  }
}
