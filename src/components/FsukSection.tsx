import React, { useState, useEffect, useRef } from 'react';
import { Trophy, ShieldCheck, Zap, Flag, Wrench, Users, ZoomIn } from 'lucide-react';
import { FSUK_ACHIEVEMENTS } from '../data/portfolioData';
import { ImageLightboxModal } from './ImageLightboxModal';
import { animateSectionHeader, animateCardsStagger } from '../utils/animations';

export const FsukSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; caption?: string } | null>(null);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const achievementsRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cleanupHeader: (() => void) | undefined;
    let cleanupAchieve: (() => void) | undefined;
    let cleanupGallery: (() => void) | undefined;

    if (headerRef.current) cleanupHeader = animateSectionHeader(headerRef.current);
    if (achievementsRef.current) cleanupAchieve = animateCardsStagger(achievementsRef.current, '.gsap-fsuk-badge');
    if (galleryRef.current) cleanupGallery = animateCardsStagger(galleryRef.current, '.gsap-fsuk-img');

    return () => {
      if (cleanupHeader) cleanupHeader();
      if (cleanupAchieve) cleanupAchieve();
      if (cleanupGallery) cleanupGallery();
    };
  }, []);

  const galleryImages = [
    {
      src: '/assets/fsuk-team.webp',
      title: 'Oxford Brookes Racing Autonomous Team',
      caption: 'FSUK AI 2026 Silverstone Paddock with Vehicle 91.',
      span: 'col-span-12 lg:col-span-8',
      height: 'h-80 sm:h-96'
    },
    {
      src: '/assets/fsuk-trophy.webp',
      title: 'Silverstone FSUK AI 2026 Championship Trophy',
      caption: 'FS-AI Overall Class Winners Trophy Presentation.',
      span: 'col-span-12 sm:col-span-6 lg:col-span-4',
      height: 'h-80 sm:h-96'
    },
    {
      src: '/assets/fsuk-car.webp',
      title: 'Autonomous Race Vehicle No. 91',
      caption: 'Single-seater electric autonomous race car at trackside.',
      span: 'col-span-12',
      height: 'h-80 sm:h-96'
    }
  ];

  return (
    <section id="fsuk-2026" className="py-24 bg-[#111318] text-white relative overflow-hidden">
      {/* Background Subtle Track Pattern */}
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1677FF]/20 border border-[#1677FF]/40 rounded-full text-xs font-mono text-[#1677FF]">
              <Trophy className="w-3.5 h-3.5" />
              <span>SILVERSTONE FORMULA STUDENT AI CHAMPIONSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
              FSUK AI 2026 — Engineering Under Competition Pressure
            </h2>
            <p className="text-base text-[#727982] leading-relaxed max-w-2xl">
              Oxford Brookes Racing Autonomous (OBRA) delivered a landmark performance at Silverstone, securing top honors in the IMechE's Formula Student Autonomous competition.
            </p>
          </div>

          {/* Personal Contribution Card */}
          <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-mono text-[#1677FF] font-bold mb-2">
              <Wrench className="w-4 h-4" />
              <span>PERSONAL ENGINEERING CONTRIBUTION</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-sans">
              Supported shutdown-system electronics, minor VCU/CAN design changes, brake and HV-battery connections, and vehicle electrical safety.
            </p>
          </div>
        </div>

        {/* Confirmed Team Achievements Grid */}
        <div ref={achievementsRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {FSUK_ACHIEVEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="gsap-fsuk-badge bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between hover:border-[#1677FF] transition-all group hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-2">
                <Flag className="w-4 h-4 text-[#1677FF]" />
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#1677FF]/20 text-[#1677FF]">
                  {item.badge}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#727982] block truncate">
                  {item.title}
                </span>
                <span className="text-sm font-bold text-white font-display group-hover:text-[#1677FF] transition-colors">
                  {item.result}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Editorial Photo Gallery */}
        <div ref={galleryRef} className="grid grid-cols-12 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage({ src: img.src, title: img.title, caption: img.caption })}
              className={`gsap-fsuk-img ${img.span} ${img.height} relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer group`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white z-10">
                <div>
                  <h3 className="text-sm sm:text-base font-bold font-display">{img.title}</h3>
                  <p className="text-xs text-[#727982] font-mono">{img.caption}</p>
                </div>
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-[#1677FF] transition-colors">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <ImageLightboxModal
          isOpen={!!selectedImage}
          imageSrc={selectedImage.src}
          title={selectedImage.title}
          caption={selectedImage.caption}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};
