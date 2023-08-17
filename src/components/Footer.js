import React from "react";
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className=" m-auto px-4 py-2 bg-[#2a3246] text-white "></div>
    <div className=" m-auto px-4 py-2 bg-[#24262b]">
      
        <div className="max-w-[1520px] m-auto  py-10 px-4 grid lg:grid-cols-5 gap-8 text-gray-300">
          <div><span  className=" w-full text-3xl font-semibold text-[#000000] "></span>
            <span className=" w-full text-3xl font-bold text-[#6173a1] ">
            ElectroKart
            </span>
            <p className="py-8">
            🛒 Introducing ElectroKart.<br/>
             Your Ultimate Electronics Shopping Destination! 
            </p>
            <div className=" flex m-auto justify-between md:w-[75%] mt-4  ">
              <FaInstagram size={30} />
              <FaFacebookSquare size={30} />
              <FaTwitterSquare size={30} />
              <FaDribbbleSquare size={30} /> 
              <FaGithubSquare size={30} />
            </div>
          </div>

          <div className=" flex justify-between "></div>

       
          
          <div>
            <h6 className="font-bold text-[#ffffff] mt-[20px]"> <p>Get to Know Us</p></h6>
            <ul>
            <li className="py-2 text-sm"><a>Contact us </a></li>
              <li className="py-2 text-sm"> <p>Let Us Help You</p></li>
              <li className="py-2 text-sm"><a>Shipping Rates & Policies</a></li>
              </ul>
              </div>
              
              <div>
              <h6 className="font-bold text-[#ffffff]  mt-[20px]"><p>Make Money with Us</p></h6>
              <ul>
              <li className="py-2 text-sm">Dropshiping</li>
              <li className="py-2 text-sm">Work with us</li>
              <li className="py-2 text-sm"> <a>Become an Affiliate</a></li>
          
              
            </ul>
          </div>

          <div>
          <h6 className="font-bold text-[#ffffff] mt-[20px]">Privacy</h6>
          <ul>
            <li className="py-2 text-sm">Privacy Terms</li>
            <li className="py-2 text-sm"><a>Privacy Notice</a> </li>
            <li className="py-2 text-sm"><a> Your Ads Privacy Choices</a></li>
            <li className="py-2 text-sm"> <div className="copyright">
            © 2023 ElectroKart.com.
           </div></li>
          </ul>
        </div>
        
        </div>
      </div>
      </>
  );
};

export default Footer;
