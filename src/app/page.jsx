

import BannerDetails from "@/components/BannerDetails/BannerDetails";
import BannerDetailsL from "@/components/BannerDetailsleft/BannerDetailsL";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/home/Hero";

import dynamic from "next/dynamic";

const Collections = dynamic(() => import("@/components/homeSecCollections/Collections"), {
  ssr: false,
});


export default function Home() {
  return (
    <main className="">
      <Hero />
      <BannerDetails />
      <BannerDetailsL />
      <Collections />
    </main>
  );
}
