import React, { useState } from 'react';
import { TextField, Button, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {AddTaskPayload} from '../types'

type AddFildProps = {
  onClickAdd: (fields: AddTaskPayload) => void;
};

export const AddField: React.FC<AddFildProps> = ({ onClickAdd }) => {
  const [fields, setFields] = useState({ text: '', complited: false });
  const onAdd = () => {
    onClickAdd(fields);
    setFields({ text: '', complited: false });
  };

  return (
    <div className="field">
      <Checkbox
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        checked={fields.complited}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          setFields({ ...fields, complited: evt.target.checked })
        }
      />
      <TextField
        placeholder="Введите текст задачи..."
        variant="standard"
        fullWidth
        value={fields.text}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          setFields({ ...fields, text: evt.target.value })
        }
      />
      <Button onClick={onAdd}>
        <AddIcon />
      </Button>
    </div>
  );
};
