// pages/index.tsx


import Footer from "@/components/footer";
import { Gallery } from "@/components/gallery";
import Navbar from "@/components/navbar";



export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      
      <Navbar/>
      <Gallery/>




      <Footer/>
      

    </main>
  );
}