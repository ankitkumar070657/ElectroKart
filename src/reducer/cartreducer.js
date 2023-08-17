const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, amount, product } = action.payload;
  
      // tackle the existing product
  
      let existingProduct = state.cart.find(
        (curItem) => curItem.id === id + color
      );
  
      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === id + color) {
            let newAmount = curElem.amount + amount;
  
            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            }
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return curElem;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };
  
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }
    }
  
    // to set the increment and decrement
    if (action.type === "SET_DECREMENT") {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let decAmount = curElem.amount - 1;
  
          if (decAmount <= 1) {
            decAmount = 1;
          }
  
          return {
            ...curElem,
            amount: decAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProduct };
    }
  
    if (action.type === "SET_INCREMENT") {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let incAmount = curElem.amount + 1;
  
          if (incAmount >= curElem.max) {
            incAmount = curElem.max;
          }
  
          return {
            ...curElem,
            amount: incAmount,
          };
        } else {
          return curElem;
        }
      });
      return { ...state, cart: updatedProduct };
    }
  
    if (action.type === "REMOVE_ITEM") {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
  
    // to empty or to clear to cart
    if (action.type === "CLEAR_CART") {
      return {
        ...state,
        cart: [],
      };
    }
  
    // CART_ITEM_PRICE_TOTAL
    if (action.type === "CART_ITEM_PRICE_TOTAL") {
      let { total_item, total_price } = state.cart.reduce(
        (accum, curElem) => {
          let { price, amount } = curElem;
  
          accum.total_item += amount;
          accum.total_price += price * amount;
  
          return accum;
        },
        {
          total_item: 0,
          total_price: 0,
        }
      );
      return {
        ...state,
        total_item,
        total_price,
      };
    }
  
    return state;
  };
  
  export default cartReducer;
  