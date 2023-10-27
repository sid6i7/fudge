import React from 'react'
import { FeaturedProductCard } from './FeaturedProductCard'

export const ShopCategory = (props) => {
    const category = props.category;
  return (
    <div className=''>
        <h1 className='shop-category-title'>{category.title}</h1>
        <div className='featured-products'>
            {category.products.map((product) => {
                return <FeaturedProductCard
                product={product}
                />
            })}
        </div>
    </div>
  )
}
