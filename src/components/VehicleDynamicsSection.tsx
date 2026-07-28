import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Activity, Disc, Layers, ZoomIn, Compass } from 'lucide-react';
import { ImageLightboxModal } from './ImageLightboxModal';
import { animateSectionHeader, animateCardsStagger } from '../utils/animations';

export const VehicleDynamicsSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{ src: string; title: string; caption?: string } | null>(null);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cleanupHeader: (() => void) | undefined;
    let cleanupCards: (() => void) | undefined;

    if (headerRef.current) cleanupHeader = animateSectionHeader(headerRef.current);
    if (cardsRef.current) cleanupCards = animateCardsStagger(cardsRef.current, '.gsap-vd-card');

    return () => {
      if (cleanupHeader) cleanupHeader();
      if (cleanupCards) cleanupCards();
    };
  }, []);

  return (
    <section className="py-24 bg-[#111318] text-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header with Lightweight Interactive Suspension Animation SVG */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-[#1677FF]">
              <Compass className="w-3.5 h-3.5" />
              <span>CHASSIS & TYRE DYNAMICS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
              Vehicle Dynamics & Pacejka Tyre Modelling
            </h2>
            <p className="text-base text-[#727982] leading-relaxed">
              Multi-degree-of-freedom half-car pitch and heave dynamic sweeps paired with Magic Formula lateral force parameter fitting.
            </p>
          </div>

          {/* Interactive Lightweight Spring Suspension Animation SVG */}
          <div className="w-full md:w-64 h-16 bg-white/5 rounded-xl p-3 flex flex-col justify-between border border-white/10">
            <div className="flex justify-between text-[10px] font-mono text-[#727982]">
              <span>SUSPENSION.SWEEP</span>
              <span className="text-[#1677FF]">0.5–15 Hz</span>
            </div>
            <svg viewBox="0 0 200 24" className="w-full h-6">
              {/* Wheel */}
              <circle cx="20" cy="12" r="8" fill="#111318" stroke="#1677FF" strokeWidth="2" />
              {/* Spring coil animation */}
              <motion.path
                d="M 28 12 L 40 4 L 52 20 L 64 4 L 76 20 L 88 4 L 100 20 L 112 12"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                animate={{ y: [0, -3, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Chassis line */}
              <line x1="112" y1="12" x2="190" y2="12" stroke="#1677FF" strokeWidth="3" />
            </svg>
          </div>
        </div>

        {/* Two Deep Dives */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Subsection A: 4-DOF Half-Car Model */}
          <div className="gsap-vd-card bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-[#1677FF]/20 text-[#1677FF] rounded font-mono text-xs font-bold">
                  STUDY 01
                </span>
                <span className="text-xs font-mono text-[#727982]">&lt; 1.2% Model Difference</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Four-Degree-of-Freedom Half-Car Dynamics Model
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-sans border-l-2 border-[#1677FF] pl-3 py-1">
                Built a 4-DOF half-car pitch and heave model subjected to a 0.5–15 Hz sweep input, achieving less than 1.2% model difference against reference analytical data.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono bg-white/5 p-3 rounded-lg border border-white/10">
                <div>
                  <span className="text-[#727982] block">INPUT SWEEP</span>
                  <span className="font-bold text-white">0.5–15 Hz Frequency</span>
                </div>
                <div>
                  <span className="text-[#727982] block">ACCURACY</span>
                  <span className="font-bold text-white">&lt; 1.2% Variance</span>
                </div>
              </div>
            </div>

            {/* Images Side-by-Side */}
            <div className="grid grid-cols-2 gap-3">
              <div
                onClick={() => setActiveModal({
                  src: '/assets/portfolio/dynamics-half-car.webp',
                  title: '4-DOF Half-Car Schematic Architecture',
                  caption: 'Pitch, heave, front/rear unsprung mass 4-DOF dynamic model.'
                })}
                className="relative bg-white rounded-xl p-2.5 border border-white/20 hover:border-[#1677FF] cursor-pointer group h-52 sm:h-60 flex items-center justify-center shadow-xs transition-all"
              >
                <img
                  src="/assets/portfolio/dynamics-half-car.webp"
                  alt="Half Car Model"
                  className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute bottom-2 right-2 p-1.5 bg-[#1677FF] rounded text-white shadow-xs">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>

              <div
                onClick={() => setActiveModal({
                  src: '/assets/portfolio/dynamics-response.webp',
                  title: 'Pitch & Heave Frequency Response Sweep Plot',
                  caption: 'Chassis pitch angle and heave displacement across 0.5–15 Hz sweep.'
                })}
                className="relative bg-white rounded-xl p-2.5 border border-white/20 hover:border-[#1677FF] cursor-pointer group h-52 sm:h-60 flex items-center justify-center shadow-xs transition-all"
              >
                <img
                  src="/assets/portfolio/dynamics-response.webp"
                  alt="Dynamics Response Plot"
                  className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute bottom-2 right-2 p-1.5 bg-[#1677FF] rounded text-white shadow-xs">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#727982]">
              <span className="px-2.5 py-1 bg-white/5 rounded">MSC Adams</span>
              <span className="px-2.5 py-1 bg-white/5 rounded">MATLAB</span>
              <span className="px-2.5 py-1 bg-white/5 rounded">Pitch & Heave Sweep</span>
            </div>
          </div>

          {/* Subsection B: Pacejka Magic Formula Tyre Model */}
          <div className="gsap-vd-card bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-[#1677FF]/20 text-[#1677FF] rounded font-mono text-xs font-bold">
                  STUDY 02
                </span>
                <span className="text-xs font-mono text-[#727982]">R² = 0.9974 Fit Accuracy</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Pacejka Magic Formula Tyre Lateral Force Fitting
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-sans border-l-2 border-[#1677FF] pl-3 py-1">
                Measured contact-patch data were fitted using the Pacejka Magic Formula to predict lateral force against slip angle, capturing approximately 4.2 kN peak lateral force with R² = 0.9974 precision.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono bg-white/5 p-3 rounded-lg border border-white/10">
                <div>
                  <span className="text-[#727982] block">CORRELATION</span>
                  <span className="font-bold text-white">R² = 0.9974</span>
                </div>
                <div>
                  <span className="text-[#727982] block">PEAK LATERAL FORCE</span>
                  <span className="font-bold text-white">~4.2 kN Modelled</span>
                </div>
              </div>
            </div>

            {/* Tyre Plot Image */}
            <div
              onClick={() => setActiveModal({
                src: '/assets/portfolio/tyre-magic-formula.webp',
                title: 'Pacejka Magic Formula Lateral Force Curve Fit',
                caption: 'Measured vs Magic Formula lateral force Fy against slip angle alpha.'
              })}
              className="relative bg-white rounded-xl p-3 border border-white/20 hover:border-[#1677FF] cursor-pointer group h-56 sm:h-64 flex items-center justify-center shadow-xs transition-all"
            >
              <img
                src="/assets/portfolio/tyre-magic-formula.webp"
                alt="Magic Formula Tyre Plot"
                className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute bottom-3 right-3 p-2 bg-[#1677FF] rounded-lg text-white shadow-xs">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#727982]">
              <span className="px-2.5 py-1 bg-white/5 rounded">Pacejka Magic Formula</span>
              <span className="px-2.5 py-1 bg-white/5 rounded">Curve Fitting</span>
              <span className="px-2.5 py-1 bg-white/5 rounded">Contact Patch Mechanics</span>
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
