import Image from "next/image";
import Link from "next/link";
import PopularProjects from "@/components/PopularProjects";
import SearchBar from "@/components/SearchBar";
import SatisfactionSection from "@/components/SatisfactionSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <SearchBar/>
      <PopularProjects/>
      <SatisfactionSection/>
      <HowItWorks/>
      <Footer/>
    </div>
  );
}
