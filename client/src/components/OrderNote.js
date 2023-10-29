import React, { useState } from 'react';
import editIcon from '../images/edit_icon.png';
import { Button, ThemeProvider } from '@mui/material';
import {theme} from "../themes/Buttons";

export const OrderNote = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [note, setNote] = useState('');

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <div >
      {isEditing ? (
        <div id='order-note--editing'>
          <h2>Order Note</h2>
          <textarea
            value={note}
            onChange={handleInputChange}
            rows={4}
            cols={50}
            placeholder="Enter your order note here..."
          />
          <ThemeProvider theme={theme}>
            <Button variant='contained' color='black' id='order-note-editing--btn'
            onClick={() => setIsEditing(false)}
            >
              Submit
            </Button>
          </ThemeProvider>
        </div>
      ) : 
        <div id='order-note--not-editing'>
          <div id='order-note'>
          <h2>Add order note</h2>
          <img src={editIcon} id='order-note-img' onClick={handleClick} />
          </div>
            {note}
        </div>
      }
    </div>
  );
};
