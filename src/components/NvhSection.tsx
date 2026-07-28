import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Activity, Radio, Cpu, ZoomIn, Layers, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageLightboxModal } from './ImageLightboxModal';

gsap.registerPlugin(ScrollTrigger);

export const NvhSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{ src: string; title: string; caption?: string } | null>(null);

  const study01CardRef = useRef<HTMLDivElement | null>(null);
  const study01ImageRef = useRef<HTMLDivElement | null>(null);
  const study01TextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!study01CardRef.current || !study01ImageRef.current || !study01TextRef.current) return;

    // Respect prefers-reduced-motion accessibility setting
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Image enters smoothly from the left
      gsap.fromTo(
        study01ImageRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: study01CardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );

      // Text enters smoothly from the right
      gsap.fromTo(
        study01TextRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: study01CardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }, study01CardRef);

    return () => ctx.revert();
  }, []);

  const nvhStudies = [
    {
      id: 'tuned-beam',
      title: 'A. Tuned Beam Vibration Study',
      subtitle: 'Cantilever Beam Dual Vibration Absorber Tuning',
      objective: 'Compare absorber placement and its effect on the frequency response around target modes.',
      metric: 'Target Mode: 87.64 Hz',
      tools: ['ANSYS Mechanical', 'MATLAB', 'Modal Analysis'],
      images: [
        {
          src: '/assets/portfolio/nvh-beam-model.svg',
          title: 'Cantilever Beam Modal FEA Setup',
          caption: 'Boundary conditions and dual vibration absorber nodal placement.'
        },
        {
          src: '/assets/portfolio/nvh-beam.webp',
          title: 'Beam FRF Peak Suppression Comparison Plot',
          caption: 'FRF baseline vs dual tuned absorber response around 87.64 Hz mode.'
        }
      ]
    },
    {
      id: 'quarter-car',
      title: 'B. Quarter-Car Ride Comfort',
      subtitle: '3-DOF Simscape Dynamic Road Excitation Model',
      objective: 'Quantify the transmission of road excitation through the suspension, body, and occupant.',
      metric: '3-DOF Simscape Model',
      tools: ['Simscape', 'MATLAB', 'Simulink'],
      images: [
        {
          src: '/assets/portfolio/nvh-quarter-car.webp',
          title: '3-DOF Occupant, Body & Suspension Model Structure',
          caption: 'Vehicle, wheel-hub and occupant response network in Simscape.'
        },
        {
          src: '/assets/portfolio/nvh-quarter-car-barchart.svg',
          title: 'Ride Comfort Index vs Suspension Parameters',
          caption: 'Parametric evaluation of ride comfort index across baseline, load, stiffness & damping.'
        }
      ]
    },
    {
      id: 'cabin-acoustics',
      title: 'C. Vehicle Cabin Vibro-acoustics',
      subtitle: 'Acoustic Absorption Impact on Low-Frequency Cabin Response',
      objective: 'Evaluate how acoustic absorption changes low-frequency cabin response in the 20–200 Hz study band.',
      metric: 'Study Band: 20–200 Hz',
      tools: ['ANSYS Mechanical', 'MATLAB', 'Acoustic FEA'],
      images: [
        {
          src: '/assets/portfolio/nvh-cabin.webp',
          title: '3D Cabin Acoustic Finite Element Mesh',
          caption: 'Simplified automotive cabin cavity FEA acoustic model.'
        },
        {
          src: '/assets/portfolio/nvh-cabin-result.webp',
          title: 'Acoustic Pressure Frequency Response Plot',
          caption: 'Baseline vs absorbed sound-pressure spectrum across 20–200 Hz.'
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#F5F4F0] text-[#111318] relative bg-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header with Animated Frequency Wave SVG */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#111318]/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111318] text-white rounded-full text-xs font-mono">
              <Activity className="w-3.5 h-3.5 text-[#1677FF]" />
              <span>NVH & ACOUSTICS ENGINEERING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#111318] tracking-tight">
              Noise, Vibration & Harshness Studies
            </h2>
            <p className="text-sm sm:text-base text-[#111318]/70 leading-relaxed">
              Finite element acoustics, dynamic excitation transmissibility and dynamic vibration absorber tuning across structured simulation environments.
            </p>
          </div>

          {/* Animated Frequency Sine Wave Line Effect */}
          <div className="w-full md:w-64 h-16 bg-[#111318] rounded-xl p-3 flex flex-col justify-between border border-[#111318]/20 shadow-xs">
            <div className="flex justify-between text-[10px] font-mono text-[#727982]">
              <span>FREQ.SWEEP</span>
              <span className="text-[#1677FF]">20-200 Hz</span>
            </div>
            <svg viewBox="0 0 200 30" className="w-full h-8 overflow-visible">
              <path
                d="M 0 15 Q 20 0, 40 15 T 80 15 T 120 15 T 160 15 T 200 15"
                fill="none"
                stroke="#1677FF"
                strokeWidth="2"
                className="animate-pulse"
              />
            </svg>
          </div>
        </div>

        {/* Technical Studies Cards Stack */}
        <div className="space-y-12">
          {nvhStudies.map((study, idx) => {
            if (idx === 0) {
              return (
                <div
                  key={study.id}
                  ref={study01CardRef}
                  className="bg-white border border-[#111318]/10 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Image Block - Enters smoothly from the left via GSAP ScrollTrigger */}
                    <div
                      ref={study01ImageRef}
                      className="lg:col-span-7 lg:order-1 order-2 grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      {study.images.map((img, iIdx) => (
                        <div
                          key={iIdx}
                          onClick={() => setActiveModal({ src: img.src, title: img.title, caption: img.caption })}
                          className="group relative bg-[#F8F9FA] rounded-xl p-3 border border-[#111318]/10 hover:border-[#1677FF] cursor-pointer overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all"
                        >
                          <div className="relative w-full h-52 sm:h-60 rounded flex items-center justify-center p-1 bg-white">
                            <img
                              src={img.src}
                              alt={img.title}
                              className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform duration-500"
                            />
                          </div>
                          <div className="mt-2 pt-2 border-t border-[#111318]/10 flex justify-between items-center text-[#111318]">
                            <span className="text-xs font-semibold font-display truncate pr-2 text-[#111318]">{img.title}</span>
                            <ZoomIn className="w-4 h-4 text-[#1677FF] shrink-0" />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Text Description Block - Enters smoothly from the right via GSAP ScrollTrigger */}
                    <div ref={study01TextRef} className="lg:col-span-5 lg:order-2 order-1 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 bg-[#1677FF]/10 text-[#1677FF] rounded font-mono text-xs font-bold">
                          STUDY 0{idx + 1}
                        </span>
                        <span className="text-xs font-mono text-[#727982]">{study.metric}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold font-display text-[#111318]">
                        {study.title}
                      </h3>

                      <p className="text-xs font-mono text-[#1677FF] font-semibold">
                        {study.subtitle}
                      </p>

                      <p className="text-sm text-[#111318]/80 leading-relaxed font-sans border-l-2 border-[#1677FF] pl-3 py-1">
                        {study.objective}
                      </p>

                      <div className="pt-3">
                        <span className="text-[11px] font-mono text-[#727982] uppercase block mb-2">SIMULATION TOOLS</span>
                        <div className="flex flex-wrap gap-1.5">
                          {study.tools.map((tool, tIdx) => (
                            <span key={tIdx} className="px-2.5 py-1 bg-[#F5F4F0] text-[#111318] text-xs font-mono rounded border border-[#111318]/10">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            }

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-[#111318]/10 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Description Side */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-[#1677FF]/10 text-[#1677FF] rounded font-mono text-xs font-bold">
                        STUDY 0{idx + 1}
                      </span>
                      <span className="text-xs font-mono text-[#727982]">{study.metric}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-display text-[#111318]">
                      {study.title}
                    </h3>

                    <p className="text-xs font-mono text-[#1677FF] font-semibold">
                      {study.subtitle}
                    </p>

                    <p className="text-sm text-[#111318]/80 leading-relaxed font-sans border-l-2 border-[#1677FF] pl-3 py-1">
                      {study.objective}
                    </p>

                    <div className="pt-3">
                      <span className="text-[11px] font-mono text-[#727982] uppercase block mb-2">SIMULATION TOOLS</span>
                      <div className="flex flex-wrap gap-1.5">
                        {study.tools.map((tool, tIdx) => (
                          <span key={tIdx} className="px-2.5 py-1 bg-[#F5F4F0] text-[#111318] text-xs font-mono rounded border border-[#111318]/10">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side-by-Side Plots with Clean Light Cards */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {study.images.map((img, iIdx) => (
                      <div
                        key={iIdx}
                        onClick={() => setActiveModal({ src: img.src, title: img.title, caption: img.caption })}
                        className="group relative bg-[#F8F9FA] rounded-xl p-3 border border-[#111318]/10 hover:border-[#1677FF] cursor-pointer overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all"
                      >
                        <div className="relative w-full h-52 sm:h-60 rounded flex items-center justify-center p-1 bg-white">
                          <img
                            src={img.src}
                            alt={img.title}
                            className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform duration-500"
                          />
                        </div>
                        <div className="mt-2 pt-2 border-t border-[#111318]/10 flex justify-between items-center text-[#111318]">
                          <span className="text-xs font-semibold font-display truncate pr-2 text-[#111318]">{img.title}</span>
                          <ZoomIn className="w-4 h-4 text-[#1677FF] shrink-0" />
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
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
