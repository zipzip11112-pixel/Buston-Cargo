import { useState } from "react";
import { styles } from "./styles.js";
import {
  TopBar,
  HeroSection,
  StatsCards,
  VideoCard,
  MarketGrid,
  AddressCard,
  BottomNav,
} from "./components.js";

export default function BustonApp() {
  const [activeNav, setActiveNav] = useState(0);

  return (
    <>
      <style>{styles}</style>

      <div className="app">
        <TopBar />

        <main className="scroll-area" role="main">
          <HeroSection />
          <StatsCards />
          <VideoCard />
          <MarketGrid />
          <AddressCard />
        </main>

        <BottomNav activeNav={activeNav} setActiveNav={setActiveNav} />
      </div>
    </>
  );
}
