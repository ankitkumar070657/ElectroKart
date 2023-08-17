
import React from "react";
import FormatPrice from "../components/FormatPrice";
import CartAmountToggle from "../components/CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartcontext";

export const Cartitem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrement } = useCartContext();
 

  
  
    return (
  <div className="max-w-[1500px] m-auto ">
          <table className="  table-fixed w-full border-2 text-center whitespace-nowrap ">
          <tbody>
          <tr>
          <td>
           <div className="flex "> <figure >
            <img  className="max-h-[100px] max-w-[100px] rounded" src={image} alt={id} />
            <p>{name}</p>
            </figure>
            </div>
            </td>
             
              
          
        {/* price   */}
        <td>
          <p className="hidden sm:block text-center ">
            <FormatPrice price={price} />
          </p>
          </td>
  
        {/* Quantity  */}
        <td>
        <div className=" sm:px-[1rem] md:px-[2rem] lg:px-[5rem] ">
        <CartAmountToggle 
          amount={amount}
          setDecrease={() => setDecrease(id)}
          setIncrease={() => setIncrement(id)}
        /></div></td>
  
        {/* //Subtotal */}
        <td>
          <p className="hidden sm:block text-center  " >
            <FormatPrice price={price * amount} />
          </p></td>
          <td  className="">
          <div className="px-8 md:px-[4rem] lg:px-[8rem]">
          <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
          </div></td>
          </tr>
          </tbody>
          </table>
      </div>
    );
  };
  
export default Cartitem;