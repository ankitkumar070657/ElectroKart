
import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../components/FormatPrice";

const Card = (curEle) => {
  const { id, name, fimage, price, category } = curEle;
  return (
    <NavLink to={`/ProductDetails/${id}`}>
    
   

    <div className='flex flex-wrap hover:scale-105 duration-300 sm:w-4/5'>
    <div className='border-2 '>
     <figure>
     <img className=" w-full h-[200px]  rounded-lg "  src={fimage} alt={name} />
     <div className="flex flex-wrap justify-between">
          
          <figcaption className="col-spsan-2 font-bold "><h5>{name}</h5></figcaption>
          <figcaption className="transition ease-in-out delay-150 rounded-full    font-bold bg-yellow-300  hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300"> {<FormatPrice price={price}/>}</figcaption>
          </div>
          </figure>
     </div>
     </div>

    </NavLink>
  );
};


export default Card;