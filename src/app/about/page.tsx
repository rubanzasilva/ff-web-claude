// src/app/about/page.tsx
'use client';

import { FC, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const tabs = [
  { id: 'mission', label: 'Mission', num: '01' },
  { id: 'approach', label: 'Approach', num: '02' },
  { id: 'process', label: 'Process', num: '03' },
  { id: 'research-focus', label: 'Research Focus', num: '04' },
  { id: 'use-cases', label: 'Use Cases', num: '05' },
  { id: 'roadmap', label: 'Roadmap', num: '06' },
  { id: 'team', label: 'Team', num: '07' },
  { id: 'values', label: 'Values', num: '08' },
];

const AboutPage: FC = () => {
  useEffect(() => {
    // Tab highlighting and scrolling logic
    const tabElements = Array.from(document.querySelectorAll('.ff-tab')) as HTMLAnchorElement[];
    const map = new Map<Element, HTMLAnchorElement>();

    tabElements.forEach((a) => {
      const id = a.getAttribute('href')?.slice(1);
      if (id) {
        const sec = document.getElementById(id);
        if (sec) map.set(sec, a);
      }
    });

    function setActive(tab: HTMLAnchorElement | null) {
      tabElements.forEach((t) => t.classList.remove('ff-tab-active'));
      if (tab) {
        tab.classList.add('ff-tab-active');
        const strip = document.getElementById('ff-tabs');
        if (strip) {
          const tRect = tab.getBoundingClientRect();
          const sRect = strip.getBoundingClientRect();
          const target = strip.scrollLeft + (tRect.left - sRect.left) - sRect.width / 2 + tRect.width / 2;
          strip.scrollTo({ left: target, behavior: 'smooth' });
        }
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActive(map.get(visible[0].target) || null);
      },
      {
        rootMargin: '-140px 0px -55% 0px',
        threshold: 0,
      }
    );

    map.forEach((_, sec) => io.observe(sec));

    // Default — first tab active on load
    if (tabElements.length) tabElements[0].classList.add('ff-tab-active');

    return () => io.disconnect();
  }, []);

  return (
    <div>
      <Header showTabs={true} tabs={tabs} />

      <section className="px-16 py-24 pb-14 max-w-[1100px] mx-auto max-md:px-6 max-md:py-14 max-md:pb-10">
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--ff-orange)] m-0 mb-6">
          About — Flexible Functions AI
        </p>
        <h1 className="text-6xl font-bold leading-[1.15] tracking-[-0.015em] m-0 max-w-[880px] max-md:text-4xl">
          A studio for applied
          <br />
          AI engineering.
          <span className="inline-block w-[0.55ch] h-[0.78em] bg-[var(--ff-orange)] align-[-0.08em] ml-[0.15ch] animate-[ffBlink_1.05s_steps(1)_infinite]"></span>
        </h1>
        <p className="mt-7 text-[17px] text-[rgba(0,0,0,0.7)] max-w-[560px]">
          What follows is the long version — how we think, what we work on, and who is behind it.
        </p>
      </section>

      {tabs.map((tab) => (
        <section
          key={tab.id}
          id={tab.id}
          className="px-16 py-24 max-w-[1100px] mx-auto border-t border-[var(--ff-rule-soft)] scroll-mt-[124px] max-md:px-6 max-md:py-16 max-md:scroll-mt-[120px]"
        >
          <div className="grid grid-cols-[140px_1fr] gap-8 items-baseline mb-10 max-md:grid-cols-1 max-md:gap-4">
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--ff-muted)]">
              {tab.num} / {tab.label}
            </span>
            <h2 className="text-4xl font-bold leading-[1.2] tracking-[-0.01em] m-0 max-md:text-[26px]">
              {tab.label}
            </h2>
          </div>
          <div className="grid grid-cols-[140px_1fr] gap-8 max-md:grid-cols-1 max-md:gap-4">
            <div></div>
            <div className="border border-dashed border-[var(--ff-rule)] bg-[var(--ff-cream)] px-10 py-10 min-h-[180px] flex items-center justify-start max-w-[720px] max-md:px-7 max-md:min-h-[140px]">
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[var(--ff-muted)] before:content-['//\_'] before:text-[var(--ff-orange)]">
                {tab.label} — content to be added
              </span>
            </div>
          </div>
        </section>
      ))}

      <Footer />

      <style jsx>{`
        .ff-tab-active {
          color: var(--ff-ink);
          border-bottom-color: var(--ff-orange);
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
