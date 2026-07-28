import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, Calendar, CheckCircle2, Award, ZoomIn } from 'lucide-react';
import { PAID_EXPERIENCE, UNIVERSITY_LEADERSHIP } from '../data/portfolioData';
import { ImageLightboxModal } from './ImageLightboxModal';
import { animateSectionHeader, animateCardsStagger } from '../utils/animations';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'paid' | 'university'>('paid');
  const [activeModal, setActiveModal] = useState<{ src: string; title: string; caption?: string } | null>(null);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cleanupHeader: (() => void) | undefined;
    let cleanupTimeline: (() => void) | undefined;

    if (headerRef.current) cleanupHeader = animateSectionHeader(headerRef.current);
    if (timelineRef.current) cleanupTimeline = animateCardsStagger(timelineRef.current, '.gsap-experience-item');

    return () => {
      if (cleanupHeader) cleanupHeader();
      if (cleanupTimeline) cleanupTimeline();
    };
  }, [activeTab]);

  const currentList = activeTab === 'paid' ? PAID_EXPERIENCE : UNIVERSITY_LEADERSHIP;

  return (
    <section id="experience" className="py-24 bg-[#111318] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-[#1677FF]">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER & MOTORSPORT TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
              Experience & Leadership
            </h2>
            <p className="text-base text-[#727982] leading-relaxed">
              Six years across commercial vehicle operations, technical compliance, insurance motor loss assessment, and Formula Student leadership.
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="flex items-center p-1.5 bg-white/5 border border-white/10 rounded-xl w-fit">
            <button
              onClick={() => setActiveTab('paid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold font-mono transition-all ${
                activeTab === 'paid'
                  ? 'bg-[#1677FF] text-white shadow-md'
                  : 'text-[#727982] hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Professional Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('university')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold font-mono transition-all ${
                activeTab === 'university'
                  ? 'bg-[#1677FF] text-white shadow-md'
                  : 'text-[#727982] hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>University & Motorsport</span>
            </button>
          </div>
        </div>

        {/* Timeline Items List */}
        <div ref={timelineRef} className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-8 before:w-0.5 before:bg-white/10">
          {currentList.map((item, idx) => (
            <div
              key={item.id}
              className="gsap-experience-item relative pl-8 sm:pl-16 group"
            >
              {/* Timeline Marker Pin */}
              <div className="absolute left-1.5 sm:left-6.5 top-1.5 w-3 h-3 rounded-full bg-[#1677FF] ring-4 ring-[#111318] group-hover:scale-125 transition-transform" />

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-[#1677FF]/50 transition-colors">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      {item.role}
                    </h3>
                    <span className="text-sm font-semibold text-[#1677FF] font-mono">
                      {item.company}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-[#727982] w-fit">
                    <Calendar className="w-3.5 h-3.5 text-[#1677FF]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* STAR Result Highlight Box */}
                <div className="p-4 bg-[#1677FF]/10 border border-[#1677FF]/30 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1677FF]">
                    <Award className="w-4 h-4" />
                    <span>KEY MEASURABLE OUTCOME (STAR METHOD)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    {item.starResult}
                  </p>
                </div>

                {/* Highlights List */}
                {item.highlights && (
                  <ul className="space-y-2 text-xs sm:text-sm text-[#727982] pt-2">
                    {item.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                        <span className="text-slate-300 font-sans">{hl}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Optional Workshop Images for Toyota/MG */}
                {item.images && item.images.length > 0 && (
                  <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.images.map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        onClick={() => setActiveModal({
                          src: img,
                          title: `${item.company} Operations`,
                          caption: imgIdx === 0 ? 'Diagnostic & Repair Workshop' : 'Technical Training Session'
                        })}
                        className="relative bg-white rounded-xl overflow-hidden border border-white/20 hover:border-[#1677FF] cursor-pointer group h-64 sm:h-72 p-2 flex items-center justify-center transition-all shadow-xs"
                      >
                        <img
                          src={img}
                          alt={`${item.company} Photo ${imgIdx + 1}`}
                          className="w-full h-full object-contain group-hover:scale-103 transition-transform duration-500"
                        />
                        <div className="absolute bottom-2 right-2 p-1.5 bg-[#1677FF] rounded text-white shadow-xs">
                          <ZoomIn className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModal && (
        <ImageLightboxModal
          isOpen={!!activeModal}
          imageSrc={activeModal.src}
          title={activeModal.title}
          caption={activeModal.caption}
          onClose={() => setActiveModal(null)}
        />
      )}
    </section>
  );
};
