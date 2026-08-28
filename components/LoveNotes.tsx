"use client";

import { motion } from "framer-motion";
import { loveNotes } from "@/lib/data";

const cardTints = [
  "bg-blush-50 border-blush-200",
  "bg-lavender-50 border-lavender-200",
  "bg-skyluv-50 border-skyluv-200",
];

export default function LoveNotes() {
  return (
    <section className="relative overflow-hidden bg-lavender-50/40 px-6 py-24 sm:py-32">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="font-script text-2xl text-blush-500">Little Things</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-inkplum sm:text-4xl">
          Reasons I love you
        </h2>
        <p className="mt-3 font-body text-inkplum/60">
          Out of a thousand, here are just a few.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loveNotes.map((note, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className={`group rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${cardTints[i % cardTints.length]}`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              className="mb-3 text-blush-400 transition-transform duration-300 group-hover:scale-110"
            >
              <path
                d="M12 21s-6.716-4.35-9.428-8.03C.86 10.42 1.2 6.9 4.1 5.2c2.24-1.31 4.86-.6 6.2 1.24.34.47.62.98.86 1.5.24-.52.52-1.03.86-1.5 1.34-1.84 3.96-2.55 6.2-1.24 2.9 1.7 3.24 5.22 1.53 7.77C18.72 16.65 12 21 12 21z"
                fill="currentColor"
              />
            </svg>
            <p className="font-body text-sm leading-relaxed text-inkplum/80">
              {note}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
