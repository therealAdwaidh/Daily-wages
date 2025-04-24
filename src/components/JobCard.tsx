'use client';

import Link from 'next/link';

type JobCardProps = {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  jobType: string;
  location?: string | null;
};

export default function JobCard({
  id,
  title,
  description,
  category,
  duration,
  jobType,
  location,
}: JobCardProps) {
  return (
    <Link href={`/jobs/${id}`}>
      <div className="border p-4 rounded-xl shadow-sm hover:shadow-md transition bg-white">
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
      </div>
    </Link>
  );
}
