// src/components/Values.tsx
import { FC } from 'react';

type ValueCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ValueCard: FC<ValueCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="text-orange-500 w-12 h-12 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Values: FC = () => {
  return (
    <section id="values" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-4xl font-bold text-orange-500 mb-12">Company Values</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ValueCard
            title="Solve hard problems"
            description="We break down complex challenges into small solvable problems."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M3.055 11H5a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1a2 2 0 0 1 2-2h1.945M8 3v1m4-1v1m4-1v1m-4 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            }
          />
          
          <ValueCard
            title="DIY approach"
            description="We believe in hands-on work and taking ownership of challenges."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M11 17a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2zm-6 0a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2zm0-6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2zm6 0a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2z" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            }
          />
          
          <ValueCard
            title="Open source support"
            description="We contribute to and benefit from the open source community."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            }
          />
          
          <ValueCard
            title="Learning through doing"
            description="We believe in practical experience as the most effective path to mastery."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            }
          />
          
          <ValueCard
            title="Clear communication"
            description="Explicit, clear communication without assumptions (Explicit over implicit)."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-3.18-.53c-.4-.13-.83-.13-1.18.07l-2.3 1.15a.96.96 0 0 1-1.39-1.07l.49-2.75c.11-.4.02-.84-.25-1.17A9.02 9.02 0 0 1 3 12c0-4.97 4.03-9 9-9s9 4.03 9 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            }
          />
          
          <ValueCard
            title="Data-driven decisions"
            description="We make decisions based on data and evidence rather than intuition."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Values;