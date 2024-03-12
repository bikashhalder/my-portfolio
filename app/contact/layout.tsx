import Navbar from "@/components/navbar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className='bg-light min-h-screen pt-0 relative'>
      <div className='relative z-10 w-full '>
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default layout;
