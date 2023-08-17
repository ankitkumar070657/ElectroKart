import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight, BsColumnsGap } from 'react-icons/bs';
  const ImageSlider = ({ imgs = [{ url: "" }] }) => {
    const[currentIndex, setCurrentIndex]=useState(0)
   const [sliders]=[imgs]

   

    const prevSlider=()=>{
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? sliders.length -1 : currentIndex -1 
    setCurrentIndex(newIndex)
}

const nextSlider=()=>{
    const isLastSlide = currentIndex === sliders.length -1
    const newIndex = isLastSlide ? 0: currentIndex + 1 
    setCurrentIndex(newIndex)
}



  return (
    <div className=' h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full py-0 px-4 m-auto relative  group '>
    <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 ' 
   
    style={{backgroundImage:`url(${sliders[currentIndex].url})`}}
    ></div>
    <div className=' group-hover:block absolute top-[40%] -translate-x-5 translate-y-[40%] font-bold left-5 text-sm rounded-full p-2 bg-gray-100 text-black coursor-pointer'>
    <BsChevronCompactLeft onClick={prevSlider}/>
    </div>
    <div className=' group-hover:block absolute top-[40%] translate-x-5 translate-y-[40%] font-bold right-5 text-sm rounded-full p-2 bg-gray-100 text-black coursor-pointer'>
    <BsChevronCompactRight onClick={nextSlider}/>
    </div>
    </div>
  )
}
export default ImageSlider;