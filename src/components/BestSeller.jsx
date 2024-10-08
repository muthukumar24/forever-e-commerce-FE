import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { BarLoader } from 'react-spinners';

const BestSeller = () => {

    const {products, loading} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0,5));
        console.log(bestProduct)
    }, [loading])
    
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Discover the most-loved products from our eCommerce store! Our Bestsellers 
            feature top-rated items for Men, Women, and Kids. Whether you're looking for stylish Top Wear, 
            comfortable Bottom Wear, or cozy Winter Wear, these popular picks are a must-have.
            </p>
        </div>

        {loading ? ( <div className='flex justify-center'><h5 className='mt-10'><BarLoader /></h5></div> ) : (
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {bestSeller.map((item, index) =>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))}
            </div>
        )}
        

    </div>
  )
}

export default BestSeller