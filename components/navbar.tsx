"use client";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

interface CustomLinkProps {
  href: string;
  title: string;
  className: string;
}

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link href={href} className={`${className} relative text-black group`}>
      {title}
      <span
        className={cn(
          "h-[1px] inline-block w-0 bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300",
          pathname === href ? "w-full" : "w-0"
        )}>
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between relative'>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4' />
        <CustomLink href='/about' title='About Me' className='mx-4' />
        <CustomLink href='/projects' title='Projects' className='ml-4' />
      </nav>

      <nav className='flex'>
        <section className='flex justify-center items-center'>
          <button className='group flex justify-center  rounded-md drop-shadow-xl from-gray-800 to-black  font-semibold hover:translate-y-5 hover:rounded-[50%] transition-all duration-500 '>
            <a href='/' target={"_blank"} className='bg-white mx-2'>
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
            <a href='/' target={"_blank"} className='mx-4'>
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
            <a href='/' target={"_blank"} className='ml-4'>
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
      </nav>
    </header>
  );
};

export default Navbar;
