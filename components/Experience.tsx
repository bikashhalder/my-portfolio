import React from "react";

interface DetailsProps {
  position: string;
  company: string;
  companyLink?: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: DetailsProps) => {
  return (
    <li className='md:my-8 first:mt-0 last:mb-0 md:w-[60%] w-[80%] mx-auto flex flex-col items-center justify-center'>
      <div>
        <h3 className='capitalize font-bold text-2xl text-dark'>
          {position}&nbsp;
          <a
            href={companyLink}
            target='_blank'
            className='text-primaryDark capitalize'>
            - {company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className='my-64'>
      <h2 className='font-bold md:text-8xl text-5xl md:mb-32 mb-5 w-full text-center text-dark/75'>
        Experience
      </h2>
      <div className='md:w-[75%] mx-auto relative'>
        <ul>
          <Details
            position='Founder'
            company='doSmartStudy'
            time='2021-Present'
            address='Assam,India'
            work='The vision behind doSmartStudy was to pioneer a transformative platform that ensures students never fret over study materials or exam pressure. Our platform seamlessly manages every aspect, alleviating stress. As the founder, I led design, development, and marketing efforts. Despite unforeseen outcomes, the journey enriched me with invaluable insights and growth opportunities.'
            companyLink='https://dosmartstudy.com'
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
