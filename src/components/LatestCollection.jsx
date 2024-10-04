import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { BarLoader, ClipLoader } from 'react-spinners';

const LatestCollection = () => {

    const { products, loading } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0,10));
    }, [loading])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
             Check out our fresh collection at our eCommerce store, designed to suit Men, Women,
             and Kids alike. From trendy Top Wear and versatile Bottom Wear to warm Winter Wear, 
             we have got the perfect pieces for your wardrobe.
            </p>
        </div>

        {/* Rendering Products */}
        {loading ? ( <div className='flex justify-center'><h5 className='text-center mt-10'><BarLoader /></h5></div>) : (
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.map((item, index) => (
                    <ProductItem 
                        key={index} 
                        id={item._id} 
                        image={item.image} 
                        name={item.name} 
                        price={item.price} 
                    />
                ))}
            </div>
        )}
    </div>
  )
}

export default LatestCollection