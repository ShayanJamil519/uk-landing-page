import Hero from "@/components/Hero";
import JoinNow from "@/components/JoinNow";
import JoinWorkshop from "@/components/JoinWorkshop";

export default function Home() {
  return (
    <div className="bg-[#000] py-10 relative">
      <img src="/layer__1.svg" alt="logo" className="absolute top-0 left-0" />
      <Hero />
      <JoinNow />
      <JoinWorkshop />
    </div>
  );
}
