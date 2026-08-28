import Hero from "@/components/Hero";
import StoryTimeline from "@/components/StoryTimeline";
import LoveNotes from "@/components/LoveNotes";
import ClosingSection from "@/components/ClosingSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <StoryTimeline />
      <LoveNotes />
      <ClosingSection />
    </main>
  );
}
