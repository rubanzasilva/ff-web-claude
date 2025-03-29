// src/components/Team.tsx
import { FC } from 'react';
import Image from 'next/image';

type TeamMemberProps = {
  name: string;
  title: string;
  description: string;
  imagePath: string;
  socialLinks: {
    url: string;
    icon: React.ReactNode;
    label: string;
  }[];
};

const TeamMember: FC<TeamMemberProps> = ({ name, title, description, imagePath, socialLinks }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative h-64 w-full">
        <Image 
          src={imagePath} 
          alt={name} 
          fill
          style={{objectFit: 'cover',objectPosition: 'center top'}}
          priority
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <h4 className="text-lg font-medium text-orange-500 mb-4">{title}</h4>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              className="text-gray-600 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Team: FC = () => {
  // SVG Icons
  const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
  
  const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
  
  const WebsiteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  );
  
  const KaggleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-9.19-4.996c-.004-.004-.008-.006-.014-.01-.008-.007-.016-.012-.026-.018-.01-.005-.022-.012-.033-.014-.012-.006-.025-.008-.038-.011-.01-.002-.02-.002-.03-.002a.362.362 0 0 0-.4.004c-.019.005-.032.01-.05.018-.01.006-.018.01-.028.017-.014.01-.023.022-.035.034l-4.61 4.717 2.895 3.01a.397.397 0 0 0 .57 0l6.66-6.89a.393.393 0 0 0 .02-.555c-.006-.008-.015-.012-.023-.018a.366.366 0 0 0-.027-.022c-.01-.004-.017-.012-.027-.016a.364.364 0 0 0-.047-.02.364.364 0 0 0-.037-.01c-.014-.003-.027-.007-.04-.008a.374.374 0 0 0-.051 0c-.012.002-.025.004-.036.008-.014.003-.027.011-.04.017l-4.565 3.072-2.394-2.432zm-.232 11.043l-2.786-2.827-5.292-5.353a.376.376 0 0 1-.106-.267c0-.11.047-.208.106-.266a.392.392 0 0 1 .553 0l8.028 7.982"/>
    </svg>
  );

  const teamMembers = [
    {
      name: "Daniel Hosana",
      title: "Research Scientist",
      description: "Medical doctor with coding experience",
      imagePath: "/images/daniel.jpg",
      socialLinks: [
        {
          url: "", // Replace with actual LinkedIn URL
          icon: <LinkedInIcon />,
          label: "LinkedIn"
        },
        {
          url: "", // Replace with actual GitHub URL
          icon: <GitHubIcon />,
          label: "GitHub"
        },
        {
          url: "", // Replace with actual Kaggle URL
          icon: <KaggleIcon />,
          label: "Kaggle"
        }
      ]
    },
    {
      name: "Silver Rubanza",
      title: "Chief Technology Officer",
      description: "Machine learning engineer with experience building end to end machine learning solutions, sales and marketing experience.",
      imagePath: "/images/silverPotrait.jpeg",
      //imagePath: "https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/silverPotraitCompressed.webp",
      socialLinks: [
        {
          url: "https://www.rubanzasilver.com/", // Replace with your actual website URL
          icon: <WebsiteIcon />,
          label: "Website"
        },
        {
          url: "https://github.com/rubanzasilva", // Replace with your actual GitHub URL
          icon: <GitHubIcon />,
          label: "GitHub"
        },
        {
          url: "https://www.linkedin.com/in/silver-rubanza/", // Replace with your actual LinkedIn URL
          icon: <LinkedInIcon />,
          label: "LinkedIn"
        }
      ]
    },
    {
      name: "Wilson Ssukwe",
      title: "Operations Officer",
      description: "Experienced in running business operations at scale",
      imagePath: "/images/wilson.jpg",
      socialLinks: [
        {
          url: "", // Replace with Wilson's actual LinkedIn URL
          icon: <LinkedInIcon />,
          label: "LinkedIn"
        }
      ]
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
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;