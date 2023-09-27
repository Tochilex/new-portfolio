"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";

import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai"

const EmailSection = () => {
 
  
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 sm:py-24 py-20 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-0 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="my-8">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          My inbox is always open, if you have a question or just want to say
          hi, I'll always reply back
        </p>
        <div className="socials flex flex-col mt-6">
          {/* <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="github.com">
            <Image src={LinkedIn} alt="LinkedIn Icon" />
          </Link> */}

          <Link
            href="mailto:tochilex@gmail.com"
            className="flex items-center gap-2"
          >
            <AiOutlineMail className="text-white h-8 w-8" />
            <span className="text-[#adb7be]">tochilex@gmail.com</span>
          </Link>

          <Link href="tel:+2348061668461" className="flex items-center gap-2">
            <AiOutlineWhatsApp className="text-white h-8 w-8 mt-2" />
            <span className="text-[#adb7be]">+2348061668461</span>
          </Link>

          <div className="flex mt-4">
          <Link href='https://www.linkedin.com/in/tochukwu-owunwanne-6a0511175'>
            <AiFillLinkedin className="text-white h-8 w-8 mr-3" />
          </Link>

          <Link href='https://github.com/Tochilex'>
            <AiFillGithub  className="text-white h-8 w-8" />
          </Link>
          </div>

          
        </div>
      </div>

      <div className="sm:mt-8">
        <form
          action="https://getform.io/f/1ec9bc05-5b5f-4bda-a941-cf8d3199e769"
          method="POST"
          className="flex flex-col"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="johndoe@google.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hello"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="What's your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Hit Me Up
          </button>
      
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
