// src/components/Mission.tsx
import { FC } from 'react';

const Mission: FC = () => {
  return (
    <section id="mission" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-4xl font-bold text-orange-500 mb-12">Our Mission</h2>
        
        <div className="space-y-6 text-gray-700">
          <p className="text-lg">
            Build components of the AI application layer that bridge research with real-world applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;