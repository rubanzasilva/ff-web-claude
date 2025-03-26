// src/components/Team.tsx
import { FC } from 'react';
import Image from 'next/image';

type TeamMemberProps = {
  name: string;
  title: string;
  description: string;
  imagePath: string;
};

const TeamMember: FC<TeamMemberProps> = ({ name, title, description, imagePath }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative h-64 w-full">
        <Image 
          src={imagePath} 
          alt={name} 
          fill
          style={{objectFit: 'cover'}}
          priority
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <h4 className="text-lg font-medium text-orange-500 mb-4">{title}</h4>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Team: FC = () => {
  const teamMembers = [
    {
      name: "Daniel Hosana",
      title: "Data Scientist",
      description: "Medical doctor with coding experience",
      imagePath: "/images/daniel.jpg"
    },
    {
      name: "Silver Rubanza",
      title: "Chief Technology Officer",
      description: "Machine learning engineer with experience building end to end machine learning solutions",
      imagePath: "/images/silver.jpg"
    },
    {
      name: "Wilson Ssukwe",
      title: "Operations Officer",
      description: "Experienced in running business operations at scale",
      imagePath: "/images/wilson.jpg"
    }
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-4xl font-bold text-orange-500 mb-12">Founding Team</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map(member => (
            <TeamMember
              key={member.name}
              name={member.name}
              title={member.title}
              description={member.description}
              imagePath={member.imagePath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;