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
      //   animate={{ x: x, y: y }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      //   viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-56 w-full text-center text-dark/75'>
        Skills
      </h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-primary text-light p-4 shadow-dark cursor-pointer'
          whileHover={{ scale: 1.05 }}>
          Web
        </motion.div>
        <Skill name='CSS' x='-12vw' y='-3vw' />
        <Skill name='HTML' x='-5vw' y='-12vw' />
        <Skill name='Javascript' x='35vw' y='6vw' />
        <Skill name='React JS' x='0vw' y='12vw' />
        <Skill name='Next JS' x='25vw' y='-5vw' />
        <Skill name='Figma' x='-13vw' y='-20vw' />
        <Skill name='Firebase' x='-25vw' y='18vw' />
        <Skill name='Tailwind CSS' x='18vw' y='18vw' />
        <Skill name='Supabase' x='-25vw' y='-10vw' />
        <Skill name='Typescript' x='-5vw' y='20vw' />
        <Skill name='Convex' x='15vw' y='-20vw' />
        <Skill name='SCSS' x='10vw' y='-10vw' />
        <Skill name='Shadcn/ui' x='14vw' y='5vw' />
        <Skill name='Framer Motion' x='-25vw' y='5vw' />
      </div>
    </>
  );
};

export default Skills;
