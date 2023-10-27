import React from 'react'
import editIcon from '../images/edit_icon.png';

export const OrderNote = () => {
  return (
    <div id='order-note'>
        <h2>
            Add order note
        </h2>
        {/* //TODO: add onClick */}
        <img src={editIcon} id='order-note-img' /> 
    </div>
  )
}
