import React, { useEffect, useRef } from 'react';
import { Mail, Download, Calendar, ArrowUpRight, Share2 } from 'lucide-react';
import { animateSectionHeader, animateCardsStagger } from '../utils/animations';

export const ContactSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    if (containerRef.current) {
      cleanup = animateSectionHeader(containerRef.current);
    }
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <footer id="contact" className="py-20 bg-[#111318] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Banner */}
        <div ref={containerRef} className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 space-y-8 backdrop-blur-md">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1677FF]/20 border border-[#1677FF]/40 rounded-full text-xs font-mono text-[#1677FF]">
              <Calendar className="w-3.5 h-3.5" />
              <span>UK ENGINEERING ROLES // FROM OCTOBER 2026</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-tight">
              Let's engineer what moves next.
            </h2>

            <p className="text-base sm:text-lg text-[#727982] font-sans">
              Open to automotive engineering opportunities across NVH, EV powertrains, vehicle dynamics, power electronics and CAE simulation in the United Kingdom.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            {/* Email */}
            <a
              href="mailto:harshpawar2033@gmail.com"
              className="p-4 bg-white/5 hover:bg-[#1677FF] border border-white/10 rounded-2xl transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-[#1677FF] group-hover:text-white mb-3">
                <Mail className="w-5 h-5" />
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#727982] group-hover:text-white/80 block uppercase">
                  DIRECT EMAIL
                </span>
                <span className="text-sm font-bold font-mono text-white break-all">
                  harshpawar2033@gmail.com
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/harshpawar01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 hover:bg-[#1677FF] border border-white/10 rounded-2xl transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-[#1677FF] group-hover:text-white mb-3">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#727982] group-hover:text-white/80 block uppercase">
                  LINKEDIN PROFILE
                </span>
                <span className="text-sm font-bold font-mono text-white">
                  linkedin.com/in/harshpawar01
                </span>
              </div>
            </a>

            {/* Download CV */}
            <a
              href="/Harsh-Pawar-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 hover:bg-[#1677FF] border border-white/10 rounded-2xl transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-[#1677FF] group-hover:text-white mb-3">
                <Download className="w-5 h-5" />
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#727982] group-hover:text-white/80 block uppercase">
                  CURRICULUM VITAE
                </span>
                <span className="text-sm font-bold font-mono text-white">
                  Download Harsh-Pawar-CV.pdf
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#727982] pt-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1677FF]" />
            <span>HARSH PAWAR — AUTOMOTIVE ENGINEERING PORTFOLIO</span>
          </div>
          <div>
            <span>OXFORD, UNITED KINGDOM</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
