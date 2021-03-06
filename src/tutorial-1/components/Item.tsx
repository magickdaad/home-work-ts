import React from 'react';
import { IconButton, Checkbox, ListItem, Typography } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type ItemProps = {
  id: number;
  text: string;
  isComplited: boolean;
  onClickCheckBox: (index: number) => void;
  onRemove: (index: number) => void;
};

export const Item: React.FC<ItemProps> = ({ id, text, isComplited, onClickCheckBox, onRemove }) => {
  return (
    <ListItem>
      <div className="d-flex item">
        <Checkbox
          checked={isComplited}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          onChange={() => {
            onClickCheckBox(id);
          }}
        />
        <Typography className="item-text">{text}</Typography>
        <div className="item-buttons d-flex">
          <IconButton>
            <EditIcon style={{ fontSize: 20 }} />
          </IconButton>
          <IconButton onClick={() => onRemove(id)}>
            <DeleteOutlineIcon style={{ fontSize: 20 }} />
          </IconButton>
        </div>
      </div>
    </ListItem>
  );
};
