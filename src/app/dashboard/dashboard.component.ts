import {Component} from '@angular/core';
import {TypeTask, CLASS_TASK_COLOR} from '../models/type-task.model';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.template.html',
  styleUrls: ['./dashboard.style.scss']
})
export class DashboardComponent {
  columns = "columns";

  dashboardList = [
    {
      title: 'To do',
      list: [
        {
          task: 'JIRA',
          number: '1',
          type: TypeTask.TASK,
          description: 'Here description and otherljs'
        }
      ]
    },
    {
      title: 'In progress',
      list: [
        {
          task: 'JIRA',
          number: '2',
          type: TypeTask.BUGFIX,
          description: 'Here2 description and other text'
        },
        {
          task: 'JIRA',
          number: '3',
          type: TypeTask.TASK,
          description: 'Here 3description  fkdsj other text'
        },
        {
          task: 'JIRA',
          number: '8',
          type: TypeTask.BUGFIX,
          description: 'Here4 description and other text'
        },
        {
          task: 'JIRA',
          number: '9',
          type: TypeTask.TASK,
          description: 'Here4 description and other text'
        },
        {
          task: 'JIRA',
          number: '10',
          type: TypeTask.SUBTASK,
          description: 'Here4 description and other text'
        },
        {
          task: 'JIRA',
          number: '11',
          type: TypeTask.STORY,
          description: 'Here4 description and other text'
        },
        {
          task: 'JIRA',
          number: '12',
          type: TypeTask.EPIC,
          description: 'Here4 description and other text'
        }
      ]
    },
    {
      title: 'Code review',
      list: [
        {
          task: 'JIRA',
          number: '5',
          type: TypeTask.TASK,
          description: 'Here description and other text'
        }
      ]
    },
    {
      title: 'in QA',
      list: [
        {
          task: 'JIRA',
          number: '6',
          type: TypeTask.BUGFIX,
          description: 'Here description and other text'
        },
        {
          task: 'JIRA',
          number: '33',
          type: TypeTask.BUGFIX,
          description: 'Here description and other text'
        }
      ]
    },
    {
      title: 'Done',
      list: [
        {
          task: 'JIRA',
          number: '7',
          type: TypeTask.TASK,
          description: 'Here description and other text'
        }
      ]
    }
  ];

  chooseColorTask(typeColor) {
    return CLASS_TASK_COLOR[typeColor];
  }
}
