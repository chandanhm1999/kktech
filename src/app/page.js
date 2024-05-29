import BannerDetails from "@/components/BannerDetails/BannerDetails";
import BannerDetailsL from "@/components/BannerDetailsleft/BannerDetailsL";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/home/Hero";


export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <BannerDetails />
      <BannerDetailsL />
      <Footer />
    </main>
  );
}
