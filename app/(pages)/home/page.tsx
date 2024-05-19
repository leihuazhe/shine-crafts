"use client"
import Link from "next/link";
import React from "react";
import Particles from "@/components/particles";

// const navigation = [
//   { name: "Projects", href: "/projects" },
//   { name: "Contact", href: "/contact" },
// ];

export default function Home() {
  return (
      <div className="home-style flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        {/* <nav className="animate-fade-in my-16">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-500 duration-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav> */}
        <div className="animate-glow animate-fade-left hidden h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
        <Particles
          className="animate-fade-in absolute inset-0 -z-10"
          quantity={100}
        />
        <h1 className="text-edge-outline animate-title z-10 cursor-default whitespace-nowrap bg-white bg-clip-text font-display text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl ">
          {/* <h1 className="text-edge-outline animate-title font-display z-10 cursor-default whitespace-nowrap bg-white bg-clip-text text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl "> */}
          Shine TTS
        </h1>

        <div className="animate-glow animate-fade-right hidden h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
        {/* <div className="animate-fade-in my-16 text-center">
        <h2 className="text-sm text-zinc-500 ">
          I'm building{" "}
          <Link
            target="_blank"
            href="https://tts.317318.xyz"
            className="underline duration-500 hover:text-zinc-300"
          >
            tts
          </Link> to solve API authentication and authorization for developers.
        </h2>
      </div> */}
      </div>
  );

}
