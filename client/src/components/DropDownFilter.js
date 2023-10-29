import React, { useState } from "react";

export const DropDownFilter = (props) => {
  const allFilters = props.allFilters;
  const filter = props.filter;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterSelection = (filterName) => {
    const newFilters = [...allFilters, filterName];
    props.onChange(newFilters);
    console.log(newFilters);
  };

  const handleFilterDeSelection = (filterName) => {
    const newFilters = allFilters.filter((filter) => {
      if(filter !== filterName) return true;
      else return false;
    })
    props.onChange(newFilters);
    console.log(newFilters);
  }; 

  return (
    <div className="dropdown-filter">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span className="dropdown-filter--name">{filter.name}</span>
        <span className="dropdown-filter--arrow">
          {isOpen ? String.fromCharCode(0x2b06) : String.fromCharCode(0x2b07)}
        </span>
        <i className={`arrow ${isOpen ? "up" : "down"}`} />
      </div>
      {isOpen && (
        <ul className="filter-list">
          {filter.filters.map((filterItem) => (
            <li key={filterItem.id}>
              <label>
                <input
                  type="checkbox"
                  checked={allFilters.includes(filterItem.name)}
                  onChange={
                    allFilters.includes(filterItem.name)
                    ? () => handleFilterDeSelection(filterItem.name)
                    : () => handleFilterSelection(filterItem.name)
                  }
                />
                {filterItem.name}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
