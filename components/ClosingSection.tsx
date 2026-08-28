"use client";

import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import { closingLetter, siteInfo } from "@/lib/data";

export default function ClosingSection() {
  const paragraphs = closingLetter.trim().split("\n\n");

  return (
    <section className="relative overflow-hidden bg-dusk-gradient px-6 py-28 text-cream sm:py-36">
      <FloatingHearts variant="dark" density={6} />

      {/* twinkling stars */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-lavender-200 animate-twinkle"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 6) * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-xl text-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 flex h-14 w-14 items-center justify-center"
        >
          <svg
            viewBox="0 0 24 24"
            width="40"
            height="40"
            fill="none"
            className="animate-heartbeat text-blush-400"
          >
            <path
              d="M12 21s-6.716-4.35-9.428-8.03C.86 10.42 1.2 6.9 4.1 5.2c2.24-1.31 4.86-.6 6.2 1.24.34.47.62.98.86 1.5.24-.52.52-1.03.86-1.5 1.34-1.84 3.96-2.55 6.2-1.24 2.9 1.7 3.24 5.22 1.53 7.77C18.72 16.65 12 21 12 21z"
              fill="currentColor"
            />
          </svg>
        </motion.div>

        <p className="font-script text-3xl text-lavender-200">One last thing</p>

        <div className="mt-8 space-y-5 text-left font-body text-base leading-relaxed text-cream/85 sm:text-lg">
          {paragraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={i === 0 ? "font-script text-2xl text-blush-200" : ""}
            >
              {para}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 font-script text-2xl text-skyluv-200"
        >
          — {siteInfo.yourName}
        </motion.p>

        <p className="mt-16 font-body text-xs uppercase tracking-[0.2em] text-cream/40">
          made with love, for {siteInfo.herName}
        </p>
      </div>
    </section>
  );
}
