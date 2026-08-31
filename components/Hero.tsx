"use client";

import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import { siteInfo } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-dreamy-gradient px-6 text-center">
      <FloatingHearts variant="light" density={8} />

      {/* soft glow orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blush-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-skyluv-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-40 w-40 rounded-full bg-lavender-200/50 blur-2xl" />

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-script text-2xl text-lavender-500 sm:text-3xl"
      >
        {siteInfo.anniversaryLabel}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="text-shadow-soft mt-3 font-display text-5xl font-bold leading-tight text-inkplum sm:text-6xl md:text-7xl"
      >
        To {siteInfo.herName},
        <br />
        <span className="text-blush-500">My home</span>
        <br />
        <span className="text-blush-500">My forever</span>
      </motion.h1>
      <Image
        src="/images/s.jpeg"
        alt="Heart"
        width={100}
        height={100}
        className="mt-6 rounded-full border-4 border-blush-500 object-cover shadow-lg shadow-blush-500/30 size-52"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-6 max-w-md font-body text-base text-inkplum/70 sm:text-lg"
      >
        {siteInfo.heroTagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-3 font-script text-xl text-skyluv-500"
      >
        Since {siteInfo.sinceYear} &nbsp;•&nbsp; still falling for you
      </motion.div>

      <motion.a
        href="#story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.4 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
        }}
        className="flex flex-col items-center gap-2 text-inkplum/60 transition hover:text-blush-500"
      >
        <span className="font-body text-sm tracking-wide">Begin our story</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 4v14m0 0-6-6m6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.a>
    </section>
  );
}
