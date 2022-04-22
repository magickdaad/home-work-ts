export type State = {
  id: number;
  text: string;
  complited: boolean;
};

export type AddTaskPayload = {
  text: string;
  complited: boolean;
};

export type AddTaskAction = {
  type: 'ADD_TASK';
  payload: AddTaskPayload;
};

export type ComplitedTaskAction = {
  type: 'COMPLITED_TASK';
  payload: number;
};

export type RemoveTaskAction = {
  type: 'REMOVE_TASK';
  payload: number;
};

export type Actions = RemoveTaskAction | AddTaskAction | ComplitedTaskAction;
