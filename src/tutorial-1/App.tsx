import { Paper, Divider, Button, List, Tabs, Tab } from '@mui/material';
import { Item } from './components/Item';
import { AddField } from './components/AddField';
import { useReducer, useState } from 'react';

type State = {
  id: number;
  text: string;
  complited: boolean;
};

type AddTaskAction = {
  type: 'ADD_TASK';
  payload: { text: string; complited: boolean };
};

type ComplitedTaskAction = {
  type: 'COMPLITED_TASK';
  payload: { index: number; complited: boolean };
};

const reducer = (state: Array<State>, action: AddTaskAction | ComplitedTaskAction) => {
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
      const newState = [...state];
      newState[action.payload.index].complited = action.payload.complited;
      return newState;
    default:
      return state;
  }
};

function App() {
  const [fields, setFields] = useState({ text: '', checked: false });
  const [state, dispatch] = useReducer(reducer, []);

  const addTask = () => {
    dispatch({
      type: 'ADD_TASK',
      payload: { text: fields.text, complited: fields.checked },
    });
    setFields({ text: '', checked: false });
  };
  const complitedTask = (index: number, isChecked: boolean) => {
    dispatch({
      type: 'COMPLITED_TASK',
      payload: { index, complited: isChecked },
    });
  };
  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField onClickAdd={addTask} fields={fields} setFields={setFields} />
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {state.map((item, index) => (
            <Item
              onClickCheckBox={complitedTask}
              key={item.id}
              id={index}
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
