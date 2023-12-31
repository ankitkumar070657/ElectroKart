import { useCartContext } from "../context/cartcontext";
import axios from "axios";
import Cartitem from "../components/Cartitems";
import { NavLink } from "react-router-dom";
import FormatPrice from "../components/FormatPrice";
import emptyCartimg from "../assets/emptyCart.jpg";
import Brands from "../components/Brands";
import { useAuth0 } from "@auth0/auth0-react";
const Cart = () => {
  const { loginWithRedirect, logout,isAuthenticated, user  } = useAuth0();
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  
  if (cart.length === 0) {
    return (
      <div className=" mx-auto mt-[5rem]  sm:h-[400px] md:h-[500px] lg:h-[600px] ">
        <img
          className="m-auto  sm:h-[200px] lg:h-[400px] "
          src={emptyCartimg}
          alt="emptyCart image"
        />
        <h3 className="my-12 font-bold text-2xl">NO ITEMS IN THE CART</h3>
      </div>
    );
  }
  
  const checkoutHandler = async (amount) => {
    
    const { data: { key } } = await axios.get(process.env.REACT_APP_KEY)
    const { data: { order } } = await axios.post(process.env.REACT_APP_CHECKOUT, {amount})

    const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "ElectroKart",
        description: "Tutorial of RazorPay",
        image: "https://i.pinimg.com/originals/a8/d8/74/a8d87426b58493d790150b46707a65e6.jpg",
        order_id: order.id,
        callback_url: process.env.REACT_APP_VERIFI,
        prefill: {
            name: "",
            email: "gaurav.kumar@example.com",
            contact: "9999999999"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
}



  

  return (
    <>
    
      <div className="max-w-[1520px] m-auto ">
        <table className="table-fixed w-full border-2 ">
          <thead>
            <tr>
              <th>
                <p>Item</p>
              </th>
              <th>
                {" "}
                <p className="hidden sm:block ">Price</p>
              </th>
              <th>
                <p className=" ">Quantity</p>
              </th>
              <th>
                {" "}
                <p className="hidden sm:block ">Subtotal</p>
              </th>
              <th>
                <p>Remove</p>
              </th>
            </tr>
          </thead>
        </table>
      </div>

      {cart.map((curElem) => {
        return <Cartitem key={curElem.id} {...curElem} />;
      })}
      <div className="flex max-w-[1500px] m-auto items-end">
        <div className=" flex justify-end max-w-[400px] ml-auto shadow-lg p-4 flex-col">
          <table className="border-separate border-spacing-1 rounded-l border border-slate-500 bg-[#475372]">
            <thead>
              <tr>
                <td className="border border-slate-600 bg-slate-200 font-bold m-4 px-2">
                  {" "}
                  <p>
                    subtotal: <FormatPrice price={total_price} />
                  </p>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-700 bg-slate-200 font-bold m-4 px-2">
                  {" "}
                  <p>
                    shipping fee:
                    <FormatPrice price={shipping_fee} />
                  </p>
                </td>
              </tr>
              <tr>
              <td className="border border-slate-700 bg-slate-200 font-bold m-4 px-2">
                {" "}
                <p>
                   Discount:
                  <FormatPrice price={shipping_fee} />
                </p>
              </td>
            </tr>
              <tr>
                <td className="border border-slate-700 bg-slate-200 font-bold m-4 text-2xl px-2">
                  <h4>
                    order total:{" "}
                    <FormatPrice price={total_price} />
                  </h4>
                </td>
              </tr>

              
            </tbody>
          </table>
        
        <div className="flex flex-row gap-2 my-3 justify-end">
        {isAuthenticated ?(
          <button className="flex bg-green-500 text-white    items-center p-2 rounded-full hover:scale-105 duration-300"  onClick={() => checkoutHandler(total_price) } >
          <p className="font-bold text-grey-500 ">Pay Now</p>
          </button>):(<button  className="flex bg-green-500 text-white items-center p-2 rounded-full hover:scale-105 duration-300 "
          onClick={() => loginWithRedirect()}><p className="font-bold text-grey-500 ">Log In & Pay</p></button>
            )
        }

        <button className=" flex bg-red-500 text-white    items-center p-2 rounded-full hover:scale-105 duration-300" onClick={clearCart}><p className="font-bold text-grey-500">clear cart</p></button>
        </div>
        <div className="flex justify-end px-2">
        <NavLink to="/Products"><button className="flex bg-[#6173a1] text-white    items-center p-2 rounded-full hover:scale-105 duration-300"><p className="font-bold text-grey"> continue Shopping</p></button></NavLink>
        </div>
        </div>
        </div>
        <Brands />
    </>
  );
};

export default Cart;
