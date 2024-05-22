// Purpose: Home page of the website.
// Importing modules
import Image from "next/image";

// Importing components
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

// Importing images
import sadhuBaba from "@/public/sadhu-baba.jpg";
import pathik from "@/public/pathik.jpg";
import sadhuBaba2 from "@/public/sadhu-baba2.jpg";


// Home page component
export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="flex w-full xs:flex-wrap">
        <Image className="xs:p-2 min-w-[300px]" src={sadhuBaba2} alt="Sadhu Baba 2"/>
        <Image className="xs:p-2 min-w-[300px]" src={pathik} alt="Pathik" />
        <Image className="xs:p-2 min-w-[300px] md:hidden" src={sadhuBaba} alt="Sadhu Baba" />
      </div>
      <div className="flex w-full justify-center absolute md:bottom-[10%] py-10">
        <Button text="Load More!" />
      </div>
    </main>
  );
}
