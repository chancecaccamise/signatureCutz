// pages/index.tsx


import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Services from "@/components/services";



export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      
      <Navbar/>
      <Services/>



      <Footer/>
      

    </main>
  );
}