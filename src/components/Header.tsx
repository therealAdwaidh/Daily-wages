import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white py-5 flex items-center body-main-text2 justify-around shadow-sm">
      {/* Logo */}
      

      <div className="location py-5">
      
      <Image src="/location.png" alt="Dailywages" className='logo-header2' width={60} height={20} />
      
        <p className='header-text-color text-xs mt-2'>Edapally,Kochi</p>
      </div>
      <div className="flex items-center justify-center lg:gap-2 gap-3">
      
        <Image src="/daily-wages-logo.png" alt="Dailywages" className='logo-header hidden' width={120} height={30} />
      </div>

      {/* Navigation */}
      <nav className=" md:flex items-center gap-6">
       
       
        <Link
          href="/become-a-tasker"
          className="border border-blue-700 header-text-color lg:px-4 px-1 py-2 rounded-md lg:text-sm text-xs font-semibold hover:bg-green-100"
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
