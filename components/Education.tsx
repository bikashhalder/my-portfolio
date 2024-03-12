import React from "react";

interface DetailsProps {
  position: string;
  college: string;
  collegeLink?: string;
  time: string;
  address: string;
  branch: string;
}

const Details = ({
  position,
  college,
  collegeLink,
  time,
  address,
  branch,
}: DetailsProps) => {
  return (
    <li className='my-8 flex flex-col items-center justify-center'>
      <div>
        <h3 className='capitalize font-bold text-2xl text-dark'>
          {position}&nbsp;
          <a
            href={collegeLink}
            target='_blank'
            className='text-primaryDark capitalize'>
            - {college}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75'>
          {time} | {address}
        </span>
        <p className='capitalize font-bold text-dark/75'>{branch}</p>
      </div>
    </li>
  );
};

const Education = () => {
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center text-dark/75'>
        Education
      </h2>
      <div className='w-[85%] mx-auto relative'>
        <ul>
          <Details
            position='B.Tech'
            college='Quest Group Of Institution'
            time='2017- 2021'
            address='Mohali,Punjab,India'
            collegeLink='https://questgoi.org/'
            branch='Computer Science Engineering'
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
