import React from "react";
import FiltersSection from "../components/FiltersSection";
import FilterView from "../components/FilterView";
import { useFilterContext } from "../context/filtercontext";
import TopFilterSection from "../components/TopFilterSection";
import Brands from '../components/Brands';
const Products = () => {
  const { filter_products } = useFilterContext();

  return (
    <>
    <FiltersSection />
      <div className="flex">
      <TopFilterSection />
      </div>
      <FilterView products={filter_products} />
      <div  className="mt-[10rem]"><Brands/></div>
      
    </>
  );
};
export default Products;
