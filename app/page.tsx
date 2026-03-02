'use client';
import EventShow from "./components/EventShow";
import InviteSection from "./components/inviteSection";
import EndDetails from "./components/EndDetails";
import ImageSection from "./components/ImageSection";
import TempHero from "./components/tempHero";
import SubDetails from "./components/SubDetails";

export default function Home() {
  return (
    <div >
      <div className="min-h-screen bg-[#f2e5d9] overflow-hidden">
     <TempHero/>
      <InviteSection />
     <EventShow/>
      <ImageSection />
      <SubDetails /> 
      <EndDetails/>
    </div>
    <div className="fixed top-5 left-5 z-50">
  <a href="https://invitearc.com/">
    <button className="flex items-center gap-3 border-white border-2 bg-white/0 backdrop-blur text-white px-6 py-3 rounded-full shadow-lg cursor-pointer">    
      <span className="text-3xl leading-none">←</span>
      <span className="text-[16px] font-semibold">
        Exit Preview
      </span>

    </button>
  </a>
</div>
    </div>
  );
}
