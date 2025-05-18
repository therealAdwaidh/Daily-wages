import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function JobPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col max-w-md mx-auto p-4 text-black">
      <button onClick={() => router.back()} className="text-2xl mb-2">←</button>

      <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          <Image
            src="/tap-placeholder.png"
            alt="Leaking Tap"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <div className="flex justify-center space-x-2 p-2">
          <div className="w-2 h-2 rounded-full bg-black"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        </div>
      </div>

      <h1 className="text-xl font-bold mb-2">Fix the Leaking Tap</h1>
      <span className="text-sm text-gray-500 mb-4">2 hrs ago</span>

      <div className="flex gap-2 mb-4">
        <span className="border border-gray-500 rounded-full px-2 py-1 text-sm">Plumbing</span>
        <span className="border border-gray-500 rounded-full px-2 py-1 text-sm">Water Leak</span>
      </div>

      <div className="text-sm space-y-2 mb-6">
        <p><strong>Location:</strong> Edapally, Kochi</p>
        <p><strong>Posted on:</strong> Apr 8, 2025 – 10.13pm</p>
        <p><strong>Needed when:</strong> <span className="text-red-600 font-semibold">Urgent</span></p>
        <p><strong>Description:</strong> I have a leaking tap in the kitchen, I need someone to fix the bloody tap. It has been a nightmare for me.</p>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">₹300</span>
        <button className="bg-black text-white px-4 py-2 rounded-xl">Send your quote</button>
      </div>
    </main>
  );
}
