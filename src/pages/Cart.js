import { useCartContext } from "../context/cartcontext";
import axios from "axios";
import Cartitem from "../components/Cartitems";
import { NavLink } from "react-router-dom";
import FormatPrice from "../components/FormatPrice";
import emptyCartimg from "../assets/emptyCart.jpg";
import Brands from "../components/Brands";
const Cart = () => {
  
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  
  console.log(shipping_fee);
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
    
    const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

    const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {amount})

    const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "ElectroKart",
        description: "Tutorial of RazorPay",
        image: "https://i.pinimg.com/originals/a8/d8/74/a8d87426b58493d790150b46707a65e6.jpg",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
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
        <div className=" flex justify-end max-w-[400px] ml-auto shadow-lg p-4">
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

              <tr>
             
              <td className="border border-slate-700 bg-green-400">
             
                <button className=" btn-clear"  onClick={() => checkoutHandler(total_price) } >
                  Pay Now
                </button>
              </td>
            </tr>

              <tr>
                <td className="border border-slate-700 bg-red-400">
                  <button className=" btn-clear" onClick={clearCart}>
                    clear cart
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 bg-blue-400">
                  <NavLink to="/Products">
                    <button className="btn btn-green">
                      {" "}
                      continue Shopping{" "}
                    </button>
                  </NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Brands />
    </>
  );
};

export default Cart;
