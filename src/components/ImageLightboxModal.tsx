import React from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  imageSrc: string;
  title: string;
  caption?: string;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  imageSrc,
  title,
  caption,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111318]/90 backdrop-blur-md p-4 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-[#111318] border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white font-display flex items-center gap-2">
              <ZoomIn className="w-5 h-5 text-[#1677FF]" />
              {title}
            </h3>
            {caption && <p className="text-xs md:text-sm text-[#727982] mt-0.5">{caption}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#727982] hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#1677FF]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative flex-1 overflow-auto flex items-center justify-center min-h-[300px]">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
          />
        </div>

        <div className="pt-3 mt-3 border-t border-white/10 flex justify-between items-center text-xs text-[#727982] font-mono">
          <span>HIGH-RESOLUTION ENGINEERING VIEW</span>
          <button 
            onClick={onClose}
            className="text-[#1677FF] hover:underline"
          >
            Close Viewer [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
