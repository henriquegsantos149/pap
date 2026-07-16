import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

const totalSlides = 37;
const slides = Array.from({ length: totalSlides }, (_, i) => i + 1);

export default function Curriculum() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, []);

  return (
    <section id="conteudo" className="py-24 bg-[var(--color-brand-dark)] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[var(--color-brand-accent)] uppercase">CONTEÚDO DO CURSO</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-primary uppercase tracking-wide">
            O que você <span className="text-brand-gradient">irá aprender</span>?
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary text-sm md:text-base mt-4">
            Navegue pelos slides da ementa abaixo. Clique em qualquer slide para expandir e ler em tela cheia.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative flex flex-col items-center justify-center max-w-4xl mx-auto">
          
          {/* Navigation Arrows */}
          <div className="absolute left-[-20px] md:left-[-70px] z-10">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-[var(--color-brand-light)] hover:bg-brand-gradient hover:text-[var(--color-brand-dark)] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
          
          <div className="absolute right-[-20px] md:right-[-70px] z-10">
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-[var(--color-brand-light)] hover:bg-brand-gradient hover:text-[var(--color-brand-dark)] transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Current Slide Display */}
          <div className="w-full relative group">
            <div 
              onClick={() => setActiveSlide(currentIndex + 1)}
              className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-black cursor-zoom-in"
            >
              <img 
                src={`${import.meta.env.BASE_URL}curriculum/slide-${currentIndex + 1}.png`}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-contain"
              />
              
              {/* Hover Zoom overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-white/20 text-xs uppercase tracking-wider text-white">
                  <Maximize2 className="w-4 h-4" />
                  Expandir Slide
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicator and jump controls */}
          <div className="mt-8 flex flex-col items-center gap-4 w-full">
            <span className="text-sm font-semibold tracking-wider font-secondary text-[var(--color-brand-light)]/60">
              Slide <span className="text-[var(--color-brand-primary)] font-bold">{currentIndex + 1}</span> de {totalSlides}
            </span>
            
            {/* Dots Scroll */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-lg">
              {slides.map((slide, idx) => (
                <button
                  key={slide}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex 
                      ? 'bg-[var(--color-brand-primary)] scale-125' 
                      : 'bg-white/10 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox / Modal Modal */}
      <AnimatePresence>
        {activeSlide !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveSlide(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 hover:scale-105 active:scale-95 transition-all z-20 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Carousel Modal inner navigation */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
                setActiveSlide((currentIndex - 1 + totalSlides) % totalSlides + 1);
              }}
              className="absolute left-6 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all z-10 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
                setActiveSlide((currentIndex + 1) % totalSlides + 1);
              }}
              className="absolute right-6 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all z-10 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Image */}
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-6xl aspect-[16/9] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={`${import.meta.env.BASE_URL}curriculum/slide-${activeSlide}.png`}
                alt={`Curriculum Slide ${activeSlide}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg border border-white/10 shadow-2xl"
              />
              
              <div className="absolute bottom-[-40px] text-center w-full">
                <p className="text-sm font-semibold tracking-wider font-secondary text-white/60">
                  Slide {activeSlide} de {totalSlides}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
