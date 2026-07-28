import React, { useEffect, useRef } from 'react';
import { GraduationCap, Wrench, CheckCircle2, Award } from 'lucide-react';
import { EDUCATION_DATA, SOFTWARE_CATEGORIES } from '../data/portfolioData';
import { animateSectionHeader, animateCardsStagger } from '../utils/animations';

export const EducationSoftwareSection: React.FC = () => {
  const eduHeaderRef = useRef<HTMLDivElement | null>(null);
  const eduGridRef = useRef<HTMLDivElement | null>(null);
  const softHeaderRef = useRef<HTMLDivElement | null>(null);
  const softGridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cleanupEduHeader: (() => void) | undefined;
    let cleanupEduGrid: (() => void) | undefined;
    let cleanupSoftHeader: (() => void) | undefined;
    let cleanupSoftGrid: (() => void) | undefined;

    if (eduHeaderRef.current) cleanupEduHeader = animateSectionHeader(eduHeaderRef.current);
    if (eduGridRef.current) cleanupEduGrid = animateCardsStagger(eduGridRef.current, '.gsap-edu-card');
    if (softHeaderRef.current) cleanupSoftHeader = animateSectionHeader(softHeaderRef.current);
    if (softGridRef.current) cleanupSoftGrid = animateCardsStagger(softGridRef.current, '.gsap-soft-card');

    return () => {
      if (cleanupEduHeader) cleanupEduHeader();
      if (cleanupEduGrid) cleanupEduGrid();
      if (cleanupSoftHeader) cleanupSoftHeader();
      if (cleanupSoftGrid) cleanupSoftGrid();
    };
  }, []);

  return (
    <section id="education" className="py-24 bg-[#F5F4F0] text-[#111318] relative bg-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Education Subsection */}
        <div className="space-y-8">
          <div ref={eduHeaderRef} className="border-b border-[#111318]/10 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111318] text-white rounded-full text-xs font-mono mb-2">
              <GraduationCap className="w-3.5 h-3.5 text-[#1677FF]" />
              <span>ACADEMIC QUALIFICATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#111318] tracking-tight">
              Academic Background
            </h2>
          </div>

          <div ref={eduGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="gsap-edu-card bg-white border border-[#111318]/10 rounded-2xl p-6 space-y-4 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 bg-[#1677FF]/10 text-[#1677FF] rounded">
                      {edu.period}
                    </span>
                    <span className="text-xs font-mono text-[#727982]">{edu.grade}</span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-[#111318] leading-snug">
                    {edu.degree}
                  </h3>

                  <p className="text-xs font-mono text-[#727982] font-semibold">
                    {edu.institution}
                  </p>
                </div>

                {edu.focusArea && (
                  <div className="pt-3 border-t border-[#111318]/10 text-xs text-[#111318]/70 font-sans">
                    <span className="font-mono text-[#727982] block mb-1">FOCUS AREAS</span>
                    {edu.focusArea}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Software Grid Subsection */}
        <div className="space-y-8">
          <div ref={softHeaderRef} className="border-b border-[#111318]/10 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111318] text-white rounded-full text-xs font-mono mb-2">
              <Wrench className="w-3.5 h-3.5 text-[#1677FF]" />
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#111318] tracking-tight">
              Engineering Software & Toolchain
            </h2>
            <p className="text-sm text-[#111318]/70">
              Proficient across specialized industry-standard simulation, CAD, and vehicle dynamic analysis suites.
            </p>
          </div>

          <div ref={softGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SOFTWARE_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="gsap-soft-card bg-white border border-[#111318]/10 rounded-2xl p-5 space-y-3 shadow-xs"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1677FF] border-b border-[#111318]/10 pb-2">
                  <Award className="w-3.5 h-3.5" />
                  <span>{cat.category}</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  {cat.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className="flex items-center gap-2 text-xs font-mono text-[#111318] bg-[#F5F4F0] px-2.5 py-1.5 rounded border border-[#111318]/5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1677FF]" />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
