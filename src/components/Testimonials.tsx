import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

const screenshotTestimonials = [
  { id: 1, src: 'depoimento-3.png' },
  { id: 2, src: 'depoimento-4.png' },
  { id: 3, src: 'depoimento-5.png' },
  { id: 4, src: 'depoimento-8.png' },
  { id: 5, src: 'depoimento-1.1.png' },
  { id: 6, src: 'depoimento-1.2.png' },
  { id: 7, src: 'depoimento-2.png' },
  { id: 8, src: 'd1-2023.png' },
  { id: 9, src: 'd3-2023.png' },
  { id: 10, src: 'd4-2023.png' },
  { id: 11, src: 'd5-2023.png' },
  { id: 12, src: 'd7-2023.png' },
  { id: 13, src: 'd8-2023.png' },
  { id: 14, src: 'd9-2023.png' },
  { id: 15, src: 'd10-2023.png' },
  { id: 16, src: 'd11-2023.png' },
  { id: 17, src: 'd13-2023.png' }
];

const videoTestimonials = [
  { id: 'v1', name: 'Vitor Rodolfo', videoId: 'C_SwspeJrNw', thumb: 'https://img.youtube.com/vi/C_SwspeJrNw/hqdefault.jpg' },
  { id: 'v2', name: 'Pilar', videoId: 'msRyNXuon0c', thumb: 'https://img.youtube.com/vi/msRyNXuon0c/hqdefault.jpg' },
  { id: 'v3', name: 'Fernando', videoId: 'XderFHgnuOI', thumb: 'https://img.youtube.com/vi/XderFHgnuOI/hqdefault.jpg' },
  { id: 'v4', name: 'Pedro', videoId: 'BKROv8Skk3Q', thumb: 'https://img.youtube.com/vi/BKROv8Skk3Q/hqdefault.jpg' },
  { id: 'v5', name: 'Alysson Santos', videoId: 'A2FHfcHgBwc', thumb: 'https://img.youtube.com/vi/A2FHfcHgBwc/hqdefault.jpg' },
  { id: 'v6', name: 'Amanda', videoId: 'iSolKln-eZI', thumb: 'https://img.youtube.com/vi/iSolKln-eZI/hqdefault.jpg' },
  { id: 'v7', name: 'Rebecca', videoId: 'ZIfexKIDjIw', thumb: 'https://img.youtube.com/vi/ZIfexKIDjIw/hqdefault.jpg' },
  { id: 'v8', name: 'Paulo', videoId: 'TtsABTcnYFw', thumb: 'https://img.youtube.com/vi/TtsABTcnYFw/hqdefault.jpg' }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % screenshotTestimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + screenshotTestimonials.length) % screenshotTestimonials.length);
  }, []);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 50) {
      prevSlide();
    } else if (info.offset.x < -50) {
      nextSlide();
    }
  };

  const getRelativePosition = (itemIndex: number) => {
    let diff = itemIndex - currentIndex;
    const len = screenshotTestimonials.length;
    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;
    return diff;
  };

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-[var(--color-brand-dark)] to-[#010905] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[var(--color-brand-primary)] uppercase">DEPOIMENTOS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-primary uppercase tracking-wide">
            O que os <span className="text-brand-gradient">alunos dizem</span>?
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary text-sm md:text-base mt-4">
            Resultados reais de quem já aplicou o método TPRO e alavancou seus resultados no geoprocessamento.
          </p>
        </div>

        {/* Screenshot Slider Section */}
        <div className="relative flex flex-col items-center min-h-[350px] md:min-h-[450px] justify-center mb-24 overflow-visible">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 z-40 p-3 rounded-full bg-white/5 border border-white/10 text-[var(--color-brand-light)] hover:bg-brand-gradient hover:text-[var(--color-brand-dark)] transition-all hidden lg:block cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 z-40 p-3 rounded-full bg-white/5 border border-white/10 text-[var(--color-brand-light)] hover:bg-brand-gradient hover:text-[var(--color-brand-dark)] transition-all hidden lg:block cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center py-10 overflow-visible">
            {screenshotTestimonials.map((testimonial, i) => {
              const relativePos = getRelativePosition(i);
              const isActive = relativePos === 0;
              const isVisible = Math.abs(relativePos) <= 2; // Show neighbors

              return (
                <motion.div
                  key={testimonial.id}
                  initial={false}
                  animate={{
                    x: relativePos * 290, 
                    scale: isActive ? 1 : 0.85,
                    opacity: isVisible ? (isActive ? 1 : 0.4) : 0, 
                    filter: isActive ? 'blur(0px)' : 'blur(4px)',
                    zIndex: isActive ? 30 : 20 - Math.abs(relativePos),
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 26,
                  }}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                  className="absolute w-[280px] md:w-[350px] cursor-grab active:cursor-grabbing"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-black aspect-[4/5] flex items-center justify-center">
                    <img 
                      src={`${import.meta.env.BASE_URL}testimonials/${testimonial.src}`}
                      alt={`Depoimento ${i + 1}`}
                      className="w-full h-full object-contain pointer-events-none"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Video Testimonials Section */}
        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-bold font-primary uppercase text-center mb-12 tracking-wide text-white">
            Histórias de <span className="text-brand-gradient">Sucesso</span> em Vídeo
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {videoTestimonials.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="group cursor-pointer relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg flex flex-col justify-end"
                onClick={() => setSelectedVideo(video.videoId)}
              >
                {/* Background image preview */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${video.thumb})` }}
                ></div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-brand-primary)]/90 flex items-center justify-center text-[var(--color-brand-dark)] shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Name Label */}
                <div className="relative z-10 p-4">
                  <p className="font-bold text-white text-sm uppercase tracking-wide drop-shadow-md">
                    {video.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Video Modal Player (Lightbox) */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <button className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all cursor-pointer">
              <X className="w-6 h-6" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                title="Depoimento Aluno"
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
