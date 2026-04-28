// src/components/Header.tsx
'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  showTabs?: boolean;
  tabs?: Array<{ id: string; label: string; num: string }>;
}

const Header: FC<HeaderProps> = ({ showTabs = false, tabs = [] }) => {
  const pathname = usePathname();

  return (
    <header
      className={`${showTabs ? 'sticky top-0 z-50 bg-white/92 backdrop-blur-[10px]' : ''} border-b border-[var(--ff-rule-soft)]`}
    >
      <div className="flex items-center justify-between px-16 py-6 md:px-16 max-md:px-6">
        <Link href="/" className="inline-flex items-center justify-center">
          <Image
            src="/ff_logo.png"
            alt="Flexible Functions AI"
            width={50}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        <nav className="flex items-center gap-7">
          <Link
            href="/"
            className={`text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors duration-[120ms] ${
              pathname === '/' ? 'text-[var(--ff-ink)]' : 'text-[var(--ff-muted)] hover:text-[var(--ff-ink)]'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors duration-[120ms] ${
              pathname === '/about' ? 'text-[var(--ff-ink)]' : 'text-[var(--ff-muted)] hover:text-[var(--ff-ink)]'
            }`}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors duration-[120ms] ${
              pathname === '/blog' ? 'text-[var(--ff-ink)]' : 'text-[var(--ff-muted)] hover:text-[var(--ff-ink)]'
            }`}
          >
            Blog
          </Link>
          <a
            href="mailto:hello@flexiblefunctions.ai"
            className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--ff-orange)] hover:text-[var(--ff-orange-hover)] transition-colors duration-[120ms]"
          >
            Contact us
          </a>
        </nav>
      </div>

      {showTabs && tabs.length > 0 && (
        <div
          className="flex gap-0 px-16 overflow-x-auto border-t border-[var(--ff-rule-soft)] scrollbar-hide"
          id="ff-tabs"
        >
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className="flex-shrink-0 py-3.5 mr-7 text-[10px] font-bold tracking-[0.14em] uppercase text-[var(--ff-muted)] border-b-2 border-transparent transition-all duration-[120ms] hover:text-[var(--ff-ink)] whitespace-nowrap ff-tab"
            >
              <span className="text-[var(--ff-orange)] mr-2 font-bold">
                {tab.num}
              </span>
              {tab.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
