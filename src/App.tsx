import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AutomotiveTransition } from './components/AutomotiveTransition';
import { FsukSection } from './components/FsukSection';
import { NvhSection } from './components/NvhSection';
import { PowertrainSection } from './components/PowertrainSection';
import { PowerElectronicsSection } from './components/PowerElectronicsSection';
import { VehicleDynamicsSection } from './components/VehicleDynamicsSection';
import { CompositeCrashSection } from './components/CompositeCrashSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSoftwareSection } from './components/EducationSoftwareSection';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#111318] selection:bg-[#1677FF] selection:text-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <AutomotiveTransition />
        <FsukSection />
        <NvhSection />
        <PowertrainSection />
        <PowerElectronicsSection />
        <VehicleDynamicsSection />
        <CompositeCrashSection />
        <ExperienceSection />
        <EducationSoftwareSection />
      </main>
      <ContactSection />
    </div>
  );
};

export default App;
