// src/app/page.tsx
'use client';

import { FC, FormEvent, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home: FC = () => {
  const [formState, setFormState] = useState<'form' | 'thanks'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setFormState('thanks');
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex flex-col items-center px-16 py-[120px] pb-20 text-center max-md:px-6 max-md:py-16">
        <p className="text-[88px] font-bold leading-[0.95] tracking-[-0.02em] uppercase text-[var(--ff-orange)] m-0 mb-8 max-w-[1100px] max-md:text-[44px] max-md:mb-5">
          Flexible Functions
        </p>
        <h1 className="text-[64px] font-bold leading-[1.3] tracking-[-0.01em] m-0 max-w-[920px] max-md:text-[32px]">
          We solve problems
          <br />
          with technology.
          <span className="inline-block w-[0.55ch] h-[0.78em] bg-[var(--ff-orange)] align-[-0.08em] ml-[0.15ch] animate-[ffBlink_1.05s_steps(1)_infinite]"></span>
        </h1>
        <p className="mt-8 text-[17px] leading-[1.7] text-[rgba(0,0,0,0.7)] max-w-[560px]">
          Tell us your business problem and we shall work hand in hand with you to craft a solution that fits how you work.
        </p>

        <div className="w-full max-w-[720px] mt-16 text-left">
          {formState === 'form' ? (
            <form
              className="bg-[var(--ff-paper)] text-[var(--ff-ink)] border border-[var(--ff-rule)] px-10 py-9 flex flex-col gap-[18px]"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                <div>
                  <label
                    htmlFor="ff-name"
                    className="block text-[10px] font-bold tracking-[0.12em] uppercase text-[var(--ff-muted)] mb-1"
                  >
                    01 / Name
                  </label>
                  <input
                    className="w-full py-3.5 px-0 bg-transparent border-none border-b border-[var(--ff-rule)] text-sm text-[var(--ff-ink)] font-medium outline-none box-border focus:border-b-[var(--ff-orange)]"
                    id="ff-name"
                    name="name"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="ff-email"
                    className="block text-[10px] font-bold tracking-[0.12em] uppercase text-[var(--ff-muted)] mb-1"
                  >
                    02 / Email
                  </label>
                  <input
                    className="w-full py-3.5 px-0 bg-transparent border-none border-b border-[var(--ff-rule)] text-sm text-[var(--ff-ink)] font-medium outline-none box-border focus:border-b-[var(--ff-orange)]"
                    id="ff-email"
                    name="email"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="ff-company"
                  className="block text-[10px] font-bold tracking-[0.12em] uppercase text-[var(--ff-muted)] mb-1"
                >
                  03 / Company
                </label>
                <input
                  className="w-full py-3.5 px-0 bg-transparent border-none border-b border-[var(--ff-rule)] text-sm text-[var(--ff-ink)] font-medium outline-none box-border focus:border-b-[var(--ff-orange)]"
                  id="ff-company"
                  name="company"
                  type="text"
                />
              </div>
              <div>
                <label
                  htmlFor="ff-problem"
                  className="block text-[10px] font-bold tracking-[0.12em] uppercase text-[var(--ff-muted)] mb-1"
                >
                  04 / Problem
                </label>
                <textarea
                  className="w-full pt-3.5 px-0 bg-transparent border-none border-b border-[var(--ff-rule)] text-sm text-[var(--ff-ink)] font-medium outline-none box-border resize-vertical leading-[1.7] focus:border-b-[var(--ff-orange)] placeholder:text-[rgba(0,0,0,0.3)]"
                  id="ff-problem"
                  name="problem"
                  rows={4}
                  required
                  placeholder="What are you trying to fix, automate, or unlock?"
                />
              </div>
              <div className="flex items-center justify-between mt-2 gap-4 max-md:flex-col max-md:items-start max-md:gap-4">
                <span className="text-[10px] tracking-[0.1em] uppercase text-[var(--ff-muted)]">
                  We read every submission.
                </span>
                <button
                  className="font-semibold text-xs tracking-[0.12em] uppercase bg-[var(--ff-orange)] text-white border-none px-6 py-3.5 cursor-pointer transition-all duration-[120ms] hover:bg-[var(--ff-orange-hover)] active:bg-[var(--ff-orange-active)] disabled:opacity-70 disabled:cursor-wait whitespace-nowrap"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending…' : 'Send problem →'}
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-[var(--ff-paper)] border border-[var(--ff-rule)] px-10 py-9 min-h-[280px] flex flex-col justify-center">
              <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--ff-orange)] mb-3.5">
                Received
              </div>
              <h2 className="text-[22px] font-bold leading-[1.3] max-w-[460px] m-0">
                Got it. We&rsquo;ll write back
                <br />
                within 48 hours.
                <span className="inline-block w-[0.55ch] h-[0.78em] bg-[var(--ff-orange)] align-[-0.08em] ml-[0.15ch] animate-[ffBlink_1.05s_steps(1)_infinite]"></span>
              </h2>
              <p className="mt-5 text-xs text-[var(--ff-muted)] leading-[1.7]">
                In the meantime, if anything is urgent —{' '}
                <a
                  href="mailto:hello@flexiblefunctions.ai"
                  className="text-xs transition-colors duration-[120ms] hover:text-[var(--ff-orange)] hover:underline hover:underline-offset-[3px]"
                >
                  hello@flexiblefunctions.ai
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;