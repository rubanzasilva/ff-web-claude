// src/components/UseCases.tsx
import { FC } from 'react';

interface UseCaseProps {
  title: string;
  challenges: string[];
  ourSolution: React.ReactNode;
  quote: string;
  demoTitle: string;
}

const UseCase: FC<UseCaseProps> = ({ 
  title, 
  challenges, 
  ourSolution, 
  quote,
  demoTitle
}) => {
  return (
    <div className="mb-16 last:mb-0">
      <h3 className="text-2xl font-bold text-orange-500 mb-6">{title}</h3>
      
      <div className="grid md:grid-cols-7 gap-8">
        <div className="md:col-span-5 space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">The Challenge:</h4>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              {challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Our Solution:</h4>
            <div className="text-gray-700">
              {ourSolution}
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-lg">
            <blockquote className="italic text-gray-700">{quote}</blockquote>
          </div>
        </div>
        
        <div className="md:col-span-2 flex flex-col items-center justify-center bg-amber-50 rounded-lg p-6">
          <div className="text-orange-500 w-16 h-16 mb-4">
            {title.includes("Demand") ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 12h2v9H2v-9zm3 2h2v7H5v-7zm3-4h2v11H8V10zm3 2h2v9h-2v-9zm3-4h2v13h-2V8zm3 2h2v11h-2V10z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 10 7 10zm5-3c.83 0 1.5-.67 1.5-1.5S12.83 4 12 4s-1.5.67-1.5 1.5S11.17 7 12 7zm5 3c.83 0 1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5z" />
              </svg>
            )}
          </div>
          <div className="text-lg font-semibold text-orange-500 text-center">
            {demoTitle}
          </div>
        </div>
      </div>
    </div>
  );
};

const UseCases: FC = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-4xl font-bold text-orange-500 mb-12">Use Cases</h2>
        
        <UseCase
          title="Use Case 1: Intelligent Demand Forecasting"
          challenges={[
            "Supply chains are increasingly vulnerable to disruptions",
            "Overstocking leads to waste, tied-up capital, and missed opportunities",
            "Understocking creates fulfillment issues and customer dissatisfaction",
            "Current solutions: Traditional time series analysis like ARIMA, statistical methods"
          ]}
          ourSolution={
            <>
              <p className="mb-4">
                We leverage an enterprise&apos;s various data sources to build a dynamic inventory management 
                system leveraging advanced ML algorithms such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Large scale neural networks</li>
                <li>AutoML solutions</li>
                <li>Traditional gradient boosting machines</li>
              </ul>
              <p>
                Our system can forecast demand at all levels with high accuracy, predict when and what 
                customers will purchase, optimize pricing and customer experience, and ensure the right 
                products are in the right place at the right time.
              </p>
            </>
          }
          quote="Imagine predicting with pinpoint accuracy: What every customer will buy, when they'll make each purchase, which location they'll buy from, and what price they're willing to pay. This is the future we're building at Flexible Functions AI."
          demoTitle="Demand Forecasting Demo"
        />
        
        <UseCase
          title="Use Case 2: Assisted Differential Diagnosis"
          challenges={[
            "Medical diagnosis is complex and time-intensive",
            "Healthcare providers in resource-constrained settings face significant challenges",
            "Diagnostic errors can lead to improper treatment and poor patient outcomes",
            "Uganda and similar regions need accessible, reliable diagnostic support",
            "Current solutions: Done by humans"
          ]}
          ourSolution={
            <>
              <p className="mb-4">
                An advanced LLM application built on user inputs, disease labels and the 
                Uganda clinical guidelines that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Takes patient complaints as user input</li>
                <li>Processes symptoms through a neural network fine-tuned on medical corpus</li>
                <li>Incorporates Uganda clinical guidelines to ensure localized relevance</li>
                <li>Returns a comprehensive differential diagnosis to assist healthcare providers</li>
                <li>Leverages transfer learning by fine-tuning only the last layer of pre-trained models</li>
              </ul>
              <p className="mb-4">
                <strong>Technical Approach:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Start with large pre-trained language models</li>
                <li>Train on extensive medical corpus</li>
                <li>Fine-tune specifically on patient input patterns</li>
                <li>Integrate Uganda clinical guidelines and disease correlations</li>
                <li>Optimize for accuracy with minimal computational resources</li>
              </ul>
            </>
          }
          quote="We are going for this due to our technical expertise given that Daniel Hosana is a doctor, and as a coder Silver can execute on it."
          demoTitle="Diagnosis Assistant Demo"
        />
      </div>
    </section>
  );
};

export default UseCases;