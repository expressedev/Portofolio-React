"use client";
import { createContext } from "react";
import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="h-screen flex relative flex-col md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          <span className="decoration-[#FFA300]/50 underline">Let's Talk</span>
        </h4>

        <div className="space-y-10 ">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#FFA300] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+598 95 469 349</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#FFA300] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Montevideo, Uruguay</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#FFA300] h-7 w-7 animate-pulse" />
            <p className="text-2xl">pedroaznarez12@gmail.com </p>
          </div>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input
              type="text"
              className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#FFA300]/40 focus:text-[#FFA300]/40"
            />
            <input type="text" />
          </div>

          <input type="text" />
          <textarea />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
