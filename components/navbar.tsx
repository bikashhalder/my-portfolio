"use client";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

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
    <header className='w-full px-8 md:px-32 py-8 font-medium flex items-center justify-between relative'>
      <nav className='flex'>
        <CustomLink href='/' title='Home' className='md:mr-4 mr-4' />
        <CustomLink href='/about' title='About Me' className='md:mx-4 mx-2' />
        <CustomLink
          href='/projects'
          title='Projects'
          className='md:ml-4 mx-2'
        />
      </nav>

      <nav className='md:flex hidden'>
        <SocialLinks />
      </nav>
    </header>
  );
};

export default Navbar;
