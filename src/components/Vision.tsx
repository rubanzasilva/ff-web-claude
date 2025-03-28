// src/components/Vision.tsx
import { FC } from 'react';

const Vision: FC = () => {
  return (
    <section id="vision" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-4xl font-bold text-orange-500 mb-12">Our Vision</h2>
        
        <div className="space-y-6 text-gray-700">
          <p className="text-xl font-medium">Deliver value with AI through practical use cases</p>
          
          <p className="text-lg">
           AI has been called the new electricity and has the potential to transform multiple industries. We believe we are entering one of the greatest 
            eras of technology.
          </p>
          
          <p className="text-lg">
            While we hear a lot about potential use cases, much of the 
            value in AI is still untapped and undiscovered. To unleash the potential of AI, we are bridging the 
            gap between research and real-world applications by building the application layer for AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;