import Bonus from "@/components/Bonus";
import CountDown from "@/components/CountDown";
import FAQS from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JoinNow from "@/components/JoinNow";
import JoinNowCTA from "@/components/JoinNowCTA";
import JoinWorkshop from "@/components/JoinWorkshop";
import OfferCountdown from "@/components/OfferCountdown";
import Reserve from "@/components/Reserve";
import Results from "@/components/Results";
import SpotsLeft from "@/components/SpotsLeft";

export default function Home() {
  return (
    <div className="bg-[#000] py-10 relative">
      <img
        src="/layer__1.svg"
        alt="logo"
        className="absolute top-0 left-0 sm:hidden block"
      />
      <img
        src="/hero__layer__large.svg"
        alt="logo"
        className="absolute top-0 left-0 sm:block hidden sm:w-[35%] md:w-[30%] lg:w-[25%]"
      />
      <Hero />
      <JoinNow />
      <JoinWorkshop />
      <SpotsLeft />
      <Reserve />
      <JoinNowCTA />
      <Results />
      <Bonus />
      <FAQS />
      <JoinNowCTA />
      <Footer />
      <CountDown />
      <OfferCountdown />
    </div>
  );
}
