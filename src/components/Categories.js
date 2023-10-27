import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { categories } from '../data/categories'
import { Category } from './Category'

export const Categories = () => {
  return (
    <div id='container-categories'>
        <h1 id='container-categories--title'>Browse All Categories</h1>
        <span id='container-categories--content'>
            Explore our collections that will surely bring you the ultimate
            <br/>
            love and happiness.
        </span>
        <div id='categories'>
            {categories.map((category) => <Category image={category.image} name={category.name}/>)}
        </div>
    </div>
  )
}
