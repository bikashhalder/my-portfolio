import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";

interface HomeInfoProps {
  currentStage: number;
}
interface InfoBoxProps {
  text: string;
  link: string;
  btnText: string;
}

const InfoBox = ({ text, link, btnText }: InfoBoxProps) => (
  <div className='sm:text-xl lg:w-1/2 sm:w-4/5 sm:leading-snug text-center bg-blue-500/80 p-3 text-white mx-5 shadow-md rounded-md'>
    <p className='font-medium sm:text-xl text-center mb-3'>{text}</p>
    <Link
      href={link}
      className='text-white flex justify-center bg-blue-600/70 w-full rounded p-2'>
      {btnText}
      <FaCircleArrowRight className='ml-2 mt-1' />
    </Link>
  </div>
);

const renderContent: any = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center bg-primary p-3 text-white mx-5 shadow-md rounded-md'>
      <span>
        Hi, I am <span className='font-semibold'>Bikash Halder</span> 🙏
      </span>
      <br />A Frontend developer & UI/UX designer from India
    </h1>
  ),
  2: (
    <InfoBox
      text='I offer extensive experience, from founding a startup to completing freelancing projects, demonstrating resilience, adaptability, and a commitment to delivering impactful results.'
      link='/about'
      btnText='Learn More'
    />
  ),
  3: (
    <InfoBox
      text='I have a proven track record of delivering exceptional projects in frontend development and UI/UX design, showcasing my ability to create visually appealing and user-friendly interfaces that elevate user experiences.'
      link='/projects'
      btnText='View My Projects'
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link='/contact'
      btnText='Hire Me 🫠'
    />
  ),
};

const HomeInfo = ({ currentStage }: HomeInfoProps) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
