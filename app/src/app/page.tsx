"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import FloatingElements from "@/components/FloatingElements";
import MusicToggle from "@/components/MusicToggle";
import HeroSection from "@/sections/HeroSection";
import InvitationSection from "@/sections/InvitationSection";
import QuoteSection from "@/sections/QuoteSection";
import CountdownSection from "@/sections/CountdownSection";
import VenueSection from "@/sections/VenueSection";
import GreetingSection from "@/sections/GreetingSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setLoading(false)} />

      {!loading && (
        <SmoothScrollProvider>
          <main id="main-content">
            <FloatingElements />
            <MusicToggle />
            <HeroSection />
            <InvitationSection />
            <QuoteSection />
            <CountdownSection />
            <VenueSection />
            <GreetingSection />
          </main>
        </SmoothScrollProvider>
      )}
    </>
  );
}
