"use client";

import Image from "next/image";
import {gsap} from "gsap";
import { useEffect } from "react";

export default function Hero() {

  // useEffect(() => {
  //   gsap.from("#hero" , {
  //     duration: 1,
  //     scale: 0,
  //     opacity: 0,
  //     ease: "power2.out",
  //     onComplete: () => {
  //       gsap.to("#hero" , {
  //         duration: 1,
  //         scale: 1,
  //         opacity: 1,
  //         ease: "power2.out",
  //       })
  //     }
  //   })
  // } , [])

  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl">

        {/* TEXT */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-5xl md:text-6xl max-[750px]:mt-4 font-extrabold bg-linear-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition duration-300">
            Abdul Haseeb
          </h1>
          <p className="text-gray-400 text-lg md:text-xl hover:text-white transition">
            Front-End Developer | React | Next.js
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative group">
          <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-600 blur-2xl opacity-30 group-hover:opacity-70 transition duration-500 rounded-2xl"></div>
          <Image
            src="/profile.png"
            alt="profile"
            width={260}
            height={260}
            className="relative rounded-2xl border border-gray-700 shadow-xl transform group-hover:scale-110 group-hover:-translate-y-2 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
}