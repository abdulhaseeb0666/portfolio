"use client";

import { useEffect } from "react";
import {gsap} from "gsap";

const skills = ["HTML" , "CSS", "JavaScript", "Next.js", "React", "TypeScript", "Tailwind", "GSAP" , "Python" , "Linux"];

export default function Skills() {

  // useEffect(() => {
  //   gsap.from("#skills" , {
  //     duration: 1,
  //     y : 10,
  //     opacity: 0,
  //     stagger: 0.2,
  //     ease: "power2.out",
  //   })
  // })

  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-10 bg-linear-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <div key={i} className="relative group">
            <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-blue-500 blur-md opacity-20 group-hover:opacity-70 transition rounded-full" />

            <span className="relative px-6 py-2 bg-gray-900 border border-gray-700 rounded-full text-gray-300 shadow-md backdrop-blur-md transform group-hover:scale-110 group-hover:-translate-y-1 group-hover:text-white transition duration-300">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}