// src/components/Approach.tsx
import { FC } from 'react';

const Approach: FC = () => {
  return (
    <section id="approach" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-4xl font-bold text-orange-500 mb-12">Our Approach: Learning By Doing</h2>
        
        <div className="space-y-6 text-gray-700 mb-12">
          <p className="text-lg">
            Flexible Functions is an industrial research and development AI lab building practical use cases using
            current state of the art machine learning systems in different domains. We do this while researching
            how to build new user products and experiences while integrating the use of cutting-edge foundation models.
          </p>
          
          <p className="text-lg">
            We expect the practical aspect of building use cases for AI will inform research on how to take advantage
            of AI to build new products and experiences and how to tackle the challenges that currently prevent AI 
            from being more prevalent across various industries.
          </p>
          
          <p className="text-lg">
            We believe we can only build useful applications by engaging end users and domain experts and solving
            what problems we can help them tackle using AI. This approach will increase the adoption of AI and in
            turn lead to increased investment in scaling the field.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-amber-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-orange-500 mb-6">We believe useful AI applications emerge when we:</h3>
            <ul className="list-disc pl-6 space-y-4">
              <li>Engage with end users and domain experts</li>
              <li>Identify their most pressing challenges</li>
              <li>Apply AI solutions to these specific problems</li>
              <li>Iterate based on real-world feedback</li>
              <li>Scale successes to similar use cases</li>
            </ul>
          </div>
          
          <div className="bg-amber-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-orange-500 mb-6">The Problem</h3>
            <ul className="list-disc pl-6 space-y-4">
              <li>AI is called &ldquo;the new electricity&rdquo; with transformative potential</li>
              <li>Despite countless theoretical use cases, practical implementation lags behind</li>
              <li>Most AI value remains untapped and undiscovered</li>
              <li>There&apos;s a significant gap between research and real-world applications</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;