import BannerDetails from "@/components/BannerDetails/BannerDetails";
import BannerDetailsL from "@/components/BannerDetailsleft/BannerDetailsL";
import Hero from "@/components/home/Hero";

import ConnectD from "@/components/homeSecLast/SecOneD/ConnectD";
import About from "@/components/homeSecTwo/About";
import Status from "@/components/homeSecTwo/Status";
import Helico from "@/components/homeSecThree/AboutDemo";

import dynamic from "next/dynamic";

const Collections = dynamic(() => import("@/components/homeSecCollections/Collections"), {
  ssr: false,
});

const Moving = dynamic(() => import("@/components/homeSecCollections/move/Move"), {
  ssr: false,
});


export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Status />
      <BannerDetails />
      <BannerDetailsL />
      <Collections />
      <Helico />
      <Moving />
      <ConnectD />
    </main>
  );
}
