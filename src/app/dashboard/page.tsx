import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { registerUser } from '@/lib/auth/registerUser';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic'; // ensures server-side fetching

export default async function DashboardPage() {
  const session = await getServerSession(registerUser as any);
  
  // If no session exists, redirect to login
  if (!session || !session.user) {
    redirect('/login');
  }
  
  // Use the actual user ID from the session
  const userId = session.user.id;

  const [myJobs, myApplications] = await Promise.all([
    prisma.job.findMany({
      where: { createdById: userId },
      orderBy: { createdAt: 'desc' },
    }),
    prisma.application.findMany({
      where: { userId },
      include: {
        job: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    }),
  ]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">🧑‍💼 My Dashboard</h1>
        <button 
          onClick={() => signOut({ callbackUrl: '/' })} 
          className="px-4 py-2 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200"
        >
          Logout
        </button>
      </div>

      {/* User greeting */}
      <p className="mb-6">Welcome, {session.user.name || session.user.email}!</p>
      
      {/* Jobs I Posted */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">📢 Jobs I Posted</h2>
        {myJobs.length === 0 ? (
          <p className="text-gray-600">You haven't posted any jobs yet.</p>
        ) : (
          <ul className="space-y-2">
            {myJobs.map((job) => (
              <li key={job.id} className="border p-4 rounded-md shadow-sm">
                <Link href={`/jobs/${job.id}`}>
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                </Link>
                <p className="text-sm text-gray-600">{job.description}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Jobs I Applied To */}
      <section>
        <h2 className="text-xl font-semibold mb-2">🛠️ Jobs I Applied To</h2>
        {myApplications.length === 0 ? (
          <p className="text-gray-600">You haven't applied to any jobs yet.</p>
        ) : (
          <ul className="space-y-2">
            {myApplications.map((application) => (
              <li key={application.id} className="border p-4 rounded-md shadow-sm">
                <Link href={`/jobs/${application.job.id}`}>
                  <h3 className="text-lg font-semibold">{application.job.title}</h3>
                </Link>
                <p className="text-sm text-gray-600">
                  Applied on: {new Date(application.createdAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}