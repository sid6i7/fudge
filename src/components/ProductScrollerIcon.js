import React from 'react';

export const ProductScrollerIcon = (props) => {
  return (
    <div className="product-scroller-container">
      <input
        type="image"
        src={props.image}
        name="changeProductImage"
        className="product-scroller-img"
        onClick={props.onClick}
      />
    </div>
  );
};
