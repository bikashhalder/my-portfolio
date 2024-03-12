"use client";
import AnimatedText from "@/components/AnimatedText";
import Skills from "@/components/Skills";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const heading = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.1,
    },
  },
};
const para1 = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.3,
    },
  },
};
const para2 = {
  initial: {
    opacity: 0,
    y: 65,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.4,
    },
  },
};
const para3 = {
  initial: {
    opacity: 0,
    y: 70,
  },
  animate: {
    opacity: 1,
    y: 0,

    transition: {
      delay: 1.5,
    },
  },
};
const img = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.8,
    },
  },
};

const About = () => {
  return (
    <main className='overflow-hidden'>
      <div className='flex w-full flex-col items-center justify-center p-10'>
        <AnimatedText
          text='Where Ideas Unfold, Designs Come to Life'
          className='!text-6xl text-primaryDark mb-16'
        />
        <div className='grid w-full grid-cols-8 gap-16'>
          <div className='lg:col-span-4 sm:col-span-8 flex flex-col items-center justify-start'>
            <motion.h2
              className='mb-4 text-6xl font-bold uppercase text-dark/75 cursor-pointer'
              variants={heading}
              initial='initial'
              animate='animate'
              whileHover={{ scale: 1.4 }}>
              About Me
            </motion.h2>
            <motion.p
              className='font-medium cursor-pointer'
              variants={para1}
              initial='initial'
              animate='animate'
              whileHover={{
                scale: 1.05,
              }}>
              Hello there! I'm thrilled to have you here. Allow me to introduce
              myself. I'm Bikash Halder, a passionate frontend developer and
              UI/UX designer with a diverse background in startups and
              freelancing projects.
            </motion.p>
            <motion.p
              className='my-4 font-medium cursor-pointer'
              variants={para2}
              initial='initial'
              animate='animate'
              whileHover={{
                scale: 1.05,
              }}>
              My journey into the world of technology began with the creation of
              my own startup. While the venture didn't achieve the success I had
              hoped for, it was an invaluable learning experience. From
              development and design to marketing and project management, I
              gained a comprehensive understanding of what it takes to bring
              ideas to life in the digital realm.
            </motion.p>
            <motion.p
              className='my-4 font-medium cursor-pointer'
              variants={para3}
              initial='initial'
              animate='animate'
              whileHover={{
                scale: 1.05,
              }}>
              Through my freelancing endeavors, I've had the opportunity to
              collaborate with a variety of clients, honing my skills in
              frontend development and UI/UX design along the way. I believe in
              the power of continuous learning and evolution, always seeking out
              new technologies and design trends to stay ahead of the curve.
            </motion.p>
          </div>
          <div className='lg:col-span-4 sm:col-span-8 relative  '>
            <motion.div
              className='cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2 w-full h-auto bg-light rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-2 p-1 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-2 before:h-1 before:bg-primaryDark'
              variants={img}
              initial='initial'
              animate='animate'
              whileHover={{
                y: 10,
              }}>
              <Image
                src='/mypic2.jpeg'
                alt='Bikash Halder'
                className='w-full h-auto rounded-lg'
                height={750}
                width={750}
                quality={100}
              />
              <div></div>
            </motion.div>
          </div>
        </div>
      </div>
      <Skills />
      <Experience />
      <Education />
    </main>
  );
};

export default About;
