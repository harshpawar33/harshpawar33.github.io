import React, { useState, useEffect, useRef } from 'react';
import { Zap, ShieldAlert, Cpu, ZoomIn, CheckCircle2 } from 'lucide-react';
import { ImageLightboxModal } from './ImageLightboxModal';
import { animateSectionHeader, animateCardsStagger, animateCircuitTrace } from '../utils/animations';

export const PowerElectronicsSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{ src: string; title: string; caption?: string } | null>(null);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const svgPathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    let cleanupHeader: (() => void) | undefined;
    let cleanupCards: (() => void) | undefined;
    let cleanupTrace: (() => void) | undefined;

    if (headerRef.current) cleanupHeader = animateSectionHeader(headerRef.current);
    if (cardsRef.current) cleanupCards = animateCardsStagger(cardsRef.current, '.gsap-pe-card');
    if (svgPathRef.current) cleanupTrace = animateCircuitTrace(svgPathRef.current);

    return () => {
      if (cleanupHeader) cleanupHeader();
      if (cleanupCards) cleanupCards();
      if (cleanupTrace) cleanupTrace();
    };
  }, []);

  return (
    <section id="power-electronics" className="py-24 bg-[#F5F4F0] text-[#111318] relative bg-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header with Electric Blue Circuit Trace Animation */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#111318]/10 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111318] text-white rounded-full text-xs font-mono">
              <Zap className="w-3.5 h-3.5 text-[#1677FF]" />
              <span>EV POWER ELECTRONICS & HARDWARE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#111318] tracking-tight">
              Electric Vehicle Power Electronics
            </h2>
            <p className="text-base text-[#111318]/70 leading-relaxed">
              Bidirectional power converter topology and hardware comparator battery management protection circuits.
            </p>
          </div>

          {/* Electric Blue Animated SVG Circuit Line Trace */}
          <div className="w-full md:w-72 h-16 bg-[#111318] rounded-xl p-3 flex flex-col justify-between border border-[#111318]/20 shadow-xs">
            <div className="flex justify-between text-[10px] font-mono text-[#727982]">
              <span>CIRCUIT.TRACE</span>
              <span className="text-[#1677FF]">800V DC BUS</span>
            </div>
            <svg viewBox="0 0 240 24" className="w-full h-6 overflow-visible">
              <path
                ref={svgPathRef}
                d="M 0 12 L 40 12 L 60 4 L 80 20 L 100 12 L 150 12 L 170 4 L 190 20 L 210 12 L 240 12"
                fill="none"
                stroke="#1677FF"
                strokeWidth="2.5"
              />
            </svg>
          </div>
        </div>

        {/* Two Main Projects */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Project A: Bidirectional V2G Off-Board Paddock Charger */}
          <div className="gsap-pe-card bg-white border border-[#111318]/10 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-[#1677FF]/10 text-[#1677FF] rounded font-mono text-xs font-bold">
                  PROJECT A
                </span>
                <span className="text-xs font-mono text-[#727982]">3.3 kW / 800V DC Bus</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#111318]">
                Bidirectional V2G Off-Board Paddock Charger
              </h3>

              <p className="text-sm text-[#111318]/80 leading-relaxed font-sans border-l-2 border-[#1677FF] pl-3 py-1">
                Designed an 800 V DC bus, 3.3 kW target converter supporting bidirectional energy transfer between the grid and vehicle battery using SPWM switching.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono bg-[#F5F4F0] p-3 rounded-lg border border-[#111318]/10">
                <div>
                  <span className="text-[#727982] block">TOPOLOGY</span>
                  <span className="font-bold text-[#111318]">Bidirectional Active Inverter</span>
                </div>
                <div>
                  <span className="text-[#727982] block">APPLICATION</span>
                  <span className="font-bold text-[#111318]">Off-Board Paddock Charger</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div
              onClick={() => setActiveModal({
                src: '/assets/portfolio/ev-v2g.webp',
                title: 'Bidirectional V2G Paddock Charger Circuit Schematic',
                caption: 'Converter topology and SPWM switching circuit in Multisim.'
              })}
              className="relative bg-white rounded-xl p-3 border border-[#111318]/15 hover:border-[#1677FF] shadow-2xs hover:shadow-sm cursor-pointer group h-64 sm:h-72 flex items-center justify-center transition-all"
            >
              <img
                src="/assets/portfolio/ev-v2g.webp"
                alt="Bidirectional V2G Circuit"
                className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute bottom-3 right-3 p-2 bg-[#1677FF] rounded-lg text-white shadow-xs">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#727982]">
              <span className="px-2.5 py-1 bg-[#F5F4F0] rounded">Multisim</span>
              <span className="px-2.5 py-1 bg-[#F5F4F0] rounded">SPWM Switch Control</span>
              <span className="px-2.5 py-1 bg-[#F5F4F0] rounded">Paddock Charger</span>
            </div>
          </div>

          {/* Project B: Comparator-Based Four-Cell BMS */}
          <div className="gsap-pe-card bg-white border border-[#111318]/10 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-[#1677FF]/10 text-[#1677FF] rounded font-mono text-xs font-bold">
                  PROJECT B
                </span>
                <span className="text-xs font-mono text-[#727982]">4-Cell Series Pack</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#111318]">
                Comparator-Based Four-Cell Battery Management System
              </h3>

              <p className="text-sm text-[#111318]/80 leading-relaxed font-sans border-l-2 border-[#1677FF] pl-3 py-1">
                Built a hardware comparator protection circuit that detects cell-level upper and lower voltage thresholds to command charge or discharge cut-off against overcharge and excessive discharge.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono bg-[#F5F4F0] p-3 rounded-lg border border-[#111318]/10">
                <div>
                  <span className="text-[#727982] block">ARCHITECTURE</span>
                  <span className="font-bold text-[#111318]">4-Cell Series Pack</span>
                </div>
                <div>
                  <span className="text-[#727982] block">PROTECTION TYPE</span>
                  <span className="font-bold text-[#111318]">Hardware Cut-Off Comparator</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div
              onClick={() => setActiveModal({
                src: '/assets/portfolio/ev-bms.webp',
                title: 'Four-Cell BMS Hardware Comparator Protection Schematic',
                caption: 'Cell-level overvoltage & undervoltage protection circuit schematic.'
              })}
              className="relative bg-white rounded-xl p-3 border border-[#111318]/15 hover:border-[#1677FF] shadow-2xs hover:shadow-sm cursor-pointer group h-64 sm:h-72 flex items-center justify-center transition-all"
            >
              <img
                src="/assets/portfolio/ev-bms.webp"
                alt="4-Cell BMS Circuit"
                className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute bottom-3 right-3 p-2 bg-[#1677FF] rounded-lg text-white shadow-xs">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#727982]">
              <span className="px-2.5 py-1 bg-[#F5F4F0] rounded">Multisim</span>
              <span className="px-2.5 py-1 bg-[#F5F4F0] rounded">Threshold Comparators</span>
              <span className="px-2.5 py-1 bg-[#F5F4F0] rounded">BMS Safety</span>
            </div>
          </div>

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
