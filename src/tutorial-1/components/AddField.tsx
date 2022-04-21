import React from 'react';
import { TextField, Button, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type AddFildProps = {
  onClickAdd: () => void;
  fields: { text: string; checked: boolean };
  setFields: Function;
};

export const AddField: React.FC<AddFildProps> = ({ onClickAdd, fields, setFields }) => {
  return (
    <div className="field">
      <Checkbox
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        checked={fields.checked}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          setFields({ ...fields, checked: evt.target.checked })
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
      <Button onClick={onClickAdd}>
        <AddIcon />
      </Button>
    </div>
  );
};
