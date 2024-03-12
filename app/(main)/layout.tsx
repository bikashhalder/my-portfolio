import Navbar from "@/components/navbar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className=' min-h-screen pt-0 relative'>
      <div className='absolute z-10 w-full '>
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default layout;
