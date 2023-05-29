"use client";
import { createContext } from "react";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My name is Pedro Aznarez",
      "Software Developer",
      "Web Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src="https://media.licdn.com/dms/image/D4E03AQEfJms4qaqgyw/profile-displayphoto-shrink_800_800/0/1682709226529?e=1690416000&v=beta&t=bJe33-ZbsECVEj8xPrc7KcKxsJPtlL8bYniu63b4MMk"
        alt=""
        className=" relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[8px]">
          Software Developer
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#FFA300" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border-[#FFA300]/40 hover:text-[#FFA300]/40">
              About
            </button>
          </Link>
          <Link href="#projects">
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border-[#FFA300]/40 hover:text-[#FFA300]/40">
              Projects
            </button>
          </Link>
          <Link href="#skills">
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border-[#FFA300]/40 hover:text-[#FFA300]/40">
              Skills
            </button>
          </Link>
          <Link href="#shopify">
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border-[#FFA300]/40 hover:text-[#FFA300]/40">
              Shopify & Wix Developer
            </button>
          </Link>
          <Link href="#contact">
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border-[#FFA300]/40 hover:text-[#FFA300]/40">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
