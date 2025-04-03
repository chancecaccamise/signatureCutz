// pages/index.tsx


import MeetTheTeam from "@/components/MeetTheTeam";
import Navbar from "@/components/navbar";



export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      
      <Navbar/>
      <MeetTheTeam/>
      

    </main>
  );
}