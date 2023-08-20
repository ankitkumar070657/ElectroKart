import React from 'react'
import { NavLink } from 'react-router-dom';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useProductContext } from '../context/productcontext';
 const Trending = () => {
    const { products}=useProductContext();
    
  return (
    <>
   
    <h1 className=' hidden sm:block items-center text-[#6173a1] font-bold text-2xl text-center py-2 mt-8'>Trending Products </h1>
    <div className= 'hidden sm:flex  max-w-[1500px] m-auto  py-2 px-2'>
    <Splide options={{ perPage: 3, gap:"0.5rem", garg:'free', arrow: false}}>
    {
        products.map((item)=>{
        return(
          <SplideSlide key={item.id} >
          <NavLink to={`/ProductDetails/${item.id}`}>
          <div className='rounded-3xl relative'>
          <div className='absolute w-full    bg-black/50 rounded-3xl text-white'>
          
          <p className='px-2 font-bold text-2xl'>{item.pid}</p>
          <p className='px-2'>{item.name}</p>
          
          </div>
          <button className='border-dotted border-1 rounded-full border-white text-white left-2 absolute px-2 bg-black/50 bottom-2' >
           Add To Cart
          </button>
          <img className=' h-[200px] w-full object-cover rounded-3xl cursor-pointer ease-out duration-300' 
          src={item.fimage}
          alt={item.title} />
          </div>
          </NavLink>
        </SplideSlide>
         
        )
      })
    }
    </Splide>
    </div>
    </>
  )
}

export default  Trending;