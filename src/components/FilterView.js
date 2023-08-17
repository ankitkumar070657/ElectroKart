import React from "react";

import Card from "./Card";

const FilterView = ({ products }) => {
  return (
    <div className="max-w-[1520px] m-auto">
      <div className=" grid grid-cols-2 gap-1 mx-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((curElem) => {
          return <Card key={curElem.id} {...curElem} />;
        })}
      </div>
      </div>
  );
};



export default FilterView;
