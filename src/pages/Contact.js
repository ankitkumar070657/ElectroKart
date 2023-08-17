import React from "react";
import Brands from "../components/Brands";
import { useForm, ValidationError } from "@formspree/react";
import { NavLink } from "react-router-dom";
function Contact() {
  const [state, handleSubmit] = useForm("xoqoezqy");
  if (state.succeeded) {
    return (
      <div>
        <p className="my-20 mb-8">Thanks for your feedback !!</p>
        <NavLink to="/Products">
          <button className="mb-[10rem] transition ease-in-out delay-150 rounded-full  py-2 px-2   font-bold bg-yellow-300  hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300 ...">
            Continue Shopping{" "}
          </button>{" "}
        </NavLink>{" "}
        <Brands />
      </div>
    );
  }
  return (
    <>
      <div className="max-w-[1520px] m-auto flex justify-center my-20">
        <div className="">
          <form
            onSubmit={handleSubmit}
            className="flex p-4 py-4 flex-col justify-center items-center hover:scale-105 duration-300 border-2  bg-slate-300 shadow-black shadow-2xl lg:w-[30vw]"
          >
            <p className="font-bold mb-10">Contact Us</p>

            <input
              required
              className="my-4 rounded-full px-2 text-center justify-center items-center"
              id="text"
              type="text"
              name="text"
              placeholder="Enter your name"
            />

            <input
              required
              className="my-4 rounded-full px-2 text-center justify-center items-center"
              id="text"
              type="email"
              name="email"
              placeholder="Enter your email-id"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              required
              className="my-4 rounded-full px-2 text-center justify-center items-center"
              id="message"
              name="message"
              placeholder="Enter your message "
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="border-2 rounded-full px-2"
              type="submit"
              disabled={state.submitting}
            >
              SEND
            </button>
          </form>
        </div>
      </div>
      <Brands />
    </>
  );
}

export default Contact;
