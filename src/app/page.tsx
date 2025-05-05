import Image from "next/image";
import Link from "next/link";
import PopularProjects from "@/components/PopularProjects";
import SearchBar from "@/components/SearchBar";
import SatisfactionSection from "@/components/SatisfactionSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import CategoryGrid from "@/components/CategoryGrid";
import { PrismaClient } from '@prisma/client'
import type { Job } from '@prisma/client';



const prisma = new PrismaClient()

export default async function Home() {
  const jobs = await prisma.job.findMany({ orderBy: { createdAt: 'desc' } })
  return (
    <div className="bg-white">
      <div className="">
      <SearchBar/>
      </div>
      
      <CategoryGrid/>
      {jobs.map((job: Job) => (
  <div key={job.id}>
    <h2>{job.title}</h2>
    {/* etc. */}
  </div>
))}
      <PopularProjects/>
      <SatisfactionSection/>
      <HowItWorks/>
      <Footer/>
    </div>
  );
}
