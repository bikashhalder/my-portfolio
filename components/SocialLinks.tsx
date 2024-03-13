import Image from "next/image";
import React from "react";

const SocialLinks = () => {
  return (
    <div className='flex'>
      <section className='flex justify-center items-center '>
        <button className='group flex justify-center  rounded-md drop-shadow-xl from-gray-800 to-black  font-semibold hover:translate-y-5 hover:rounded-[50%] transition-all duration-500 '>
          <a
            href='https://www.linkedin.com/in/bikash-halder/'
            target={"_blank"}
            className='bg-white mx-2'>
            <Image
              src='/linkedinLogo.svg'
              className=''
              height={25}
              width={25}
              alt='linkedIn profile'
            />
          </a>

          <span className='absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-8 duration-700'>
            LinkedIn
          </span>
        </button>
      </section>

      <section className='flex justify-center items-center'>
        <button className='group flex justify-center  rounded-md drop-shadow-xl  from-gray-800 to-black  font-semibold hover:translate-y-5 hover:rounded-[50%] transition-all duration-500 '>
          <a
            href='https://github.com/bikashhalder'
            target={"_blank"}
            className='mx-4'>
            <Image
              src='/githubLogo.svg'
              height={25}
              width={25}
              alt='linkedIn profile'
            />
          </a>

          <span className='absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-8 duration-700'>
            Github
          </span>
        </button>
      </section>

      <section className='flex justify-center items-center'>
        <button className='group flex justify-center  rounded-md drop-shadow-xl  from-gray-800 to-black  font-semibold hover:translate-y-5 hover:rounded-[50%] transition-all duration-500 '>
          <a
            href='https://www.instagram.com/bikash_halder_/'
            target={"_blank"}
            className='ml-4'>
            <Image
              src='/instagramLogo.svg'
              height={25}
              width={25}
              alt='Instagram Profile'
            />
          </a>

          <span className='absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-6 duration-700'>
            Instagram
          </span>
        </button>
      </section>
    </div>
  );
};

export default SocialLinks;
