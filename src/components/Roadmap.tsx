import React from 'react';

// Desktop/Tablet Phase Component (left/right alternating)
const DesktopRoadmapPhase = ({ phase, title, description, alignment }) => {
  return (
    <div className={`relative flex ${alignment === 'left' ? 'justify-end md:pr-12' : 'justify-start md:pl-12'} my-8`}>
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-orange-400 -translate-x-1/2"></div>
      
      <div className={`absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-orange-400 z-10`}></div>
      
      <div className={`w-full md:w-5/12 bg-white p-6 rounded-lg shadow-sm ${alignment === 'right' ? 'md:ml-12' : 'md:mr-12'}`}>
        <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-orange-500 text-sm font-medium mb-4">
          Phase {phase}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

// Mobile Phase Component (vertical stacked)
const MobileRoadmapPhase = ({ phase, title, description }) => {
  return (
    <div className="relative mb-16 last:mb-0">
      {/* Timeline elements */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-300"></div>
      <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-orange-500 -ml-1.5 z-10"></div>
      
      {/* Content */}
      <div className="pl-12">
        <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-orange-500 text-sm font-medium mb-3">
          Phase {phase}
        </span>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const Roadmap = () => {
  const phases = [
    {
      phase: 1,
      title: "Launch initial use cases",
      description: "Launch initial use cases in inventory management and healthcare"
    },
    {
      phase: 2,
      title: "Expand our toolkit",
      description: "Expand our toolkit with open-source workflow solutions"
    },
    {
      phase: 3,
      title: "Build an ecosystem",
      description: "Build an ecosystem of industry-specific AI applications"
    },
    {
      phase: 4,
      title: "Partner with domain experts",
      description: "Partner with domain experts to penetrate new markets"
    },
    {
      phase: 5,
      title: "Develop a comprehensive platform",
      description: "Develop a comprehensive AI application layer platform"
    }
  ];

  return (
    <section id="roadmap" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-4xl font-bold text-orange-500 mb-12">Roadmap</h2>
        
        {/* Mobile View - Only visible on small screens */}
        <div className="md:hidden">
          {phases.map((phase) => (
            <MobileRoadmapPhase
              key={phase.phase}
              phase={phase.phase}
              title={phase.title}
              description={phase.description}
            />
          ))}
        </div>
        
        {/* Desktop/Tablet View - Hidden on mobile */}
        <div className="hidden md:block relative">
          {phases.map((phase, index) => (
            <DesktopRoadmapPhase
              key={phase.phase}
              phase={phase.phase}
              title={phase.title}
              description={phase.description}
              alignment={index % 2 === 0 ? 'right' : 'left'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;