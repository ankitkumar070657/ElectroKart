import React from 'react'
import { useProductContext } from '../context/productcontext';
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';
import FormatPrice from './FormatPrice';

const Cards = () => {
    const { products } = useProductContext();
   
  return (
    <div className='max-w-[1520px] m-auto px-4  py-2'>
    <h1 className='text-[#6173a1] font-bold text-2xl text-center py-2'>
   Deal OF The Day !!
    </h1>
    
    <div className='grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
    {
        products.map((item)=>(
          
            <div key={item.id} className='border-none hover:scale-105 duration-300'>
            <NavLink to={`/ProductDetails/${item.id}`}>
            <img src={item.fimage}
            alt={item.name}
            className='w-full h-[200px] object-cover rounded-lg'
            />
            <div className='flex justify-between py-2 px-4'>
            <p className='font-bold'>{item.name}</p>
            
            <p className='bg-[#6173a1] h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold'><FormatPrice price={item.price} /></p>
            </div>
            <div className='pl-2 py-2 -mt-7'>
            <p className='flex item-center text-indigo-600 pl-2'>View More<ArrowSmallRightIcon className='w-5 pl-2'/></p>
            </div>
            </NavLink>
            </div>
        ))
    }
    </div>
    </div>
  )
}
export default Cards;