const ProductReducer = (state, action) => {

    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
  
      case "SET_API_DATA":
        const featureData = action.payload.filter((curElem) => {
          return curElem.featured === true;
          
        });
  
        const shiptrue = action.payload.filter((curElem) => {
          return curElem.shipping === true;
          
        });
  
        return {
          ...state,
          isLoading: false,
          products: action.payload,
          sproducts: shiptrue,
          fproducts: featureData,
        };
  
      case "API_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
  
      case "SET_SINGLE_LOADING":
        return {
          ...state,
          isSingleLoading: true,
        };
  
      case "SET_PRODUCT_DETAILS":
        return {
          ...state,
          isSingleLoading: false,
          productdetails: action.payload,
          
        };
  
      case "PRODUCT_DETAILS_ERROR":
        return {
          ...state,
          isSingleLoading: false,
          isError: true,
        };
  
      default:
        return state;
    }
  };
  
  export default ProductReducer;