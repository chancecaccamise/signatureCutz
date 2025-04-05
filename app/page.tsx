// pages/index.tsx

import BentoGrid from "@/components/bento";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import History from "@/components/history";
import Navbar from "@/components/navbar";
import NflFeature from "@/components/nflFeature";
import { TestimonialSlider } from "@/components/testimonials";
import WhereToFindUs from "@/components/wheretofind";






export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      
      <Navbar/>
      <section>
        <HeroSection/>
      </section>
      <section>
      <BentoGrid/>
      </section>
      <section  className="bg-gray-900 text-white">
        <NflFeature/>
        <History/>
      </section>
      <section className=" pb-4">
        <TestimonialSlider/>
        <WhereToFindUs/>
      </section>

      <Footer/>
      
      

    </main>
  );
}