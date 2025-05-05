// src/app/page.tsx
import { FC } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import Mission from '@/components/Mission';
import Approach from '@/components/Approach';
import Process from '@/components/Process';
import ResearchFocus from '@/components/ResearchFocus';
import UseCases from '@/components/UseCases';
import Roadmap from '@/components/Roadmap';
import Values from '@/components/Values';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import BlogPreview from '@/components/BlogPreview';

const Home: FC = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Vision />
      <Mission />
      <Approach />
      <Process />
      <ResearchFocus />
      <BlogPreview />
      <UseCases />
      <Roadmap />
      <Values />
      <Team />
      <Footer />
    </main>
  );
};

export default Home;