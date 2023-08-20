import { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cartcontext";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, colors, stock } = product;

  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div>
      <div className="flex justify-between mx-4">
        
      

      {/* add to cart  */}
      <div className=" "><p>Quantity:</p>
      <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} /></div>
      <div className="flex ">
      <NavLink to="/Cart" onClick={() => addToCart(id, color, amount, product)}>
      <button className="transition ease-in-out delay-150 rounded-full  py-2 px-2   font-bold bg-yellow-300  hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300 ">
       Add To Cart
       </button>
      </NavLink>
      </div>
      </div>
      
    </div>
  );
};

export default AddToCart;
