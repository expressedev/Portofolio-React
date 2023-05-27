"use client";
import { createContext } from "react";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ProjectCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl-w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://expressedev.github.io/assets/img/logoAl.jpg"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Shopify Store Developer</h4>
        <p className="font-bold text-2xl mt-1">ALIMENDRA</p>
        <div className="flx space-x-2 my-2 flex flex-row">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.icon-icons.com/icons2/2407/PNG/512/shopify_icon_146101.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://sissel.gallerycdn.vsassets.io/extensions/sissel/shopify-liquid/3.2.2/1670939500341/Microsoft.VisualStudio.Services.Icons.Default"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started wor... Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            vitae quae fuga
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            vitae quae fuga
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            vitae quae fuga
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            vitae quae fuga
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
