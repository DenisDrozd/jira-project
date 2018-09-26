import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.template.html',
  styleUrls: ['./sidebar.style.scss']
})
export class SidebarComponent {
  mode = new FormControl('over');
}
