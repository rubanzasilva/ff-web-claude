// src/components/Navbar.tsx - Logo Only Version
import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-8 md:px-16 bg-white shadow-sm">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/ff_logo.png" 
            alt="Flexible Functions AI" 
            width={50} 
            height={50}
            className="object-contain"
            priority
          />
        </Link>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link href="#vision" className="text-gray-700 hover:text-orange-500">
          Vision
        </Link>
        <Link href="#approach" className="text-gray-700 hover:text-orange-500">
          Approach
        </Link>
        <Link href="#research" className="text-gray-700 hover:text-orange-500">
          Research
        </Link>
        <Link href="/blog" className="text-gray-700 hover:text-orange-500">
          Blog
        </Link>
        <Link href="#use-cases" className="text-gray-700 hover:text-orange-500">
          Use Cases
        </Link>
        <Link href="#team" className="text-gray-700 hover:text-orange-500">
          Team
        </Link>
      </div>
      <div>
        <Link 
          href="#contact" 
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;