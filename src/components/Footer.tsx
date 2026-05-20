// src/components/Footer.tsx
import { FC } from 'react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-16 py-8 border-t border-[var(--ff-rule-soft)] flex justify-between items-center text-xs text-[var(--ff-muted)] max-md:px-6 max-md:py-6 max-md:flex-col max-md:gap-3 max-md:items-start">
      <span>© {currentYear} Flexible Functions AI</span>
      <span className="flex items-center gap-3">
        <a
          href="tel:+256768320199"
          className="transition-colors duration-[120ms] hover:text-[var(--ff-orange)] hover:underline hover:underline-offset-[3px]"
        >
          +256 768 320 199
        </a>
        <span className="text-[var(--ff-muted)]">·</span>
        <a
          href="mailto:hello@flexiblefunctions.com"
          className="transition-colors duration-[120ms] hover:text-[var(--ff-orange)] hover:underline hover:underline-offset-[3px]"
        >
          hello@flexiblefunctions.com
        </a>
      </span>
    </footer>
  );
};

export default Footer;