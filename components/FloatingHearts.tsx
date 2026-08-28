"use client";

import { motion } from "framer-motion";

type Props = {
  variant?: "light" | "dark";
  density?: number;
};

const HEART_PATH =
  "M12 21s-6.716-4.35-9.428-8.03C.86 10.42 1.2 6.9 4.1 5.2c2.24-1.31 4.86-.6 6.2 1.24.34.47.62.98.86 1.5.24-.52.52-1.03.86-1.5 1.34-1.84 3.96-2.55 6.2-1.24 2.9 1.7 3.24 5.22 1.53 7.77C18.72 16.65 12 21 12 21z";

const positions = [
  { top: "8%", left: "6%", size: 18, delay: 0 },
  { top: "22%", left: "88%", size: 14, delay: 0.4 },
  { top: "55%", left: "3%", size: 22, delay: 0.8 },
  { top: "70%", left: "92%", size: 16, delay: 1.2 },
  { top: "40%", left: "48%", size: 12, delay: 0.2 },
  { top: "85%", left: "20%", size: 18, delay: 1.6 },
  { top: "12%", left: "60%", size: 15, delay: 0.9 },
  { top: "65%", left: "70%", size: 20, delay: 0.5 },
];

export default function FloatingHearts({
  variant = "light",
  density = 8,
}: Props) {
  const color = variant === "light" ? "#F2A0C0" : "#C3A8E6";
  const items = positions.slice(0, density);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 24 24"
          width={p.size}
          height={p.size}
          style={{ position: "absolute", top: p.top, left: p.left, opacity: 0.35 }}
          className={i % 2 === 0 ? "animate-float" : "animate-floatSlow"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.2, delay: p.delay }}
        >
          <path d={HEART_PATH} fill={color} />
        </motion.svg>
      ))}
    </div>
  );
}
