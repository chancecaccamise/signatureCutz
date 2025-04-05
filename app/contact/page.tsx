// pages/index.tsx


import ContactPage from "@/components/contactPage";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";



export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      
      <Navbar/>
      <ContactPage/>



      <Footer/>
      

    </main>
  );
}