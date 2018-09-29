export enum TypeTask {
  TASK,
  BUGFIX,
  EPIC,
  STORY,
  SUBTASK
};

export const CLASS_TASK_COLOR = [
  'b-task',
  'b-bugfix',
  'b-epic',
  'b-story',
  'b-subtask'
];

export const TYPE_TASK_ARRAY = [
  {
    title: 'Task',
    type: TypeTask.TASK
  },
  {
    title: 'Bugfix',
    type: TypeTask.BUGFIX
  },
  {
    title: 'Epic',
    type: TypeTask.EPIC
  },
  {
    title: 'Story',
    type: TypeTask.STORY
  },
  {
    title: 'SubTask',
    type: TypeTask.SUBTASK
  },
];

export enum STATUS_TASK {
  TO_DO,
  IN_PROGRESS,
  CODEREVIEW,
  IN_QA,
  DONE
}

export const CLASS_STATUS_COLOR = [
  'status-to-to',
  'status-in-progress',
  'status-codereview',
  'status-in-qa',
  'status-done'
];

export const STATUS_NAME = [
  'To do',
  'In progress',
  'Codereview',
  'In QA',
  'Done'
];
