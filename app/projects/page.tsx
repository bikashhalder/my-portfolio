"use client";
import AnimatedText from "@/components/AnimatedText";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import Badge from "@/components/ui/badge";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";

const SkeletonOne = () => {
  return (
    <div>
      <h1 className='text-6xl font-bold mb-4 text-white'>Board</h1>
      <p className='text-white pb-2'>
        A collaborative, real-time whiteboard packed with features.
      </p>
      <h3 className='text-white text-lg pb-3 font-bold'>Features</h3>
      <div className='flex flex-wrap gap-4 '>
        <Badge color='bg-blue-500' text='Whiteboard' />
        <Badge
          color='bg-blue-500'
          text='Toolbar with Text, Shapes, Sticky Notes & Pencil'
        />
        <Badge color='bg-blue-500' text='Layering' />
        <Badge color='bg-blue-500' text='Coloring system' />
        <Badge color='bg-blue-500' text='Undo & Redo' />
        <Badge color='bg-blue-500' text='Keyboard shortcuts' />
        <Badge color='bg-blue-500' text='Real-time collaboration' />
        <Badge color='bg-blue-500' text='Real-time database' />
        <Badge color='bg-blue-500' text='Auth, organisations and invites' />
      </div>

      <h3 className='text-white text-lg pb-3 font-bold'>
        Languages and Packages
      </h3>
      <div className='flex flex-wrap gap-4 '>
        <Badge color='bg-green-500' text='Next.js 14' />
        <Badge color='bg-green-500' text='Tailwind' />
        <Badge color='bg-green-500' text='ShadcnUI' />
        <Badge color='bg-green-500' text='Liveblocks' />
        <Badge color='bg-green-500' text='Convex' />
        <Badge color='bg-green-500' text='Zustand' />
        <Badge color='bg-green-500' text='Typescript' />
        <Badge color='bg-green-500' text='Clerk' />
      </div>
      <div className='mt-4 flex'>
        <Link
          href={"https://board-eta-flax.vercel.app/"}
          target={"_blank"}
          className='border-2 m-2 p-2 text-white rounded-md flex'>
          Live Link <BiLinkExternal />
        </Link>
        <Link
          href={"https://github.com/bikashhalder/board"}
          target={"_blank"}
          className='border-2 m-2 p-2 text-white rounded-md flex'>
          Github Link <BiLinkExternal />
        </Link>
      </div>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <h1 className='text-6xl font-bold mb-4 text-white'>Realtime Dashboard</h1>
      <p className='text-white pb-2'>
        An admin dashboard with full authentication, a homepage displaying
        charts and activities, a comprehensive table for companies with CRUD and
        search, and a Kanban board with real-time synchronization.
      </p>
      <h3 className='text-white text-lg pb-3 font-bold'>Features</h3>
      <div className='flex flex-wrap gap-4 '>
        <Badge color='bg-blue-500' text='Charts and Activities' />
        <Badge color='bg-blue-500' text='CURD and Search' />
        <Badge color='bg-blue-500' text='Kanban Board' />
        <Badge color='bg-blue-500' text='Realtime Synchronization' />
        <Badge color='bg-blue-500' text='Paginations' />
      </div>
      <br />
      <h3 className='text-white text-lg pb-3 font-bold'>
        Languages and Packages
      </h3>
      <div className='flex flex-wrap gap-4 '>
        <Badge color='bg-green-500' text='Refine' />
        <Badge color='bg-green-500' text='AntD' />
        <Badge color='bg-green-500' text='GraphQl' />
        <Badge color='bg-green-500' text='React' />
        <Badge color='bg-green-500' text='Typescript' />
      </div>
      <div className='mt-4 flex'>
        <Link
          href={"https://realtime-dashboard-bay.vercel.app/"}
          target={"_blank"}
          className='border-2 m-2 p-2 text-white rounded-md flex'>
          Live Link <BiLinkExternal />
        </Link>
        <Link
          href={"https://github.com/bikashhalder/realtime-dashboard"}
          target={"_blank"}
          className='border-2 m-2 p-2 text-white rounded-md flex'>
          Github Link <BiLinkExternal />
        </Link>
      </div>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <h1 className='text-6xl font-bold mb-4 text-white'>
        Global Grocery Store
      </h1>
      <p className='text-white pb-2'>
        Global Grocery Store is a precisely planned mobile UI/UX project made in
        Figma that aims to revolutionize the mobile grocery purchasing
        experience on a worldwide scale. This project is dedicated to creating a
        user-centric interface that values usability, accessibility, and visual
        appeal.
      </p>

      <div className='flex flex-wrap gap-4 '>
        <Badge color='bg-blue-500' text='Design System' />
        <Badge color='bg-blue-500' text='Site Map' />
        <Badge color='bg-blue-500' text='Mobile Design' />
      </div>
      <br />
      <h3 className='text-white text-lg pb-3 font-bold'>Tool</h3>
      <div className='flex flex-wrap gap-4 '>
        <Badge color='bg-green-500' text='Figma' />
      </div>
      <div className='mt-4 flex'>
        <Link
          href={
            "https://www.figma.com/proto/ZGiAX1uPyHRKpAiJkATXmz/Global-Grocery-Store?page-id=5%3A101&type=design&node-id=157-1332&viewport=1170%2C580%2C0.47&t=ccDo2aFbgCFXh990-1&scaling=scale-down&starting-point-node-id=157%3A1332&mode=design"
          }
          target={"_blank"}
          className='border-2 m-2 p-2 text-white rounded-md flex'>
          Prototype Link <BiLinkExternal />
        </Link>
        <Link
          href={
            "https://www.figma.com/file/ZGiAX1uPyHRKpAiJkATXmz/Global-Grocery-Store?type=design&node-id=5%3A101&mode=design&t=Puik0i4ooLFwbivO-1"
          }
          target={"_blank"}
          className='border-2 m-2 p-2 text-white rounded-md flex'>
          Figma File <BiLinkExternal />
        </Link>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/board.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/Rdashboard.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-4",
    thumbnail: "/Design.png",
  },
];

const heading = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.1,
    },
  },
};

const card = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.8,
    },
  },
};

const Projects = () => {
  return (
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
      <AnimatedText
        text='Imagination To Reality'
        className='!text-6xl text-primaryDark mb-16'
      />
      <div className='grid grid-cols-12 gap-24'>
        <motion.h2
          variants={heading}
          initial='initial'
          animate='animate'
          className='col-span-12 text-4xl font-bold mb-4 uppercase text-dark/75 cursor-pointer'>
          Featured Project
        </motion.h2>
      </div>
      <motion.div
        variants={card}
        initial='initial'
        animate='animate'
        className='h-screen py-8 w-full'>
        <LayoutGrid cards={cards} />
      </motion.div>
    </main>
  );
};

export default Projects;
