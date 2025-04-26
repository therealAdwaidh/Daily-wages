import Image from "next/image";
import Link from "next/link";
import PopularProjects from "@/components/PopularProjects";
import SearchBar from "@/components/SearchBar";
import SatisfactionSection from "@/components/SatisfactionSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import CategoryGrid from "@/components/CategoryGrid";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="">
      <SearchBar/>
      </div>
      
      <CategoryGrid/>
      <PopularProjects/>
      <SatisfactionSection/>
      <HowItWorks/>
      <Footer/>
    </div>
  );
}
