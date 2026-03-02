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
    </div>
  );
}
