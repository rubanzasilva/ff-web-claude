// src/components/Hero.tsx
import Link from 'next/link';
import { FC } from 'react';

// Define styles with Roboto Mono
const robotoMonoStyle = {
  fontFamily: "'Roboto Mono', monospace"
};

const Hero: FC = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-bold text-orange-500 text-center mb-8">
          FLEXIBLE<br />FUNCTIONS
        </h1>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700" style={robotoMonoStyle}>
            An industrial research and development AI lab building practical use cases using 
            current state of the art machine learning systems in different domains.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link 
            href="#approach" 
            className="bg-orange-500 text-white px-6 py-3 rounded text-center hover:bg-orange-600 transition-colors"
            style={robotoMonoStyle}
          >
            Our Approach
          </Link>
          <Link 
            href="#use-cases" 
            className="border border-orange-500 text-orange-500 px-6 py-3 rounded text-center hover:bg-orange-50 transition-colors"
            style={robotoMonoStyle}
          >
            View Use Cases
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;