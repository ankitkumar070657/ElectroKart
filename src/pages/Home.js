import React from 'react'
import Featured from '../components/Featured'
import Trending from '../components/Trending'
import Cards from '../components/Cards'
import { useProductContext } from '../context/productcontext'

import loadingImg from '../assets/loading.gif'
export default function Home() {

  const {isLoading}=useProductContext();
  if (isLoading) {
    return <div> <img className=" m-auto" src={loadingImg} alt="Loading..." /><h1 className='font-bold text-2xl my-12'>Fetching Data From API.....</h1></div>;
  }
  return (
    <div>
    <div className=''>
    <Featured/>
    </div>
    <Trending/>
    <Cards/>
    </div>
  )
}
