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
// Add or remove entries freely — the timeline lays itself out automatically,
// no matter how many memories you list here.
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
    caption: "The first time we met, and somehow I already knew.",
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
  {
    id: 7,
    src: "/images/big_occasion.jpeg",
    alt: "A quiet in-between moment",
    date: "A quiet moment",
    caption: "Not a big occasion — just you, close by, and that was enough.",
    rotate: "-rotate-2",
  },
  {
    id: 8,
    src: "/images/celebrated_together.jpeg",
    alt: "A celebration together",
    date: "A celebration",
    caption: "Some days call for celebrating, and I only ever want you there.",
    rotate: "rotate-3",
  },
  {
    id: 9,
    src: "/images/hard_day.jpeg",
    alt: "A hard day made easier",
    date: "A hard day, softened",
    caption: "You didn't fix it. You just stayed, and that fixed enough.",
    rotate: "-rotate-3",
  },
  {
    id: 10,
    src: "/images/somewhere_new.jpeg",
    alt: "Somewhere new together",
    date: "Somewhere new",
    caption:
      "New places feel less like adventures and more like home, with you in them.",
    rotate: "rotate-2",
  },
  {
    id: 11,
    src: "/images/festival.jpeg",
    alt: "A festival or holiday together",
    date: "A festival together",
    caption:
      "Every holiday has a little more color since you started spending them with me.",
    rotate: "-rotate-2",
  },
  {
    id: 12,
    src: "/images/looking_ahead.jpeg",
    alt: "Looking ahead, together",
    date: "Looking ahead",
    caption: "Whatever comes next, I already know I want you in it.",
    rotate: "rotate-3",
  },
  {
    id: 13,
    src: "/images/rainy.jpeg",
    alt: "A home day together",
    date: "A Home day",
    caption: "Even the gray days feel warmer with you next to me.",
    rotate: "-rotate-3",
  },
  {
    id: 14,
    src: "/images/meal.jpeg",
    alt: "Cooking or eating together",
    date: "A meal together",
    caption:
      "Some of my favorite conversations happen over the smallest meals.But that naga chicken was too spicy for us :)",
    rotate: "rotate-2",
  },
  {
    id: 15,
    src: "/images/stay.jpeg",
    alt: "no talk, just us",
    date: "No talk, just us",
    caption:
      "Sometimes, the best moments are the ones where we don't say a word, and just stay together.",
    rotate: "-rotate-2",
  },
  {
    id: 16,
    src: "/images/surprise.jpeg",
    alt: "A surprise moment",
    date: "A little surprise",
    caption:
      "I love catching you off guard almost as much as I love your reaction.",
    rotate: "rotate-3",
  },
  {
    id: 17,
    src: "/images/just_us.jpeg",
    alt: "Just us, doing nothing",
    date: "Just us",
    caption: "Doing absolutely nothing has never felt like this much.",
    rotate: "-rotate-3",
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
