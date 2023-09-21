
import {NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import {FcHome, FcAbout, FcContacts} from 'react-icons/fc'

import { BsFillCartFill, BsBox2HeartFill, BsPerson } from "react-icons/bs";

const Navbar = () => {
  const { loginWithRedirect, logout,isAuthenticated, user  } = useAuth0();
  const [SideNav, setSideNav] = useState(false);
  return (
    <div className=" m-auto flex justify-between items-center p-4  ">
      <div className="flex items-center">
        <div onClick={() => setSideNav(!SideNav)} className=" mb-1 cursor-pointer shadow-xl ">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
        <NavLink to="/"> Electro<span className="text-[#6173a1] font-bold">Kart</span></NavLink>
        </h1>
        <div className=" hidden md:flex items-center  mx-2 px-2 max-w-[200px] sm:w-[400px] lg:w-[500px]   ">
        <nav>
        <ul className="flex gap-10 bg-slate-100 p-4 rounded-full cursor-pointer">
        <li className="hidden md:block mx-2 hover:underline "><NavLink to="/">Home</NavLink></li>
        <li className="hidden md:block mx-2 hover:underline"><NavLink to="/Products">Products</NavLink></li>
        <li className="hidden xl:block mx-2 hover:underline"><NavLink to="/About">About</NavLink></li>
        <li className="hidden md:block mx-2 hover:underline"><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
        </nav>
        </div>
        </div>


        <div className="flex gap-2">
        
        <div className="hidden lg:flex item-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-[#6173a1] text-white rounded-full p-2 text-bold ">
            Welcome
          </p>
          <p className="text-bold p-2 gap-5">  {isAuthenticated ? <p>{user.name}</p> :<p>Guest User</p>}</p>
        </div>
        

        <NavLink to="/Cart">
          <button className=" flex bg-[#6173a1] text-white    items-center p-2 rounded-full sm:hidden ">
          <BsFillCartFill size={20} /></button></NavLink>
          


          <NavLink to="/Cart">
          <button className="hidden sm:flex bg-[#6173a1] text-white    items-center p-2 rounded-full  ">
          <BsFillCartFill size={20} />Cart</button></NavLink>
       
        
          {isAuthenticated ? (
           
            <button className="bg-[#6173a1] text-white   flex  items-center  p-2 rounded-full  " onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>  Log Out
            </button> 
          ):(

            <button  className="bg-[#6173a1] text-white   flex  items-center p-2 rounded-full  " onClick={() => loginWithRedirect()}>Log In</button>
          )}
      


          
          </div>

         



      {SideNav ? (
        <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0" onClick={()=>setSideNav(!SideNav)}></div>
      ) : (
        ""
      )}
      <div
        className={
          SideNav
            ? "fixed top-0 left-0 w-[250px] h-screen bg-white z-10 duration-200"
            : "fixed top-0 left-[-100%] w-[250px]  h-screen bg-white z-10 duration-200"
        }
      >
        <AiOutlineClose
          onClick={() => setSideNav(!SideNav)}
          size={25}
          className=" absolute right-2 top-2 cursor-pointer"
        />
        <h2 className="text-2xl p-4 ">Electro<span className="text-[#6173a1] font-bold">Kart</span></h2>
        <nav>
        <ul className="flex flex-col p-4 text-gray-900">

        <div className="flex item-center bg-gray-200 rounded-full p-1 text-[14px]">
        <p className="bg-[#6173a1] text-white rounded-full p-2 text-bold ">Welcome</p>
        <p className="text-bold p-2 gap-5">  {isAuthenticated ? <p>{user.name}</p> :<p>Guest User</p>}</p>
        </div>
      


        <NavLink to="/" onClick={() => setSideNav(!SideNav)}>
        <li className="text-xl py-4 flex  hover:bg-blue-100 rounded-full px-2">
        <FcHome size={25}
        className='mr-4 text-white  rounded-full'/>
        Home
        </li>
        </NavLink>

        <NavLink to="/Cart" onClick={() => setSideNav(!SideNav)}>
        <li className="text-xl py-4 flex  hover:bg-blue-100 rounded-full px-2">
        <AiOutlineShoppingCart size={25}
        className='mr-4 text-gray-900  rounded-full'/>
        Cart
        </li>
        </NavLink>

        <NavLink to="/products" onClick={() => setSideNav(!SideNav)}>
        <li className="text-xl py-4 flex  hover:bg-blue-100 rounded-full px-2">
        <BsBox2HeartFill size={25}
        className='mr-4 text-gray-700  '/>
        Products
        </li>
        </NavLink>


        
        <NavLink to="/About" onClick={() => setSideNav(!SideNav)}>
        <li className="text-xl py-4 flex  hover:bg-blue-100 rounded-full px-2">
        <FcAbout size={25}
        className='mr-4 text-white  rounded-full'/>
        About
        </li>
        </NavLink>

        <NavLink to="/Contact" onClick={() => setSideNav(!SideNav)}>
        <li className="text-xl py-4 flex  hover:bg-blue-100 rounded-full px-2">
        <FcContacts size={25}
        className='mr-4 text-white  rounded-full'/>
        Contact
        </li>
        </NavLink>

        <NavLink to="/Help" onClick={() => setSideNav(!SideNav)}>
        <li className="text-xl py-4 flex  hover:bg-blue-100 rounded-full px-2">
        <BsPerson size={25}
        className='mr-4 text-gray-900  rounded-full'/>
        Help
        </li>
        
       
        </NavLink>

        </ul>
        </nav>
        </div>
        </div>
        );
};

export default Navbar;











