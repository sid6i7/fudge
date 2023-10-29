import React from 'react';
import { filters } from '../data/filters';
import { DropDownFilter } from './DropDownFilter';

export const ShopFilter = (props) => {
  return (
    <div id='shop-filter'>
      <span id='shop-filter--title'>
        Filters
      </span>
      {filters.map((filter) => {
        return <div
        className='filter'
        key={filter.id}
        >
          <DropDownFilter
          allFilters = {props.allFilters}
          filter={filter}
          onChange = {props.onChange}
          />
          </div>
      })}
    </div>
  )
}
