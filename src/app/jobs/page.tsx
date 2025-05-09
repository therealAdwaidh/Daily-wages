// app/jobs/page.tsx
import JobCard from '@/components/JobCard';
import Link from 'next/link';
import StatusButtons from '@/components/StatusButtons';

type Job = {
  id: number;
  image:string;
  title: string;
  description: string;
  category: string;
  duration: string;
  jobType: string;
  location: string | null;
};

// app/jobs/page.tsx
// ... imports and type definitions stay the same
export default async function JobsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs`, {
    cache: 'no-store',
  });
  const jobs = await res.json();
  
  console.log('📦 jobs from API:', jobs);
  
  // Add mock data here, right after logging the API response
  const jobsToRender = jobs.length > 0 ? jobs : [
    {
      id: 1,
      image: "AdobeStock_197426992.webp",
      title: "Frontend Developer",
      description: "We're looking for a skilled frontend developer with experience in React and Next.js...",
      category: "Development",
      duration: "Full_Time",
      jobType: "remote",
      location: null
    },
    
  ];
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 bg-white">
      <h1 className="text-lg font-bold mb-6 text-black"> Jobs</h1>
      
      <div className="space-y-4 ">
        <StatusButtons/>
        {/* Use jobsToRender instead of jobs here */}
        {jobsToRender.map((job: Job) => (
          <Link key={job.id} href={`/jobs/${job.id}`}>
          <JobCard
             image={job.image} // <-- Added this line
            key={job.id}
            id={job.id}
            title={job.title}
            description={job.description}
            category={job.category}
            duration={job.duration}
            jobType={job.jobType}
            location={job.location}
          />
          </Link>
        ))}
      </div>
    </div>
  );
}