import React from "react";
import { useFilterContext } from "../context/filtercontext";

const TopFilterSection = () => {
  const { filter_products, sorting } = useFilterContext();
  return (
    <div className=" max-w-[1520px] m-auto flex justify-between gap-20 mx-4 my-2 lg:flex lg:ml-[70%]">
      
      {/* 1nd column  */}
      <div className=" ">
        <p>{`${filter_products.length} Product Available`}</p>
      </div>
      

      {/* 2rd column  */}
      <div className="">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onChange={sorting}>
            <option value="lowest">Price(lowest)</option>
           
            <option value="highest">Price(highest)</option>
           
            <option value="a-z">Filter(a-z)</option>
           
            <option value="z-a">Filter(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};



export default TopFilterSection;
