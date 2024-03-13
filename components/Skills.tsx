"use client";
import React from "react";
import { motion } from "framer-motion";

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}>
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className='font-bold md:text-8xl text-5xl mt-12 md:mt-56 w-full text-center text-dark/75'>
        Skills
      </h2>
      <div className='md:w-full h-screen relative flex flex-col md:flex-row items-center justify-center rounded-full bg-circularLight'>
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-primary text-light p-4 shadow-dark cursor-pointer mb-8 md:mb-0'
          whileHover={{ scale: 1.05 }}>
          Web
        </motion.div>
        <Skill name='CSS' x='calc(-30vw + 50%)' y='-40vh' />
        <Skill name='HTML' x='calc(-10vw + 50%)' y='-45vh' />
        <Skill name='Javascript' x='calc(10vw + 50%)' y='-40vh' />
        <Skill name='React JS' x='calc(-39vw + 50%)' y='-20vh' />
        <Skill name='Next JS' x='calc(-10vw + 50%)' y='-23vh' />
        <Skill name='Figma' x='calc(25vw + 50%)' y='-25vh' />
        <Skill name='Firebase' x='calc(-45vw + 50%)' y='-8vh' />
        <Skill name='Tailwind CSS' x='calc(10vw + 50%)' y='-10vh' />
        <Skill name='Supabase' x='calc(10vw + 50%)' y='5vh' />
        <Skill name='Typescript' x='calc(-30vw + 50%)' y='10vh' />
        <Skill name='Convex' x='calc(-30vw + 50%)' y='20vh' />
        <Skill name='SASS' x='calc(10vw + 50%)' y='20vh' />
        <Skill name='Shadcn/ui' x='calc(-40vw + 50%)' y='30vh' />
        <Skill name='Framer Motion' x='calc(-10vw + 50%)' y='40vh' />
      </div>
    </>
  );
};

export default Skills;
