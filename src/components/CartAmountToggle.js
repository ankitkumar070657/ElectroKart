import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="flex gap-4 ">
    
      <button onClick={() => setDecrease()}>
        <FaMinus />
      </button>
      {amount}
      <button onClick={() => setIncrease()}>
        <FaPlus />
      </button>
    </div>
  );
};

export default CartAmountToggle;
