"use client";
import { createContext } from "react";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div
        className="rounded-full border border-[#858585] h-[400px] w-[400px] absolute
    mt-52 animate-pulse "
      />
      <div
        className="rounded-full border border-[#F7Ab0A] opacity-20 h-[650px] w-[650px]
    absolute mt-52"
      />
      <div
        className="rounded-full border border-[#333333] h-[80@px] w-[80@px] absolute
    mt-52"
      />
    </motion.div>
  );
}

export default BackgroundCircles;
