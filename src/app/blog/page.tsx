// src/app/blog/page.tsx
import { FC } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPage: FC = () => {
  return (
    <div>
      <Header />

      <main className="px-16 py-[120px] pb-24 max-w-[1100px] mx-auto min-h-[60vh] max-md:px-6 max-md:py-14 max-md:pb-16">
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--ff-orange)] m-0 mb-6">
          Blog — Flexible Functions AI
        </p>
        <h1 className="text-6xl font-bold leading-[1.15] tracking-[-0.015em] m-0 max-w-[880px] max-md:text-4xl">
          Notes from the lab.
          <span className="inline-block w-[0.55ch] h-[0.78em] bg-[var(--ff-orange)] align-[-0.08em] ml-[0.15ch] animate-[ffBlink_1.05s_steps(1)_infinite]"></span>
        </h1>
        <p className="mt-7 text-[17px] text-[rgba(0,0,0,0.7)] max-w-[560px]">
          Working notes, project write-ups, and occasional opinions on applied AI.
        </p>

        <div className="mt-[72px] border border-dashed border-[var(--ff-rule)] bg-[var(--ff-cream)] px-10 py-14 max-w-[720px] max-md:px-6 max-md:py-8 max-md:mt-12">
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--ff-muted)] before:content-['//\_'] before:text-[var(--ff-orange)]">
            No posts yet
          </div>
          <h2 className="text-[22px] font-bold leading-[1.3] mt-3.5 m-0">
            First post is in progress.
          </h2>
          <p className="mt-4 text-sm text-[var(--ff-muted)] max-w-[460px]">
            We&rsquo;ll publish here when we have something worth saying. Check back soon.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;