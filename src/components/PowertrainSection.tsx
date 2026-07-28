import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Gauge, Compass, Zap, ZoomIn, CheckCircle2, Sliders, ArrowRight } from 'lucide-react';
import { ImageLightboxModal } from './ImageLightboxModal';
import { animateSectionHeader, animateCardsStagger } from '../utils/animations';

export const PowertrainSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{ src: string; title: string; caption?: string } | null>(null);
  const [activePillar, setActivePillar] = useState<'architecture' | 'drivecycle'>('architecture');

  const headerRef = useRef<HTMLDivElement | null>(null);
  const metricsRef = useRef<HTMLDivElement | null>(null);
  const mainStudyRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cleanupHeader: (() => void) | undefined;
    let cleanupMetrics: (() => void) | undefined;
    let cleanupStudy: (() => void) | undefined;
    let cleanupTable: (() => void) | undefined;

    if (headerRef.current) cleanupHeader = animateSectionHeader(headerRef.current);
    if (metricsRef.current) cleanupMetrics = animateCardsStagger(metricsRef.current, '.gsap-powertrain-stat');
    if (mainStudyRef.current) cleanupStudy = animateCardsStagger(mainStudyRef.current, '.gsap-powertrain-card');
    if (tableRef.current) cleanupTable = animateSectionHeader(tableRef.current);

    return () => {
      if (cleanupHeader) cleanupHeader();
      if (cleanupMetrics) cleanupMetrics();
      if (cleanupStudy) cleanupStudy();
      if (cleanupTable) cleanupTable();
    };
  }, []);

  const verifiedMetrics = [
    { label: 'Custom Route Length', value: '17.3 km', sub: 'Sharjah Real-World Trace' },
    { label: 'Simulated Fuel Economy', value: '6.8 → 6.6 L/100 km', sub: 'Optimized Shift Strategy' },
    { label: 'CO2 Emission Reduction', value: '-57.6 g', sub: 'Per Transient Drive Cycle' },
    { label: 'NEDC Validation Difference', value: '1.4%', sub: 'Vs VCA Reference Data' },
  ];

  const optimizationData = [
    { metric: 'Fuel Economy', unit: 'L/100 km', base: '6.8', opt: '6.6', diff: '-0.2 (-2.9%)', highlight: true },
    { metric: 'CO2 Emissions', unit: 'g / cycle', base: '2294.6', opt: '2237.0', diff: '-57.6 g', highlight: true },
    { metric: 'CO Emissions', unit: 'g / cycle', base: '1.3', opt: '1.2', diff: '-0.1 g', highlight: false },
    { metric: 'HC Emissions', unit: 'g / cycle', base: '0.2', opt: '0.1', diff: '-0.1 g', highlight: false },
    { metric: 'NOx Emissions', unit: 'g / cycle', base: '0.1', opt: '0.2', diff: '+0.1 g (Lean Trade-off)', highlight: false },
  ];

  return (
    <section id="ev-powertrain" className="py-24 bg-[#111318] text-white relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1677FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-[#1677FF]">
              <Cpu className="w-3.5 h-3.5" />
              <span>ADVANCED POWERTRAIN ENGINEERING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
              Hybrid Powertrain & Drive Cycle Study
            </h2>
            <p className="text-base text-[#727982] leading-relaxed">
              System-level GT-SUITE simulation of a Toyota Prius parallel hybrid architecture (ICE + EM1 + EM2 + Planetary Power Split + 13-State FSM) combined with custom 17.3 km Sharjah drive cycle synthesis and transmission shift strategy optimization.
            </p>
          </div>

          {/* Mechanical Rotating Gear & Model Label */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3.5 rounded-2xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              className="w-10 h-10 text-[#1677FF]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
            </motion.div>
            <div className="text-xs font-mono">
              <span className="text-white block font-bold">INTEGRATED HYBRID STUDY</span>
              <span className="text-[#727982]">GT-SUITE & GT-DRIVE WORKFLOW</span>
            </div>
          </div>
        </div>

        {/* Confirmed Key Quantified Metrics */}
        <div ref={metricsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {verifiedMetrics.map((m, idx) => (
            <div
              key={idx}
              className="gsap-powertrain-stat bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-[#1677FF] transition-colors"
            >
              <span className="text-xs font-mono text-[#727982]">{m.label}</span>
              <span className="text-2xl sm:text-3xl font-extrabold font-display text-[#1677FF] my-2">
                {m.value}
              </span>
              <span className="text-[11px] font-mono text-slate-300">{m.sub}</span>
            </div>
          ))}
        </div>

        {/* Single Unified Study Content - Dual Pillar Interactive Layout */}
        <div ref={mainStudyRef} className="space-y-8">
          
          {/* Interactive Switcher Bar between Architecture & Drive Cycle Focus */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white/5 p-2 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActivePillar('architecture')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all flex items-center gap-2 ${
                  activePillar === 'architecture'
                    ? 'bg-[#1677FF] text-white shadow-md'
                    : 'text-[#727982] hover:text-white hover:bg-white/5'
                }`}
              >
                <Cpu className="w-4 h-4" />
                <span>Pillar I: GT-SUITE Hybrid Architecture</span>
              </button>
              <button
                onClick={() => setActivePillar('drivecycle')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all flex items-center gap-2 ${
                  activePillar === 'drivecycle'
                    ? 'bg-[#1677FF] text-white shadow-md'
                    : 'text-[#727982] hover:text-white hover:bg-white/5'
                }`}
              >
                <Gauge className="w-4 h-4" />
                <span>Pillar II: Drive Cycle & Shift Tuning</span>
              </button>
            </div>

            <div className="text-xs font-mono text-[#727982] px-3 hidden md:block">
              <span>UNIFIED MODELING & SIMULATION FRAMEWORK</span>
            </div>
          </div>

          {/* Both Pillars Side-by-Side View */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Pillar I Card: Hybrid Architecture & Control Logic */}
            <div className={`gsap-powertrain-card bg-white/5 border rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between transition-all ${
              activePillar === 'architecture' ? 'border-[#1677FF] ring-1 ring-[#1677FF]/50' : 'border-white/10'
            }`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-[#1677FF]/20 text-[#1677FF] rounded font-mono text-xs font-bold">
                    SYSTEM ARCHITECTURE
                  </span>
                  <span className="text-xs font-mono text-[#727982]">GT-SUITE Model</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Parallel Hybrid System & FSM Control
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans border-l-2 border-[#1677FF] pl-3 py-1">
                  Modeled Toyota Prius parallel hybrid architecture comprising ICE, EM1 (generator/starter), EM2 (primary traction motor), BMS, planetary power-split device (PSD), and a 13-mode Finite State Machine (FSM) supervisory controller.
                </p>
              </div>

              {/* Model Architecture Image */}
              <div
                onClick={() => setActiveModal({
                  src: '/assets/portfolio/powertrain-model.webp',
                  title: 'GT-SUITE Hybrid Powertrain System Architecture',
                  caption: 'Full powertrain mechanical and electrical connectivity layout with ICE, EM1, EM2, Battery, Planetary Power-Split Device, and Supervisory Controller.'
                })}
                className="relative bg-white rounded-xl p-3 border border-white/20 hover:border-[#1677FF] cursor-pointer group h-64 sm:h-72 flex items-center justify-center overflow-hidden shadow-xs transition-all"
              >
                <img
                  src="/assets/portfolio/powertrain-model.webp"
                  alt="GT-SUITE Hybrid Powertrain Model Architecture"
                  className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 p-2 bg-[#1677FF] rounded-lg text-white shadow-xs">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono text-slate-300 bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 text-white font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF]" />
                  <span>Key Architecture Subsystems & Functions</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px] text-[#727982]">
                  <li>• 13-State FSM Supervisory Logic</li>
                  <li>• Planetary Gear Power Split (PSD)</li>
                  <li>• EM1 Starter/Generator Control</li>
                  <li>• EM2 Primary Traction Motor</li>
                  <li>• BMS SoC Charge/Discharge Limits</li>
                  <li>• Regenerative Brake Blending</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#727982]">
                <span className="px-2.5 py-1 bg-white/5 rounded">GT-SUITE</span>
                <span className="px-2.5 py-1 bg-white/5 rounded">Power-Split</span>
                <span className="px-2.5 py-1 bg-white/5 rounded">FSM Control</span>
                <span className="px-2.5 py-1 bg-white/5 rounded">Energy Recovery</span>
              </div>
            </div>

            {/* Pillar II Card: Sharjah Drive Cycle & Shift Strategy Tuning */}
            <div className={`gsap-powertrain-card bg-white/5 border rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between transition-all ${
              activePillar === 'drivecycle' ? 'border-[#1677FF] ring-1 ring-[#1677FF]/50' : 'border-white/10'
            }`}>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-[#1677FF]/20 text-[#1677FF] rounded font-mono text-xs font-bold">
                    DRIVE CYCLE & SHIFT STRATEGY
                  </span>
                  <span className="text-xs font-mono text-[#727982]">GT-Drive Model</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Custom Sharjah Route Trace & Shift Tuning
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans border-l-2 border-[#1677FF] pl-3 py-1">
                  Synthesized a 17.3 km real-world GPS speed-time drive cycle in Sharjah (UAE) and optimized the 5-speed transmission shift schedule (advancing up-shifts to 20, 34, 52, 74 km/h) to lower engine speeds and reduce fuel consumption.
                </p>
              </div>

              {/* Clean Cropped Drive Cycle Plot Image */}
              <div
                onClick={() => setActiveModal({
                  src: '/assets/portfolio/powertrain-drive-cycle.webp',
                  title: 'Sharjah Route Speed-Time Drive Cycle Trace (17.3 km)',
                  caption: 'Transient vehicle speed profile over 17.3 km route in GT-Drive synthesized from GPS-logged real-world driving data.'
                })}
                className="relative bg-white rounded-xl p-3 border border-white/20 hover:border-[#1677FF] cursor-pointer group h-64 sm:h-72 flex items-center justify-center overflow-hidden shadow-xs transition-all"
              >
                <img
                  src="/assets/portfolio/powertrain-drive-cycle.webp"
                  alt="Sharjah Route Speed-Time Drive Cycle Trace"
                  className="max-h-full max-w-full object-contain group-hover:scale-103 transition-transform duration-500"
                />

                {/* Animated Vehicle Route Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-[#1677FF] bg-[#111318]/90 backdrop-blur-xs px-2.5 py-1 rounded border border-white/10 pointer-events-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-ping" />
                    <span>TRANSIENT ROUTE SIMULATION</span>
                  </div>
                  <span className="text-white">SHARJAH: 17.3 KM</span>
                </div>

                {/* Moving Pulse Animation along Axis */}
                <div className="absolute bottom-8 left-6 right-6 h-0.5 bg-[#1677FF]/30 pointer-events-none overflow-hidden">
                  <motion.div
                    animate={{ x: ['0%', '100%'] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    className="w-12 h-0.5 bg-[#1677FF] shadow-[0_0_8px_#1677FF]"
                  />
                </div>

                <div className="absolute bottom-3 right-3 p-2 bg-[#1677FF] rounded-lg text-white shadow-xs">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono text-slate-300 bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 text-white font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF]" />
                  <span>Shift Optimization Deliverables</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px] text-[#727982]">
                  <li>• Advanced Up-shifts (Gears 2-5)</li>
                  <li>• Fuel Saved: 6.8 → 6.6 L/100km</li>
                  <li>• CO2 Reduced: -57.6 g / cycle</li>
                  <li>• VCA NEDC Validation (1.4% err)</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#727982]">
                <span className="px-2.5 py-1 bg-white/5 rounded">GT-Drive</span>
                <span className="px-2.5 py-1 bg-white/5 rounded">17.3 km Route</span>
                <span className="px-2.5 py-1 bg-white/5 rounded">6.8 → 6.6 L/100 km</span>
                <span className="px-2.5 py-1 bg-white/5 rounded">-57.6g CO2</span>
              </div>
            </div>

          </div>

        </div>

        {/* Quantified Optimization Results Table Section */}
        <div ref={tableRef} className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1677FF]/20 text-[#1677FF] rounded-full text-xs font-mono mb-1">
                <Sliders className="w-3.5 h-3.5" />
                <span>SHIFT STRATEGY OPTIMIZATION RESULTS</span>
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Baseline vs. Optimised Shift Strategy Performance
              </h3>
            </div>
            <div className="text-xs font-mono text-[#727982]">
              Sharjah 17.3 km Drive Cycle • GT-Drive Simulation Data
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm font-mono">
              <thead>
                <tr className="border-b border-white/10 text-xs text-[#727982] uppercase">
                  <th className="py-3 px-4">Performance Metric</th>
                  <th className="py-3 px-4">Unit</th>
                  <th className="py-3 px-4">Baseline Strategy</th>
                  <th className="py-3 px-4">Optimised Strategy</th>
                  <th className="py-3 px-4">Absolute / Relative Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {optimizationData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF]" />
                      {row.metric}
                    </td>
                    <td className="py-3.5 px-4 text-[#727982]">{row.unit}</td>
                    <td className="py-3.5 px-4 text-slate-300">{row.base}</td>
                    <td className="py-3.5 px-4 text-white font-bold">{row.opt}</td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-bold ${
                        row.highlight ? 'bg-[#1677FF]/20 text-[#1677FF]' : 'bg-white/10 text-slate-300'
                      }`}>
                        {row.diff}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
