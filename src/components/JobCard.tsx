'use client';

import Link from 'next/link';
import Image from 'next/image';

type JobCardProps = {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  jobType: string;
  location?: string | null;
  image: string; // <-- Added this line
};

export default function JobCard({
  id,
  title,
  description,
  category,
  duration,
  jobType,
  location,
  image, // <-- Added this line
}: JobCardProps) {
  return (
    <Link href={`/jobs/${id}`}>
      <div className="border-2 border-black p-4 rounded-xl shadow-sm hover:shadow-md transition bg-white">
        {/* Display image */}
        <div className="w-full h-48 relative mb-4 rounded-md overflow-hidden">
          <Image
            src={`/${image}`} // Adjust path if needed
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-lg text-gray-700 font-semibold mb-1">{title}</h2>
        <p className="text-sm text-gray-700">{description.slice(0, 100)}...</p>
        <div className="text-xs text-gray-500 mt-3 flex flex-wrap gap-3">
          <span className="bg-gray-100 px-2 py-1 rounded-full">📁 {category}</span>
          <span className="bg-gray-100 px-2 py-1 rounded-full">🕒 {duration.replace('_', ' ')}</span>
          <span className="bg-gray-100 px-2 py-1 rounded-full">
            {jobType === 'remote' ? '💻 Remote' : '📍 Physical'}
          </span>
          {location && jobType === 'physical' && (
            <span className="bg-gray-100 px-2 py-1 rounded-full">📍 {location}</span>
          )}
        </div>

        <div className="text-xs text-gray-500 mt-3 flex flex-wrap justify-center gap-5">
          <p className='border-2 border-black p-3 rounded-lg w-35 text-center'>Message</p>
          <p className='border-2 border-black p-3 rounded-lg bg-black text-white w-35 text-center'>Mark as complete</p>
        </div>
      </div>
    </Link>
  );
}
