import Image from "next/image";
import Link from "next/link";
import PopularProjects from "@/components/PopularProjects";
import SearchBar from "@/components/SearchBar";
import SatisfactionSection from "@/components/SatisfactionSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/common/Footer";
import CategoryGrid from "@/components/CategoryGrid";
import { PrismaClient } from '@prisma/client'






export default async function Home() {
  
  return (
    <div className="backgroundcolor">
      <div className="pt-5">
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
