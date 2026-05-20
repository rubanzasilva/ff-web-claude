// src/app/about/page.tsx
'use client';

import { FC, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const tabs = [
  { id: 'problem', label: 'Problem', num: '01' },
  { id: 'bottlenecks', label: 'Bottlenecks', num: '02' },
  { id: 'approach', label: 'Approach', num: '03' },
  { id: 'mission', label: 'Mission & Vision', num: '04' },
  { id: 'beliefs', label: 'Beliefs & Values', num: '05' },
  { id: 'how-we-operate', label: 'How We Operate', num: '06' },
  { id: 'what-we-are-not', label: 'What We Are Not', num: '07' },
];

const AboutPage: FC = () => {
  useEffect(() => {
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

    if (tabElements.length) tabElements[0].classList.add('ff-tab-active');

    return () => io.disconnect();
  }, []);

  return (
    <div>
      <Header showTabs={true} tabs={tabs} />

      <section className="px-16 py-24 pb-14 max-w-[1100px] mx-auto max-md:px-6 max-md:py-14 max-md:pb-10">
        <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--ff-orange)] m-0 mb-6">
          About — Flexible Functions
        </p>
        <h1 className="text-6xl font-bold leading-[1.15] tracking-[-0.015em] m-0 max-w-[880px] max-md:text-4xl">
          Closing the gap between
          <br />
          AI hype and AI adoption.
          <span className="inline-block w-[0.55ch] h-[0.78em] bg-[var(--ff-orange)] align-[-0.08em] ml-[0.15ch] animate-[ffBlink_1.05s_steps(1)_infinite]"></span>
        </h1>
        <p className="mt-7 text-[17px] text-[rgba(0,0,0,0.7)] max-w-[560px]">
          We build software the way it always should have been built — problem-first, co-designed with domain experts, and built around intelligence that&rsquo;s only now possible.
        </p>
      </section>

      {/* 01 — Problem */}
      <section
        id="problem"
        className="px-16 py-24 max-w-[1100px] mx-auto border-t border-[var(--ff-rule-soft)] scroll-mt-[124px] max-md:px-6 max-md:py-16 max-md:scroll-mt-[120px]"
      >
        <div className="grid grid-cols-[140px_1fr] gap-8 items-baseline mb-10 max-md:grid-cols-1 max-md:gap-4">
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--ff-muted)]">
            01 / Problem
          </span>
          <h2 className="text-4xl font-bold leading-[1.2] tracking-[-0.01em] m-0 max-md:text-[26px]">
            The Problem
          </h2>
        </div>
        <div className="grid grid-cols-[140px_1fr] gap-8 max-md:grid-cols-1 max-md:gap-4">
          <div></div>
          <div className="max-w-[720px] space-y-6 text-[15px] leading-[1.8] text-[rgba(0,0,0,0.75)]">
            <p>
              AI is everywhere in conversation but almost nowhere in practice for SMEs. For most, &ldquo;using AI&rdquo; means employees occasionally opening ChatGPT and asking a question — not improving a business process, automating an existing workflow, or unlocking work that wasn&rsquo;t possible before.
            </p>
            <p>
              The deeper question is <em>why</em>, and the answer points back one layer: AI adoption is rare because tech adoption itself is shallow. Many businesses adopt solutions for isolated parts of their operations while the rest run on manual processes that software could automate.
            </p>
            <p>
              The easy explanation is cost, but it doesn&rsquo;t hold. A tech solution that genuinely fits a business should eventually make it more profitable, paying for itself many times over. Tech illiteracy explains some cases, but only some — many business owners already use accounting, point-of-sale, or invoicing tools daily. They&rsquo;re clearly willing to adopt software that promises to streamline their critical processes.
            </p>
            <p className="font-semibold text-[var(--ff-ink)]">
              The real problem is systemic.
            </p>
            <p>
              Existing software is built tech-first, designed around a generic template of what a &ldquo;business in this category&rdquo; looks like, with little or no input from the people who actually do the work. The result is interchangeable products that &ldquo;all feel the same with a different name&rdquo; — tools the business is forced to bend around, instead of tools that bend around and adapt to the business.
            </p>
            <h3 className="text-lg font-bold text-[var(--ff-ink)] mt-10 mb-3">
              Why this matters most for SMEs in emerging markets
            </h3>
            <p>
              SMEs stand to gain disproportionately from technology — first as cost savings through streamlined processes (fewer errors, less manual data entry, faster fulfillment), then through increased margins brought about by better data-driven decisions, improved customer retention, acquisition, and new revenue streams made possible by using their data to create new products and experiences that were previously not possible. This can help them leapfrog bigger businesses and compete just as well.
            </p>
            <p>
              Current under-adoption isn&rsquo;t just a missed efficiency — it&rsquo;s a structural reason many small businesses stay small.
            </p>
            <p>
              Until software is built problem-first, co-designed with domain experts, able to remember and pull in context, and adapt to how the business actually works, tech adoption will remain siloed for certain tasks — and upstream, AI in SMEs will remain what it is today: a chatbot employees talk to occasionally, not a capability woven into how the business runs.
            </p>
            <p className="font-semibold text-[var(--ff-ink)]">
              Flexible Functions exists to close that gap.
            </p>
            <p>
              We build software the way it always should have been built — problem-first, co-designed with domain experts, and built from the ground up around a kind of intelligence that&rsquo;s only now possible. Software that pulls in context, understands what the business is trying to do, and helps proactively without waiting to be asked.
            </p>
            <p>
              Our team ships solutions while researching and studying what works, feeding those learnings back into how we build. Every problem solved makes us better at solving the next one.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Bottlenecks */}
      <section
        id="bottlenecks"
        className="px-16 py-24 max-w-[1100px] mx-auto border-t border-[var(--ff-rule-soft)] scroll-mt-[124px] max-md:px-6 max-md:py-16 max-md:scroll-mt-[120px]"
      >
        <div className="grid grid-cols-[140px_1fr] gap-8 items-baseline mb-10 max-md:grid-cols-1 max-md:gap-4">
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--ff-muted)]">
            02 / Bottlenecks
          </span>
          <h2 className="text-4xl font-bold leading-[1.2] tracking-[-0.01em] m-0 max-md:text-[26px]">
            Key Bottlenecks to Tech Adoption
          </h2>
        </div>
        <div className="grid grid-cols-[140px_1fr] gap-8 max-md:grid-cols-1 max-md:gap-4">
          <div></div>
          <div className="max-w-[720px] space-y-10 text-[15px] leading-[1.8] text-[rgba(0,0,0,0.75)]">
            <div>
              <h3 className="text-sm font-bold tracking-[0.08em] uppercase text-[var(--ff-orange)] mb-6">
                Layer 1: Root Causes
              </h3>
              <p className="text-[13px] text-[var(--ff-muted)] mb-8">
                These are the origin of most downstream failures. Fix these and the others become manageable.
              </p>

              <div className="space-y-8">
                <div className="border-l-2 border-[var(--ff-orange)] pl-6">
                  <h4 className="font-bold text-[var(--ff-ink)] mb-2">1. Lack of Business Alignment</h4>
                  <p className="mb-3">Businesses hear of a term like AI, Cloud etc and start with &ldquo;How can we use technology X&rdquo; instead of &ldquo;What challenge do we want to overcome?&rdquo;</p>
                  <p className="text-[13px] text-[var(--ff-muted)] mb-2"><strong>Why it fails:</strong> You build software that solves the wrong problem.</p>
                  <p className="text-[13px] text-[var(--ff-muted)]"><strong>Solution:</strong> Start with the problem, not the technology. Define success metrics upfront. Tech teams should partner with domain experts and line managers from day one. Focus on narrow, high-value workflows first. The tech is chosen last, after the problem and desired outcome are defined.</p>
                </div>

                <div className="border-l-2 border-[var(--ff-orange)] pl-6">
                  <h4 className="font-bold text-[var(--ff-ink)] mb-2">2. Lack of Domain Expertise in Product Teams</h4>
                  <p className="mb-3">Solutions are built without meaningful input from the people who do the work daily.</p>
                  <p className="text-[13px] text-[var(--ff-muted)] mb-2"><strong>Why it fails:</strong> Every business is different. Software tools are designed around a generic template, not how the business actually operates, resulting in products not customized to solve a particular business&rsquo;s problems.</p>
                  <p className="text-[13px] text-[var(--ff-muted)]"><strong>Solution:</strong> Co-build with domain experts from day one. They are not consultants we check in with. They are partners who shape the system.</p>
                </div>

                <div className="border-l-2 border-[var(--ff-orange)] pl-6">
                  <h4 className="font-bold text-[var(--ff-ink)] mb-2">3. Data Layer Problems</h4>
                  <p className="mb-3">The structured, queryable record of operations is missing, fragmented, or unreliable.</p>
                  <p className="text-[13px] text-[var(--ff-muted)] mb-2"><strong>Why it fails:</strong> Software algorithms lack reliable context to work with. &ldquo;Garbage in, garbage out.&rdquo;</p>
                  <p className="text-[13px] text-[var(--ff-muted)]"><strong>Solution:</strong> Build the data layer first across all systems of record and engagement. Base systems are the data infrastructure; AI is then built on top once data is flowing. Own data capture upstream so quality is engineered in, not patched downstream.</p>
                </div>

                <div className="border-l-2 border-[var(--ff-orange)] pl-6">
                  <h4 className="font-bold text-[var(--ff-ink)] mb-2">4. Context / Learning Gap</h4>
                  <p className="mb-3">Many software tools can&rsquo;t remember context, adapt to workflows, or improve over time because every session starts from zero.</p>
                  <p className="text-[13px] text-[var(--ff-muted)] mb-2"><strong>Why it fails:</strong> Software that doesn&rsquo;t get better over time feels dumb. Users resist tools that don&rsquo;t learn. Value fails to compound because knowledge doesn&rsquo;t persist.</p>
                  <p className="text-[13px] text-[var(--ff-muted)]"><strong>Solution:</strong> Build systems that remember context. Where they can&rsquo;t hold it directly, they should know where to fetch it from and have tools to do so. Software that gets smarter — not a static tool.</p>
                </div>

                <div className="border-l-2 border-[var(--ff-orange)] pl-6">
                  <h4 className="font-bold text-[var(--ff-ink)] mb-2">5. Measurement Gap</h4>
                  <p className="mb-3">Organizations use traditional ROI metrics with short timeframes to evaluate software that delivers value differently.</p>
                  <p className="text-[13px] text-[var(--ff-muted)] mb-2"><strong>Why it fails:</strong> Projects get killed for &ldquo;not showing ROI&rdquo; when they&rsquo;re actually delivering substantial value that isn&rsquo;t being measured.</p>
                  <p className="text-[13px] text-[var(--ff-muted)]"><strong>Solution:</strong> Design measurement frameworks upfront tied to specific business decisions. Set realistic timeframes. Track cost avoidance and time reclaimed, not just revenue.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-[0.08em] uppercase text-[var(--ff-orange)] mb-6">
                Layer 2: Direct Consequence
              </h3>
              <p className="text-[13px] text-[var(--ff-muted)] mb-8">
                What every unaddressed root cause compounds into.
              </p>

              <div className="border-l-2 border-[var(--ff-rule)] pl-6">
                <h4 className="font-bold text-[var(--ff-ink)] mb-2">6. Change Management</h4>
                <p className="mb-3">Even working software tools go unused.</p>
                <p className="text-[13px] text-[var(--ff-muted)] mb-2"><strong>Why it fails:</strong> When tools don&rsquo;t fit, don&rsquo;t remember, and can&rsquo;t prove their value, trust evaporates and adoption stalls.</p>
                <p className="text-[13px] text-[var(--ff-muted)]"><strong>Solution:</strong> Address the root causes first. Change management gets dramatically easier when the tool actually fits. Secure buy-in early. Empower line managers closest to the work.</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-[0.08em] uppercase text-[var(--ff-orange)] mb-6">
                Layer 3: Operational Bottlenecks
              </h3>

              <div className="space-y-8">
                <div className="border-l-2 border-[var(--ff-rule)] pl-6">
                  <h4 className="font-bold text-[var(--ff-ink)] mb-2">7. Privacy & Security</h4>
                  <p className="mb-3">Sensitive data faces regulatory constraints (HIPAA, GDPR, local data laws).</p>
                  <p className="text-[13px] text-[var(--ff-muted)]"><strong>Solution:</strong> Treat compliance as baseline from the start. Consider building on edge software. Partner with domain experts who understand the regulations.</p>
                </div>

                <div className="border-l-2 border-[var(--ff-rule)] pl-6">
                  <h4 className="font-bold text-[var(--ff-ink)] mb-2">8. Cost Barriers</h4>
                  <p className="mb-3">Many tech solutions are priced and architected for well-funded labs and large enterprises.</p>
                  <p className="text-[13px] text-[var(--ff-muted)]"><strong>Solution:</strong> We actively research how to build resource and cost-efficient solutions, optimizing for cost effectiveness as a core constraint of the markets we serve, not a stylistic preference.</p>
                </div>

                <div className="border-l-2 border-[var(--ff-rule)] pl-6">
                  <h4 className="font-bold text-[var(--ff-ink)] mb-2">9. Operationalization Gap</h4>
                  <p className="mb-3">Moving from experiment to reliable system requires different skills.</p>
                  <p className="text-[13px] text-[var(--ff-muted)]"><strong>Solution:</strong> Build for deployment from day one.</p>
                </div>

                <div className="border-l-2 border-[var(--ff-rule)] pl-6">
                  <h4 className="font-bold text-[var(--ff-ink)] mb-2">10. Integration Complexity</h4>
                  <p className="mb-3">Software needs to talk to other software: ML models, payment processors, accounting tools, ERPs, APIs, legacy systems.</p>
                  <p className="text-[13px] text-[var(--ff-muted)]"><strong>Solution:</strong> Plan integration from day one in both directions. Meet users where they already work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Approach */}
      <section
        id="approach"
        className="px-16 py-24 max-w-[1100px] mx-auto border-t border-[var(--ff-rule-soft)] scroll-mt-[124px] max-md:px-6 max-md:py-16 max-md:scroll-mt-[120px]"
      >
        <div className="grid grid-cols-[140px_1fr] gap-8 items-baseline mb-10 max-md:grid-cols-1 max-md:gap-4">
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--ff-muted)]">
            03 / Approach
          </span>
          <h2 className="text-4xl font-bold leading-[1.2] tracking-[-0.01em] m-0 max-md:text-[26px]">
            Problem-First, Technology-Second
          </h2>
        </div>
        <div className="grid grid-cols-[140px_1fr] gap-8 max-md:grid-cols-1 max-md:gap-4">
          <div></div>
          <div className="max-w-[720px] space-y-6 text-[15px] leading-[1.8] text-[rgba(0,0,0,0.75)]">
            <p className="font-semibold text-[var(--ff-ink)]">
              We don&rsquo;t arrive with a demo. We arrive with questions.
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex gap-4">
                <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[var(--ff-orange)] mt-1 shrink-0 w-[80px]">Listen</span>
                <p>What&rsquo;s the workflow breaking under scale? The decision drowning in data? The process eating your team&rsquo;s time?</p>
              </div>
              <div className="flex gap-4">
                <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[var(--ff-orange)] mt-1 shrink-0 w-[80px]">Scope</span>
                <p>Your domain knowledge shapes the solution. We don&rsquo;t build at you — we build with you.</p>
              </div>
              <div className="flex gap-4">
                <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[var(--ff-orange)] mt-1 shrink-0 w-[80px]">Measure</span>
                <p>Not just traditional ROI. We track efficiency, quality, capability, and the value that usually stays invisible.</p>
              </div>
            </div>

            <p className="mt-8 text-[13px] text-[var(--ff-muted)]">
              This is how we address the bottlenecks from day one — not as an afterthought.
            </p>
          </div>
        </div>
      </section>

      {/* 04 — Mission & Vision */}
      <section
        id="mission"
        className="px-16 py-24 max-w-[1100px] mx-auto border-t border-[var(--ff-rule-soft)] scroll-mt-[124px] max-md:px-6 max-md:py-16 max-md:scroll-mt-[120px]"
      >
        <div className="grid grid-cols-[140px_1fr] gap-8 items-baseline mb-10 max-md:grid-cols-1 max-md:gap-4">
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--ff-muted)]">
            04 / Mission & Vision
          </span>
          <h2 className="text-4xl font-bold leading-[1.2] tracking-[-0.01em] m-0 max-md:text-[26px]">
            Mission & Vision
          </h2>
        </div>
        <div className="grid grid-cols-[140px_1fr] gap-8 max-md:grid-cols-1 max-md:gap-4">
          <div></div>
          <div className="max-w-[720px] space-y-8 text-[15px] leading-[1.8] text-[rgba(0,0,0,0.75)]">
            <div>
              <h3 className="text-sm font-bold tracking-[0.08em] uppercase text-[var(--ff-orange)] mb-4">Vision</h3>
              <p>
                A world where every business, regardless of size, runs on proactive self-improving software that understands the business inside out, fits how it actually works, and helps it streamline what exists, work in better ways, and sometimes ways that were not possible before.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-[0.08em] uppercase text-[var(--ff-orange)] mb-4">Mission</h3>
              <p>
                We co-build with domain experts to create software that understands your business, connects your data across every channel, keeps context across every session and tool you use, and flags what needs your attention before you think to ask — so you spend less time managing tools and more time running your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Beliefs & Values */}
      <section
        id="beliefs"
        className="px-16 py-24 max-w-[1100px] mx-auto border-t border-[var(--ff-rule-soft)] scroll-mt-[124px] max-md:px-6 max-md:py-16 max-md:scroll-mt-[120px]"
      >
        <div className="grid grid-cols-[140px_1fr] gap-8 items-baseline mb-10 max-md:grid-cols-1 max-md:gap-4">
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--ff-muted)]">
            05 / Beliefs & Values
          </span>
          <h2 className="text-4xl font-bold leading-[1.2] tracking-[-0.01em] m-0 max-md:text-[26px]">
            Beliefs & Values
          </h2>
        </div>
        <div className="grid grid-cols-[140px_1fr] gap-8 max-md:grid-cols-1 max-md:gap-4">
          <div></div>
          <div className="max-w-[720px] space-y-10 text-[15px] leading-[1.8] text-[rgba(0,0,0,0.75)]">
            <div>
              <h3 className="text-sm font-bold tracking-[0.08em] uppercase text-[var(--ff-orange)] mb-6">Core Beliefs</h3>
              <ul className="space-y-3 list-none p-0">
                <li className="flex gap-3 items-baseline">
                  <span className="text-[var(--ff-orange)] font-bold shrink-0">&mdash;</span>
                  <span>Domain experts know what problems are best to solve in their field</span>
                </li>
                <li className="flex gap-3 items-baseline">
                  <span className="text-[var(--ff-orange)] font-bold shrink-0">&mdash;</span>
                  <span>Development should inform research and vice-versa</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-[0.08em] uppercase text-[var(--ff-orange)] mb-6">Core Values</h3>
              <div className="space-y-5">
                <div className="border-l-2 border-[var(--ff-orange)] pl-6">
                  <h4 className="font-bold text-[var(--ff-ink)] mb-1">Learn by doing</h4>
                  <p className="text-[13px] text-[var(--ff-muted)]">We build, experiment, fail, and iterate. Not just theorize.</p>
                </div>
                <div className="border-l-2 border-[var(--ff-orange)] pl-6">
                  <h4 className="font-bold text-[var(--ff-ink)] mb-1">Transparency</h4>
                  <p className="text-[13px] text-[var(--ff-muted)]">We communicate openly about progress, challenges, and decisions.</p>
                </div>
                <div className="border-l-2 border-[var(--ff-orange)] pl-6">
                  <h4 className="font-bold text-[var(--ff-ink)] mb-1">Data-driven</h4>
                  <p className="text-[13px] text-[var(--ff-muted)]">Decisions backed by evidence, not assumptions.</p>
                </div>
                <div className="border-l-2 border-[var(--ff-orange)] pl-6">
                  <h4 className="font-bold text-[var(--ff-ink)] mb-1">Human-centered</h4>
                  <p className="text-[13px] text-[var(--ff-muted)]">AI augments people, doesn&rsquo;t replace judgment.</p>
                </div>
                <div className="border-l-2 border-[var(--ff-orange)] pl-6">
                  <h4 className="font-bold text-[var(--ff-ink)] mb-1">Inclusivity</h4>
                  <p className="text-[13px] text-[var(--ff-muted)]">Diverse perspectives and backgrounds are key to building global products. We welcome tinkerers, curious people, and those who may not fit traditional settings.</p>
                </div>
                <div className="border-l-2 border-[var(--ff-orange)] pl-6">
                  <h4 className="font-bold text-[var(--ff-ink)] mb-1">Cost effective</h4>
                  <p className="text-[13px] text-[var(--ff-muted)]">We intentionally build products in the most cost-effective way possible, enabling people outside of well-funded labs to replicate our processes and businesses of any size to adopt software.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — How We Operate */}
      <section
        id="how-we-operate"
        className="px-16 py-24 max-w-[1100px] mx-auto border-t border-[var(--ff-rule-soft)] scroll-mt-[124px] max-md:px-6 max-md:py-16 max-md:scroll-mt-[120px]"
      >
        <div className="grid grid-cols-[140px_1fr] gap-8 items-baseline mb-10 max-md:grid-cols-1 max-md:gap-4">
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--ff-muted)]">
            06 / How We Operate
          </span>
          <h2 className="text-4xl font-bold leading-[1.2] tracking-[-0.01em] m-0 max-md:text-[26px]">
            How We Operate
          </h2>
        </div>
        <div className="grid grid-cols-[140px_1fr] gap-8 max-md:grid-cols-1 max-md:gap-4">
          <div></div>
          <div className="max-w-[720px] space-y-5 text-[15px] leading-[1.8] text-[rgba(0,0,0,0.75)]">
            <div className="grid grid-cols-[160px_1fr] gap-4 items-baseline max-md:grid-cols-1">
              <span className="font-bold text-[var(--ff-ink)]">Fully remote</span>
              <span className="text-[rgba(0,0,0,0.7)]">Work from anywhere, async-friendly.</span>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-4 items-baseline max-md:grid-cols-1">
              <span className="font-bold text-[var(--ff-ink)]">Digital-first tooling</span>
              <span className="text-[rgba(0,0,0,0.7)]">Document management, internal communication with history, comprehensive meeting minutes.</span>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-4 items-baseline max-md:grid-cols-1">
              <span className="font-bold text-[var(--ff-ink)]">Autonomy</span>
              <span className="text-[rgba(0,0,0,0.7)]">Work on anything aligned with our direction as long as you can account for the results.</span>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-4 items-baseline max-md:grid-cols-1">
              <span className="font-bold text-[var(--ff-ink)]">DIY mindset</span>
              <span className="text-[rgba(0,0,0,0.7)]">Hands-on approach to everything; we figure things out.</span>
            </div>
            <div className="grid grid-cols-[160px_1fr] gap-4 items-baseline max-md:grid-cols-1">
              <span className="font-bold text-[var(--ff-ink)]">End-to-end thinking</span>
              <span className="text-[rgba(0,0,0,0.7)]">Understanding the full pipeline gives context and better decisions.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — What We Are Not */}
      <section
        id="what-we-are-not"
        className="px-16 py-24 max-w-[1100px] mx-auto border-t border-[var(--ff-rule-soft)] scroll-mt-[124px] max-md:px-6 max-md:py-16 max-md:scroll-mt-[120px]"
      >
        <div className="grid grid-cols-[140px_1fr] gap-8 items-baseline mb-10 max-md:grid-cols-1 max-md:gap-4">
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--ff-muted)]">
            07 / What We Are Not
          </span>
          <h2 className="text-4xl font-bold leading-[1.2] tracking-[-0.01em] m-0 max-md:text-[26px]">
            What We Are Not
          </h2>
        </div>
        <div className="grid grid-cols-[140px_1fr] gap-8 max-md:grid-cols-1 max-md:gap-4">
          <div></div>
          <div className="max-w-[720px] text-[15px] leading-[1.8] text-[rgba(0,0,0,0.75)]">
            <p className="font-semibold text-[var(--ff-ink)] text-lg">
              We&rsquo;re not a software agency.
            </p>
          </div>
        </div>
      </section>

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
