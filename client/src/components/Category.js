import React from 'react'
import { Link } from 'react-router-dom'

export const Category = (props) => {
  return (
    <Link to="/shop" style={{textDecoration: 'none', color: 'initial'}}>
    <div className='category'>
        <img src={props.image} className='category--img'/>
        <span>{props.name}</span>
    </div>
    </Link>
  )
}
