// src/app/blog/page.tsx
import { FC } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogList from '@/components/BlogList';

const BlogPage: FC = () => {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 max-w-6xl py-16 md:py-24">
        <h1 className="text-4xl font-bold text-orange-500 mb-12">Blog</h1>
        <BlogList />
      </div>
      <Footer />
    </main>
  );
};

export default BlogPage;