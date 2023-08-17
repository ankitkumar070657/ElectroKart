import { NavLink } from "react-router-dom";
import React,{useState} from "react";
import { useFilterContext } from "../context/filtercontext";
import FormatPrice from "../components/FormatPrice";
import {LuSettings2 } from "react-icons/lu";

import {
  AiOutlineClose,
} from "react-icons/ai";

const FiltersSection = () => {
  const [SideNav, setSideNav] = useState(false);
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
  };

  // we need to have the individual data of each in an array format
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (<>

    

    {SideNav ? (
      <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0 " onClick={()=>setSideNav(!SideNav)}></div>
    ) : (
      ""
    )}
    <div
      className={
        SideNav
          ? "fixed top-0 left-0 w-[200px] h-screen bg-white z-10 duration-200  "
          : "fixed top-0 left-[-100%] w-[200px]  h-screen bg-white z-10 duration-200"
      }
    >
      <AiOutlineClose
        onClick={() => setSideNav(!SideNav)}
        size={25}
        className=" absolute right-4 top-4 cursor-pointer"
      />
      <h2 className="text-2xl p-4 "><span className="text-[#6172a1] font-bold">Filters</span></h2>
      <nav>
      <ul className="flex flex-col p-4 text-gray-900">
      
      <NavLink to="#" onClick={() => setSideNav(!SideNav)}>
      <li className="text-xl py-4 flex  rounded-full px-2">
      
      
      <div className="flex-col">
      <h3 className=" border-4 border-sky-500  rounded-full font-bold">Category</h3>
      <div className="flex-col ">
        {categoryData.map((curElem, index) => {
          return (
            <div  key={index} className="my-2 hover:bg-blue-100 border-4 border-red cursor-pointer rounded-lg">
            <button
             
              type="button"
              name="category"
              value={curElem}
              className={curElem === category ? "active" : ""}
              onClick={updateFilterValue}>
              {curElem}
            </button>
            </div> );
        })}
      </div>
    </div>

      </li>
      </NavLink>

      <NavLink to="#" className="lg:hidden" onClick={() => setSideNav(!SideNav)}>
      <li className="text-xl py-4 flex rounded-full px-2">
      
      <div className="filter_price">
      <h3 className=" border-4 border-sky-500 rounded-full font-bold">Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
        className="cursor-painter"
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      </li>
      </NavLink>

      
      <NavLink to="#" onClick={() => setSideNav(!SideNav)}>
      <li className="text-xl py-4 flex  hover:bg-blue-100 rounded-full px-2">
      <div className="filter-clear">
        <button className="btn" onClick={clearFilters}>
        <h3 className=" border-4 border-sky-500 rounded-full font-bold px-2">  Clear Filters</h3>
        </button>
      </div>
      </li>
      </NavLink>

      

      </ul>
      </nav>
      </div>


<div className="flex justify-between border-2 mx-2">


<div onClick={() => setSideNav(!SideNav)} className="cursor-pointer  m-2  ">
    <LuSettings2 size={40} />
  </div>

  <div className="flex">
      <div className="border-2 rounded-full my-2 p-2">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            className="md:w-[40vw] lg:w-[50vw]"
            onChange={updateFilterValue}
          />
        </form>
      </div> </div>



      <div className="hidden lg:block">
      <h3 className=" rounded-full font-bold">Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
        className="cursor-painter"
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

     
      
      
      <div className="flex-col">
      <p className="font-bold mr-3">Company</p>
      <form action="#">
      <select
            name="company"
            id="company"
            className=" mt-2  mr-3  "
            onChange={updateFilterValue}>
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
          </form>
          </div>
      </div>
     

    

     
   

    </>
  );
};



export default FiltersSection;
