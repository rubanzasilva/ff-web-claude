// src/components/ResearchFocus.tsx
import { FC } from 'react';

const ResearchFocus: FC = () => {
  return (
    <section id="research" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-4xl font-bold text-orange-500 mb-12">Research Focus</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Questions</h3>
            <ul className="space-y-4 list-disc pl-6 text-gray-700">
              <li>How can we make AI&apos;s predictive power useful in practice on a larger scale?</li>
              <li>How can we use foundation models to improve existing products or create new experiences?</li>
              <li>How can we make AI more efficient and cost-effective making it easier to apply in practice?</li>
              <li>How do we connect model results to business decisions?</li>
              <li>What metrics truly align with business outcomes?</li>
              <li>Which novel use cases have the highest ROI potential?</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Interesting Research Directions</h3>
            <ul className="space-y-4 list-disc pl-6 text-gray-700">
              <li>Multimodal models</li>
              <li>Small-data machine learning</li>
              <li>Unsupervised and reinforcement learning</li>
              <li>Synthetic data generation for edge cases</li>
              <li>Low-code workflow tools for rapid experimentation</li>
              <li>Better / finetuned prompting</li>
              <li>Applying AI to the Enterprise, Healthcare, Creative work (Branding, design) and Agricultural sectors</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchFocus;