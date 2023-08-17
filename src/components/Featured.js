import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel'
const images = [
  { url: "https://res.cloudinary.com/dklkcesii/image/upload/v1692270612/ElectroKart/hhpzptwfuumsnuvldee8.jpg" },
  { url: "https://res.cloudinary.com/dklkcesii/image/upload/v1692270612/ElectroKart/ppww6f3c9rb9hctjjbic.jpg" },
  { url: "https://res.cloudinary.com/dklkcesii/image/upload/v1692270612/ElectroKart/viijr07jizxsh93ihkaz.jpg"},
  { url: "https://res.cloudinary.com/dklkcesii/image/upload/v1692270612/ElectroKart/pgszjxidippy35kpl42h.jpg"},
  { url: "https://res.cloudinary.com/dklkcesii/image/upload/v1692270612/ElectroKart/dmgfaxthlehlds49anjy.jpg" },
    
  ];
const Featured = () => {
  return (
    <div className=' max-w-[1520px]  m-auto  md:max-h-[50vh]  lg:max-h-[63vh]  '>
    <div className=''>
    <Carousel infiniteLoop autoPlay className=''>
    <div className=''>
    <img src={images[0].url} alt="img" className=' object-cover md:max-h-[40vh]   lg:max-h-[55vh] ' />
    </div>
    <div className=''>
    <img src={images[1].url} alt="img" className='object-cover md:max-h-[40vh]    lg:max-h-[55vh]' />
    </div>
    <div className=''>
    <img src={images[2].url} alt="img" className='object-cover  md:max-h-[40vh]  lg:max-h-[55vh]' />
    </div>
    <div className=''>
    <img src={images[3].url} alt="img" className='object-cover md:max-h-[40vh]  lg:max-h-[55vh]' />
    </div>
    <div className=''>
    <img src={images[4].url} alt="img" className='object-cover  md:max-h-[40vh]  lg:max-h-[55vh]' />
    </div>
    
    </Carousel>
    </div>
    </div>
  )
}
export default  Featured;