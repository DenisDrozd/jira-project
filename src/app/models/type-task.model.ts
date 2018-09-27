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
