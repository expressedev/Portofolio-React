"use client";
import { createContext } from "react";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="https://static.wixstatic.com/media/e1b55f_851f82f6fa2d4a1ba3d37847e84d7bf8~mv2.jpg/v1/fill/w_654,h_854,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e1b55f_851f82f6fa2d4a1ba3d37847e84d7bf8~mv2.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] "
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="text-[#FFA300]">little</span> background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iure
          minima. Odio fugit vero quidem eos ducimus enim minima laudantium,
          facilis aliquam rem alias aspernatur expedita iure odit sunt placeat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, cum.
          Animi cumque quae hic placeat perferendis! Facilis quas tempora ab
          omnis eaque sapiente nisi. Ducimus nihil eos placeat nobis quis?
        </p>
      </div>
    </motion.div>
  );
}
