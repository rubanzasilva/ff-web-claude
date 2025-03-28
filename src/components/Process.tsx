// src/components/Process.tsx
import { FC } from 'react';

type ProcessStepProps = {
  number: number;
  title: string;
  description: string;
};

const ProcessStep: FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-orange-500 font-semibold mr-4">
          {number}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Process: FC = () => {
  const steps = [
    {
      number: 1,
      title: "Open source",
      description: "We believe in sharing knowledge and contributing to the AI community."
    },
    {
      number: 2,
      title: "Build rapid ML pipelines",
      description: "Creating efficient pipelines for fast experimentation and iteration."
    },
    {
      number: 3, 
      title: "Leverage foundational models",
      description: "Leveraging the power of the latest foundation models to build new products."
    },
    {
      number: 4,
      title: "Develop open GUI low-code workflow tools",
      description: "Making AI easy to use for non-technical domain experts."
    },
    {
      number: 5,
      title: "Publish technical examples and guidance",
      description: "Sharing our learnings and best practices with the community."
    },
    {
      number: 6,
      title: "Benchmark with Kaggle competitions",
      description: "Testing our approaches against industry competition."
    },
    {
      number: 7,
      title: "Identify and build new use cases",
      description: "Continuously exploring new applications of AI technology."
    },
   
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-4xl font-bold text-orange-500 mb-12">What we are doing</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;