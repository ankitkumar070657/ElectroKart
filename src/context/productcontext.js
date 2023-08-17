import React,  {createContext, useContext, useEffect, useReducer} from 'react'
import axios from 'axios'
import reducer  from '../reducer/productreducer'

const AppContext= createContext();
const API=process.env.REACT_APP_API


const initialState={
  isLoading: false,
  isError: false,
  products:[],
  fproducts:[],
  sproducts:[],
  productdetails:{},
  
  
  
};

const AppProvider =({children})=>{
  const [state, dispatch]= useReducer(reducer, initialState)
  
  const getProdusts= async(url)=>{
    dispatch( {type: "SET_LOADING" })
    try {
      const res= await axios.get(url)
      const products= await res.data
      // console.log(products)
      dispatch({ type: "SET_API_DATA", payload:products })
      
    }
catch (error) 
{dispatch( {type: "API_ERROR" })
}
}

  //productdetails
  const getProductDetails =async(url)=>{
    try{
       dispatch({type:"SET_SINGLE_LOADING"})
      const res= await axios.get(url)
      const productDetails=await res.data
       dispatch({type:"SET_PRODUCT_DETAILS", payload:productDetails})
  }
  catch{
    dispatch({type: "PRODUCT_DETAILS_ERROR"})
  }
}
useEffect(()=>{getProdusts(API)},[])
  
  return (
    <AppContext.Provider value={{...state, getProductDetails }}>
    {children}
   </AppContext.Provider>
  );
};
const useProductContext=()=>
{return useContext(AppContext)}

export { AppProvider, AppContext, useProductContext };
