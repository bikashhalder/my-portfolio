import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hireme = () => {
  return (
    <div className=' flex items-center justify-center overflow-hidden'>
      <div className='h-auto items-center justify-center relative'>
        <Image
          src='/hireme3.svg'
          alt='hire me '
          width={145}
          height={145}
          className='animate-spin-slow'
        />
        <Link
          href='/bikashhalder.pdf'
          className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white shadow-md border border-solid border-black w-20 h-20 rounded-full font-semibold'
          target={"_blank"}
          download={true}>
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Hireme;
