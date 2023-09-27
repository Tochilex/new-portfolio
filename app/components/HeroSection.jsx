"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "Tochukwu's CV";

    link.href = "/images/CodeCv.pdf";
    link.click();
  };

  return (
    <section className="sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 0.5 }}
          className=" col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white py-4 sm:py-0 mb-4 text-3xl md:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Tochukwu",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Blockchain Dev",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg lg:text-xl mb-6">
          I'm a full stack web developer, specialized in creating responsive and visually appealing websites.
          </p>
          <div className="sm:flex items-center">
            <div className="flex w-full sm:w-fit sm:mt-3">
              <Link
                href="#contact"
                className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
              >
                Hire Me
              </Link>
            </div>

            <button
              onClick={handleDownload}
              className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                Download Cv
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 0.5 }}
          className=" col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative rounded-full bg-[#181818] h-[250px] w-[250px] lg:h-[400px] lg:w-[400px]">
            <Image
              src="/images/Male-Memoji.png"
              alt="hero img"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
