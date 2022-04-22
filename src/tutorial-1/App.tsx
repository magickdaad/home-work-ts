import { Paper, Divider, Button, List, Tabs, Tab } from '@mui/material';
import { Item } from './components/Item';
import { AddField } from './components/AddField';
import { useReducer, useState } from 'react';
import { AddTaskPayload, State, Actions } from './types';

const reducer = (state: Array<State>, action: Actions) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.payload.text,
          complited: action.payload.complited,
        },
      ];

    case 'COMPLITED_TASK':
      return state.map((task) =>
        task.id === action.payload ? { ...task, complited: !task.complited } : task,
      );

    case 'REMOVE_TASK':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, []);

  const addTask = (data: AddTaskPayload) => {
    dispatch({
      type: 'ADD_TASK',
      payload: data,
    });
  };
  const complitedTask = (index: number) => {
    dispatch({
      type: 'COMPLITED_TASK',
      payload: index,
    });
  };

  const removeTask = (index: number) => {
    if (window.confirm(`Удалить задачу № ${index}`)) {
      dispatch({
        type: 'REMOVE_TASK',
        payload: index,
      });
    }
  };
  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField onClickAdd={addTask} />
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {state.map((item) => (
            <Item
              onClickCheckBox={complitedTask}
              onRemove={removeTask}
              key={item.id}
              id={item.id}
              text={item.text}
              isComplited={item.complited}
            />
          ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button>Отметить всё</Button>
          <Button>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
