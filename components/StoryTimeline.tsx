"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { memories } from "@/lib/data";

function Polaroid({
  memory,
  index,
}: {
  memory: (typeof memories)[number];
  index: number;
}) {
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -60 : 60, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative w-full max-w-xs ${memory.rotate} md:max-w-sm`}
    >
      <div className="tape -top-3 left-1/2 -translate-x-1/2 rotate-[-4deg]" />
      <div className="rounded-sm bg-white p-3 pb-6 shadow-[0_18px_40px_-12px_rgba(150,112,201,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-0">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-lavender-100">
          <Image
            src={memory.src}
            alt={memory.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 400px"
          />
        </div>
        <p className="mt-3 text-center font-script text-lg text-blush-500">
          {memory.date}
        </p>
        <p className="mt-1 px-2 text-center font-body text-sm text-inkplum/70">
          {memory.caption}
        </p>
      </div>
    </motion.div>
  );
}

export default function StoryTimeline() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-cream px-6 py-24 sm:py-32"
    >
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="font-script text-2xl text-skyluv-500">Our Story</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-inkplum sm:text-4xl">
          A few of my favorite chapters
        </h2>
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-16 md:gap-20">
        {/* connecting ribbon line, hidden on small screens for clarity */}
        <svg
          className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-4 -translate-x-1/2 md:block"
          preserveAspectRatio="none"
          viewBox="0 0 4 100"
        >
          <line
            x1="2"
            y1="0"
            x2="2"
            y2="100"
            stroke="#D9C7F0"
            strokeWidth="2"
            strokeDasharray="6 8"
            strokeLinecap="round"
          />
        </svg>

        {memories.map((memory, index) => (
          <div
            key={memory.id}
            className={`relative z-10 flex w-full ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            } justify-center`}
          >
            <Polaroid memory={memory} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
