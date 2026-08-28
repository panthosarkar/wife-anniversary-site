// ─────────────────────────────────────────────────────────────
//  EDIT ME! Everything on the site is controlled from here.
// ─────────────────────────────────────────────────────────────

export const siteInfo = {
  herName: "My Dear Dipty Anwesha Munni",
  yourName: "Your's Cartoon Pantho Sarkar",
  anniversaryLabel: "Happy Anniversary",
  sinceYear: "2025", // the year you got together / married
  heroTagline: "Every love story is beautiful, but ours is my favorite.",
};

export type Memory = {
  id: number;
  src: string; // path inside /public/images
  alt: string;
  date: string; // small caption date, e.g. "June 2021"
  caption: string; // the little story under the photo
  rotate: string; // tailwind rotate class for the polaroid tilt
};

// Replace the "src" with your own photos placed in /public/images
// Keep the same filenames or update the paths below to match.
export const memories: Memory[] = [
  {
    id: 0,
    src: "/images/first_time_i_saw.jpg",
    alt: "First time I saw you",
    date: "Where it began",
    caption:
      "The first time I saw you, and something magical was already happening inside me.",
    rotate: "-rotate-3",
  },
  {
    id: 1,
    src: "/images/when_we_met.jpeg",
    alt: "The day we met",
    date: "Where it began",
    caption: "The first time I saw you, and somehow I already knew.",
    rotate: "-rotate-3",
  },
  {
    id: 2,
    src: "/images/first_trip.jpeg",
    alt: "Our first trip together",
    date: "Our first trip",
    caption:
      "Getting lost together turned out to be my favorite way to travel.",
    rotate: "rotate-2",
  },
  {
    id: 3,
    src: "/images/a_random_day.jpeg",
    alt: "A silly, ordinary day",
    date: "A random day",
    caption: "No plans, no place to be — just us, and that was everything.",
    rotate: "-rotate-2",
  },
  {
    id: 4,
    src: "/images/big_day.jpeg",
    alt: "The proposal / a big milestone",
    date: "The big moment",
    caption: "My hands were shaking, my heart wasn't.",
    rotate: "rotate-3",
  },
  {
    id: 5,
    src: "/images/best_day.jpeg",
    alt: "Our wedding day",
    date: "Every Day is the best day with you",
    caption:
      "I promised you and myself, and I'd choose you again in every lifetime.",
    rotate: "-rotate-3",
  },
  {
    id: 6,
    src: "/images/now.jpeg",
    alt: "Us today",
    date: "Right now",
    caption: "Still you. Still me. Still completely in love.",
    rotate: "rotate-2",
  },
];

export const loveNotes: string[] = [
  "The way you laugh at your own jokes before you finish telling them.",
  "How you always share the last bite with me, even when you wanted it too.",
  "The way you hum while you're doing somthing and don't even notice.",
  "You make ordinary days feel like they matter.",
  "Every single time you reach for my hand without even thinking about it.",
  "You still get excited to tell me about your day.",
  "The way you look at me when you think I don't notice.",
  "How you always know when I need a hug.",
  "The way you make me feel like the most important person in the world.",
  "You make me want to be a better person, every single day.",
  "The way you make me feel like the luckiest person alive.",
  "How you always know how to make me smile, even on my worst days.",
];

export const closingLetter = `My love,

A year has passed, and somehow I love you more today than I did
yesterday — which didn't seem possible until it happened again and again.

Thank you for choosing me, for staying through the ordinary Tuesdays and
the extraordinary ones, and for making every place feel like home simply
because you're in it.

Here's to every year still ahead of us.

Forever yours.`;
