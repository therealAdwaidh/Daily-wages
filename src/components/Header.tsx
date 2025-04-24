import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white flex items-center border-bottom-1 justify-around px-6 py-4 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
      
        <Image src="/daily-wages-logo.png" alt="TaskRabbit Text" width={120} height={30} />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/services" className="text-sm font-semibold header-text-color hover:text-green-600">
          Services
        </Link>
        <Link href="/login" className="text-sm font-semibold header-text-color hover:text-green-600">
          Sign up / Log in
        </Link>
        <Link
          href="/become-a-tasker"
          className="border border-blue-700 header-text-color px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-100"
        >
          Become a Tasker
        </Link>
      </nav>

      {/* Mobile Menu Placeholder */}
      <div className="md:hidden">
        {/* Optionally add a hamburger menu icon here */}
      </div>
    </header>
  );
}
