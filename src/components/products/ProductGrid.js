import React from 'react'
import ProductItem from './ProductItem'
import Spinner from '../ui/Spinner'

const ProductGrid = ({ items, isLoading}) => {
    return isLoading ? (<Spinner />) : (<section className='cards'>
        {(items || []).map((item) => (
            <ProductItem key={item.product_code} item={item} />
        ))}
    </section>)
}

export default ProductGrid
