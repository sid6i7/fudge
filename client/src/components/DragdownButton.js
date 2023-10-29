import React, { useState } from "react";

export const DropdownButton = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <span className="dropdown-button--title"> {title} </span>
        <span className="dropdown-button--arrow"> {isOpen ? "▲" : "▼"} </span>
      </button>
      {isOpen && <div className="dropdown-content">{content}</div>}
      <hr/>
    </div>
  );
};
