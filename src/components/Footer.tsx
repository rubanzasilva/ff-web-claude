// src/components/Footer.tsx
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            {/* Replace text with logo */}
            <div className="mb-4">
              <Image 
                src="/ff_logo.png" 
                alt="Flexible Functions AI" 
                width={60}  // Slightly smaller for footer - initial ratio is 180,45
                height={15}
              />
            </div>
            <p className="!text-gray-300 hover:text-orange-400 transition-colors mb-4">
              Industrial Research & Development AI Lab building practical AI applications.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="mailto:suppport@flexiblefunctions.com" className="text-gray-300 hover:text-orange-400 transition-colors">
                  support@flexiblefunctions.com
                </a>
              </li>
              <li >
                <p className="!text-gray-300 hover:text-orange-400 transition-colors">
                  <a href='tel:+256768320199' className="hover:text-orange-400 transition-colors">
                  +256 768 320 199
                  </a>
                </p>
              </li>
              
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#vision" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="#approach" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="#research" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Research Focus
                </Link>
              </li>
              <li>
                <Link href="#use-cases" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="!text-gray-300">&copy; {currentYear} Flexible Functions AI Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;