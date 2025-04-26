import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white  flex items-center body-main-text justify-between shadow-sm">
      {/* Logo */}
      

      <div className="location">
      
      <Image src="/location.png" alt="Dailywages" className='logo-header' width={100} height={20} />
      
        <p className='header-text-color text-sm mt-2'>Edapally,Kochi</p>
      </div>
      <div className="flex items-center gap-2">
      
        <Image src="/daily-wages-logo.png" alt="Dailywages" className='logo-header' width={120} height={30} />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-6">
       
       
        <Link
          href="/become-a-tasker"
          className="border border-blue-700 header-text-color px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-100"
        >
           Sign up / Log in
        </Link>
      </nav>

      {/* Mobile Menu Placeholder */}
      <div className="md:hidden">
        {/* Optionally add a hamburger menu icon here */}
      </div>
    </header>
  );
}
