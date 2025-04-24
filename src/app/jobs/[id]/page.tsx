// src/app/jobs/[id]/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type JobDetailProps = {
  params: { id: string };
};

export default function JobDetailPage({ params }: JobDetailProps) {
  const jobId = Number(params.id);
  const [applicant, setApplicant] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Validate inputs
    if (!applicant || !email) {
      setMessage('Please fill in both fields.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        body: JSON.stringify({ jobId, applicant, email }),
        headers: { 'Content-Type': 'application/json' },
      });
      const result = await response.json();
      if (response.ok) {
        setMessage('Your application has been submitted!');
      } else {
        setMessage(result.message || 'Failed to apply. Please try again.');
      }
    } catch (error) {
      setMessage('Failed to apply. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Job Details</h1>
      {/* Display job details */}
      <div className="space-y-4">
        <p><strong>Job ID:</strong> {jobId}</p>
        {/* Display more job details as you did before */}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Apply to this Job</h2>
        <form onSubmit={handleApply} className="space-y-4">
          <div>
            <label htmlFor="applicant" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="applicant"
              name="applicant"
              value={applicant}
              onChange={(e) => setApplicant(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 bg-blue-500 text-white rounded-md ${loading ? 'opacity-50' : ''}`}
            disabled={loading}
          >
            {loading ? 'Applying...' : 'Apply'}
          </button>
        </form>

        {message && <p className="mt-4 text-center text-sm text-gray-700">{message}</p>}
      </div>
    </div>
  );
}
