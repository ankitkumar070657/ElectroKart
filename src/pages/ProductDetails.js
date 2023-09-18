import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "../context/productcontext";
import ImageDisplay from "../components/ImageDisplay";
import ImageSlider from "../components/ImageSlides";
import FormatPrice from "../components/FormatPrice";
import AddToCart from "../components/AddToCart";

import { FiShoppingCart } from "react-icons/fi";
import { FcAssistant } from "react-icons/fc";
import { BsCashCoin } from "react-icons/bs";
import Star from "../components/Stars";


const ProductDetails = () => {
  const API = process.env.REACT_APP_API
  const { isSingleLoading, getProductDetails, productdetails } =
    useProductContext();
  const { id } = useParams();

  let arr = productdetails;

  useEffect(() => {
    getProductDetails(`${API}?id=${id}`);
  
  }, []);

  if (isSingleLoading) {
    return (
      <div>
        {" "}
       
        <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto md:max-w-2xl lg:max-w-4xl mt-4">
        <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-400 rounded w-3/4"></div>
        <div className="space-y-2">
        <div className="h-4 bg-gray-400 rounded"></div>
        <div className="h-4 bg-gray-400 rounded w-5/6"></div>
        </div>
        </div>
        </div>
        </div>
        <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto md:max-w-2xl lg:max-w-4xl mt-4">
        <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-400 rounded w-3/4"></div>
        <div className="space-y-2">
        <div className="h-4 bg-gray-400 rounded"></div>
        <div className="h-4 bg-gray-400 rounded w-5/6"></div>
        </div>
        </div>
        </div>
        </div>
        <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto md:max-w-2xl lg:max-w-4xl mt-4">
        <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-400 rounded w-3/4"></div>
        <div className="space-y-2">
        <div className="h-4 bg-gray-400 rounded"></div>
        <div className="h-4 bg-gray-400 rounded w-5/6"></div>
        </div>
        </div>
        </div>
        </div>
        <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto md:max-w-2xl lg:max-w-4xl mt-4">
        <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-400 rounded w-3/4"></div>
        <div className="space-y-2">
        <div className="h-4 bg-gray-400 rounded"></div>
        <div className="h-4 bg-gray-400 rounded w-5/6"></div>
        </div>
        </div>
        </div>
        </div>
        <div className="hidden sm:block border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto md:max-w-2xl lg:max-w-4xl mt-4">
        <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-400 rounded w-3/4"></div>
        <div className="space-y-2">
        <div className="h-4 bg-gray-400 rounded"></div>
        <div className="h-4 bg-gray-400 rounded w-5/6"></div>
        </div>
        </div>
        </div>
        </div>
        <h1 className="font-bold my-4">Loading.....</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-[1200px] m-auto">
        <div className="hidden sm:block">
          {arr[0] ? <ImageDisplay imgs={arr[0] ? arr[0].image : null} /> : null}
        </div>
        <div className="block sm:hidden">
          {arr[0] ? <ImageSlider imgs={arr[0] ? arr[0].image : null} /> : null}
        </div>
        <div className=" lg:border-black border-2 max-w-[1000px] lg:mr-6 ml-auto  ">
          <div>
            {arr[0] ? (
              <Star
                stars={arr[0] ? arr[0].stars : null}
                reviews={arr[0] ? arr[0].reviews : null}
                name={arr[0] ? arr[0].name : null}
              />
            ) : null}
          </div>

          <div className="flex justify-between mx-4   m-auto">
            <h2>
              MRP:
              <del className="rounded-full bg-red-500">
                {arr[0] ? (
                  <FormatPrice price={arr[0] ? arr[0].price + 20000 : null} />
                ) : null}
              </del>
            </h2>

            <h2>
              Deal of the Day:
              <button className=" transition ease-in-out px-2 rounded-full delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                {arr[0] ? (
                  <FormatPrice price={arr[0] ? arr[0].price : null} />
                ) : null}
              </button>
            </h2>
          </div>
          <div className="flex  mx-4 ">
          <h4>Stock left: {arr[0] ? arr[0].stock : null}</h4>
          
          
          </div>
          <hr className="bg-green-200 h-[4px] my-3"/>
            {arr[0] ? (
              arr[0].stock ? (
                <AddToCart product={arr[0] ? productdetails[0] : null} />
              ) : null
            ) : null}
            <hr className="bg-green-200 h-[4px] my-3"/> 
          <div className="flex justify-between py-4 px-10 max-w-[400px] m-auto">
            <div>
              <FiShoppingCart size="3rem" color="#1DB6C6" /><p className="w-2"> Quick Delivery</p>
            </div>
            <div>
              <FcAssistant size="3rem" color="green" /> <p className="w-2">Customer Support</p>
            </div>
            <div>
              <BsCashCoin size="3rem" color="green" /><p className="w-2">Easy EMI</p> 
            </div>
          </div>
         

          <div className="px-4 border-collapse m-2 border-black border-2 rounded-lg">
            <p>Product Description:</p>
            
            <p> {arr[0] ? arr[0].description : null}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
