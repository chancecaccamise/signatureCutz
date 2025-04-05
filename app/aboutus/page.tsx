// pages/index.tsx


import AboutUs from "@/components/aboutus";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";



export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      
      <Navbar/>
      <AboutUs/>



      <Footer/>
      

    </main>
  );
}