import React from 'react'

const ProductItem = ({item}) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.default_image_urls.main_image_url} alt='' />
                </div>
                <div className='card-back'>
                <h1>Product full Name</h1>
                <ul>
                    <li>
                        <strong>{item.full_name}</strong>
                    </li>
                </ul>
                </div>
            </div>
           {item.name} 
        </div>
    )
}

export default ProductItem
