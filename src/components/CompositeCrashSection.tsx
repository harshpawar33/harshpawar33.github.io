import React, { useState, useEffect, useRef } from 'react';
import { Layers, ShieldAlert, Wrench, ZoomIn, Box } from 'lucide-react';
import { ImageLightboxModal } from './ImageLightboxModal';
import { animateSectionHeader, animateCardsStagger } from '../utils/animations';

export const CompositeCrashSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{ src: string; title: string; caption?: string } | null>(null);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cleanupHeader: (() => void) | undefined;
    let cleanupCards: (() => void) | undefined;

    if (headerRef.current) cleanupHeader = animateSectionHeader(headerRef.current);
    if (cardsRef.current) cleanupCards = animateCardsStagger(cardsRef.current, '.gsap-crash-card');

    return () => {
      if (cleanupHeader) cleanupHeader();
      if (cleanupCards) cleanupCards();
    };
  }, []);

  return (
    <section id="cae-crash" className="py-24 bg-[#F5F4F0] text-[#111318] relative bg-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#111318]/10 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111318] text-white rounded-full text-xs font-mono">
              <Box className="w-3.5 h-3.5 text-[#1677FF]" />
              <span>COMPOSITES & NON-LINEAR CRASH CAE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#111318] tracking-tight">
              Composite Battery Enclosure & Crash Simulation
            </h2>
            <p className="text-base text-[#111318]/70 leading-relaxed">
              Material selection for high-volume EV battery enclosures paired with LS-DYNA non-linear dynamic impact attenuator simulation.
            </p>
          </div>

          {/* Exploded Layers Graphic Accent */}
          <div className="flex items-center gap-2 bg-[#111318] text-white p-3 rounded-xl text-xs font-mono">
            <Layers className="w-5 h-5 text-[#1677FF]" />
            <div>
              <span className="block font-bold">LS-DYNA & HYPERMESH</span>
              <span className="text-[#727982]">EXPLICIT DYNAMIC SOLVER</span>
            </div>
          </div>
        </div>

        {/* Two Project Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Project 1: Composite Battery Enclosure */}
          <div className="gsap-crash-card bg-white border border-[#111318]/10 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-[#1677FF]/10 text-[#1677FF] rounded font-mono text-xs font-bold">
                  PROJECT A
                </span>
                <span className="text-xs font-mono text-[#727982]">Material Selection & Manufacturability</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#111318]">
                Composite Battery Enclosure Research
              </h3>

              <p className="text-sm text-[#111318]/80 leading-relaxed font-sans border-l-2 border-[#1677FF] pl-3 py-1">
                Conducted high-volume composite material research, material selection trade-off analysis, and manufacturing feasibility evaluation for electric vehicle battery enclosures.
              </p>

              <div className="p-3 bg-[#F5F4F0] rounded-lg border border-[#111318]/10 text-xs font-mono">
                <span className="text-[#727982] block mb-1">PERSONAL CONTRIBUTION SCOPE</span>
                <span className="text-[#111318] font-medium leading-normal">
                  Researched high-volume composite manufacturing processes, matrix resin suitability, and structural material selection.
                </span>
              </div>
            </div>

            {/* Image */}
            <div
              onClick={() => setActiveModal({
                src: '/assets/portfolio/composite-exploded.webp',
                title: 'Composite Battery Enclosure Exploded CAD View',
                caption: 'Upper cover, seal gasket, module framework and lower tray assembly.'
              })}
              className="relative bg-white rounded-xl p-3 border border-[#111318]/15 hover:border-[#1677FF] shadow-2xs hover:shadow-sm cursor-pointer group h-64 sm:h-72 flex items-center justify-center transition-all"
            >
              <img
                src="/assets/portfolio/composite-exploded.webp"
                alt="Composite Exploded View"
                className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute bottom-3 right-3 p-2 bg-[#1677FF] rounded-lg text-white shadow-xs">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#727982]">
              <span className="px-2.5 py-1 bg-[#F5F4F0] rounded">Material Selection</span>
              <span className="px-2.5 py-1 bg-[#F5F4F0] rounded">Composite Layup</span>
              <span className="px-2.5 py-1 bg-[#F5F4F0] rounded">Manufacturability</span>
            </div>
          </div>

          {/* Project 2: Crash Impact Simulation */}
          <div className="gsap-crash-card bg-white border border-[#111318]/10 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-[#1677FF]/10 text-[#1677FF] rounded font-mono text-xs font-bold">
                  PROJECT B
                </span>
                <span className="text-xs font-mono text-[#727982]">LS-DYNA Explicit Solvers</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#111318]">
                Crash Attenuator Non-Linear Impact Simulation
              </h3>

              <p className="text-sm text-[#111318]/80 leading-relaxed font-sans border-l-2 border-[#1677FF] pl-3 py-1">
                Simulated dynamic frontal impact attenuator deformation in LS-DYNA, achieving a 90.2% simulated intrusion reduction and 77.9% simulated peak-stress reduction compared to the baseline structure.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono bg-[#F5F4F0] p-3 rounded-lg border border-[#111318]/10">
                <div>
                  <span className="text-[#727982] block">INTRUSION REDUCTION</span>
                  <span className="font-bold text-[#1677FF]">90.2% (Simulated)</span>
                </div>
                <div>
                  <span className="text-[#727982] block">PEAK STRESS REDUCTION</span>
                  <span className="font-bold text-[#1677FF]">77.9% (Simulated)</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div
              onClick={() => setActiveModal({
                src: '/assets/portfolio/crash-comparison.webp',
                title: 'Baseline vs Attenuator LS-DYNA Crash Simulation Comparison',
                caption: 'Von Mises stress distribution and intrusion contours (Simulation Results).'
              })}
              className="relative bg-white rounded-xl p-3 border border-[#111318]/15 hover:border-[#1677FF] shadow-2xs hover:shadow-sm cursor-pointer group h-64 sm:h-72 flex items-center justify-center transition-all"
            >
              <img
                src="/assets/portfolio/crash-comparison.webp"
                alt="Crash Simulation Comparison"
                className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#1677FF] text-white text-[10px] font-mono rounded shadow-xs">
                SIMULATION RESULTS
              </div>
              <div className="absolute bottom-3 right-3 p-2 bg-[#1677FF] rounded-lg text-white shadow-xs">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#727982]">
              <span className="px-2.5 py-1 bg-[#F5F4F0] rounded">LS-DYNA</span>
              <span className="px-2.5 py-1 bg-[#F5F4F0] rounded">HyperMesh</span>
              <span className="px-2.5 py-1 bg-[#F5F4F0] rounded">Non-Linear Dynamics</span>
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
