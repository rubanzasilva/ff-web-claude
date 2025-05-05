// src/lib/blog.ts
export interface BlogPost {
    id: string;
    title: string;
    date: string;
    author: string;
    excerpt: string;
    externalUrl: string;
    coverImage?: string;
  }
  
  // Define your blog posts with links to external content
  const blogPosts: BlogPost[] = [
    {
      id: "symptom-disease-1",
      title: "Symptom-Disease Classification for Medical Diagnosis",
      date: "2025-04-05",
      author: "Silver Rubanza",
      excerpt: "Exploring how we built an AI system for assisted differential diagnosis using symptom-disease classification.",
      externalUrl: "https://nbsanity.com/static/476a4a160704607357fa6afe06955b75/symptom-disease-1.2.html",
      coverImage: "https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/symtd.webp" // Optional: you can host thumbnails locally
    },
    {
      id: "mental-health-classifier",
      title: "ML/AI classification model deployment and serving with BentoML and BentoCloud",
      date: "2025-02-01",
      author: "Silver Rubanza",
      excerpt: "Deploying and serving a mental health binary classification machine learning model using BentoML",
      externalUrl: "https://nbsanity.com/static/ac40bb062434c7446906d3eb8875e061/load.html",
      coverImage: "https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/dalle_deployment.webp"
    },
    {
      id: "demand-forecasting-regressor",
      title: "ML/AI regression model deployment and serving with Modal cloud",
      date: "2025-03-05",
      author: "Silver Rubanza",
      excerpt: "Deploying and serving a binary classification machine learning model using modal",
      externalUrl: "https://nbsanity.com/static/ceedbbdf5d29da76c0b4c0935516c841/explanation.html",
      coverImage: "https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/dalle_deployment.webp"
    },
    // Add more blog posts with external links as needed
  ];
  
  export function getAllBlogPosts(): BlogPost[] {
    // Sort by date, most recent first
    return [...blogPosts].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }