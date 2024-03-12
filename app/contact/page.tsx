"use client";
import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Loader from "@/components/Loader";
import { Fox } from "@/components/Fox";
import { useAlert } from "@/hooks/use-alert";
import Alert from "@/components/Alert";
const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { alert, hideAlert, showAlert } = useAlert();
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => {
    setCurrentAnimation("walk");
  };
  const handleBlur = () => {
    setCurrentAnimation("idle");
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE!,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE!,
        {
          from_name: form.name,
          to_name: "Bikash Halder",
          from_email: form.email,
          to_email: "bikashhalder002@gmail.com",
          message: form.message,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY! }
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message Sent Successfully",
          type: "success",
        });
        setTimeout(() => {
          setCurrentAnimation("idle");
          hideAlert();
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((error: any) => {
        setIsLoading(false);
        console.log(error);
        setCurrentAnimation("idle");
        showAlert({
          show: true,
          text: "I didnt receive your message",
          type: "danger",
        });
      });
  };
  return (
    <section className='relative flex lg:flex-row flex-col m-11'>
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col justify-center items-center'>
        <h1 className='flex justify-center text-6xl font-bold text-dark'>
          Get In Touch
        </h1>
        <form
          className='w-full lg:w-4/5 justify-center flex flex-col gap-7 mt-14 mb-14'
          onSubmit={handleSubmit}
          ref={formRef}>
          <label className='text-black-500 font-semibold'>Name</label>
          <input
            type='text'
            name='name'
            className='border border-primary
            text-black rounded-md px-4 py-2 focus:outline-none focus:border-primaryDark bg-light/55 placeholder:text-gray-700'
            placeholder='John'
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label className='text-black-500 font-semibold'>Email</label>
          <input
            type='email'
            name='email'
            className='border border-primary
            text-black rounded-md px-4 py-2 focus:outline-none focus:border-primaryDark bg-light/55 placeholder:text-gray-700'
            placeholder='john@email.com'
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label className='text-black-500 font-semibold'>Your Message</label>
          <textarea
            name='message'
            className='border border-primary
            text-black rounded-md px-4 py-2 focus:outline-none focus:border-primaryDark bg-light/55 placeholder:text-gray-700'
            placeholder='Let me know how can I help you'
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button
            type='submit'
            className='bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}>
            {isLoading ? "Sending ..." : "Send Message"}
          </button>
        </form>
      </div>
      {/* fox */}
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
