import React, { useState } from 'react';

export const QuantityInput = ({ value, min, max, onChange }) => {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="quantity-input">
      <button
        className="quantity-button"
        onClick={handleDecrease}
        disabled={value === min}
      >
        -
      </button>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="quantity-value"
      />
      <button
        className="quantity-button"
        onClick={handleIncrease}
        disabled={value === max}
      >
        +
      </button>
    </div>
  );
};
