"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink
        href='/'
        className='w-16 h-16 bg-dark flex items-center justify-center rounded-full text-light font-bold text-2xl'
        whileHover={{
          backgroundColor: ["#BD5943", "#FF846D", "#AD6F62", "#E46F2A"],
          transition: {
            duration: 1,
            repeat: Infinity,
          },
        }}>
        BH
      </MotionLink>
    </div>
  );
};

export default Logo;
