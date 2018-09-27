import {TypeTask, STATUS_TASK} from './type-task.model';

export const dashboardList = [
  {
    title: 'To do',
    list: [
      {
        task: 'JIRA',
        number: '1',
        type: TypeTask.TASK,
        description: 'Here description and otherljs',
        status: STATUS_TASK.TO_DO
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
        description: 'Here2 description and other text',
        status: STATUS_TASK.IN_PROGRESS
      },
      {
        task: 'JIRA',
        number: '3',
        type: TypeTask.TASK,
        description: 'Here 3description fkdsj other text',
        status: STATUS_TASK.IN_PROGRESS
      },
      {
        task: 'JIRA',
        number: '8',
        type: TypeTask.BUGFIX,
        description: 'Here4 description and other text',
        status: STATUS_TASK.IN_PROGRESS
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
        description: 'Here description and other text',
        status: STATUS_TASK.CODEREVIEW
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
        description: 'Here description and other text',
        status: STATUS_TASK.IN_QA
      },
      {
        task: 'JIRA',
        number: '33',
        type: TypeTask.BUGFIX,
        description: 'Here description and other text',
        status: STATUS_TASK.IN_QA
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
        description: 'Here description and other text',
        status: STATUS_TASK.DONE
      }
    ]
  }
];
