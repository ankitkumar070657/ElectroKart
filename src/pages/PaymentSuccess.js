
import React, { useEffect } from 'react'
import { useSearchParams } from "react-router-dom"
import { useCartContext } from "../context/cartcontext";
const PaymentSuccess = () => {
    const {  clearCart } = useCartContext();
    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")

    useEffect(() => {
      clearCart();
      }, []);

    return (
       
           <div className='my-[20vh] sm:my-[30vh]'>

                <span  className='mt-2 border 2px bg-green-400  p-1'> Order Successfull</span>
                <p  className='mb-4'></p>
              <span  className='mt-2 border 2px bg-blue-400  p-1'>  Reference No: {referenceNum}</span> <p className='mb-4'></p>
              <a href='https://electro-kart.vercel.app/' className=' border 2px bg-sky-400 rounded-full p-1'>  Back to Store</a>
              
              </div>
           
       
    )
}

export default PaymentSuccess