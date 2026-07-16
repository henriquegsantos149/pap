import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-brand-dark)]/90 backdrop-blur-md border-b border-white/10 py-2">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-4">
        {/* Left Side: Logo Ambiental Pro */}
        <div className="flex justify-start flex-1">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="cursor-pointer"
          >
            <img 
              src={`${import.meta.env.BASE_URL}logo-ambientalpro.webp`} 
              alt="Ambiental Pro Logo" 
              className="h-8 md:h-12 w-auto object-contain py-0.5"
            />
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex justify-end flex-1">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--color-brand-light)] p-2 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center justify-center gap-8 py-2">
          <a href="#para-quem-e" className="text-xs font-medium hover:text-[var(--color-brand-primary)] transition-colors uppercase tracking-widest whitespace-nowrap">Para Quem É</a>
          <a href="#metodo" className="text-xs font-medium hover:text-[var(--color-brand-secondary)] transition-colors uppercase tracking-widest whitespace-nowrap">O Método</a>
          <a href="#conteudo" className="text-xs font-medium hover:text-[var(--color-brand-accent)] transition-colors uppercase tracking-widest whitespace-nowrap">Conteúdo</a>
          <a href="#bonus" className="text-xs font-medium hover:text-[var(--color-brand-primary)] transition-colors uppercase tracking-widest whitespace-nowrap">Bônus</a>
          <a href="#depoimentos" className="text-xs font-medium hover:text-[var(--color-brand-secondary)] transition-colors uppercase tracking-widest whitespace-nowrap">Depoimentos</a>
          <a href="#perguntas-frequentes" className="text-xs font-medium hover:text-[var(--color-brand-accent)] transition-colors uppercase tracking-widest whitespace-nowrap">Dúvidas</a>
        </nav>

        {/* Right Side: PAP & QGIS Logos */}
        <div className="hidden md:flex justify-end flex-1">
          <img 
            src={`${import.meta.env.BASE_URL}header-logo.png`} 
            alt="PAP & QGIS Logos" 
            className="h-10 md:h-12 w-auto object-contain py-0.5"
          />
        </div>
      </div>

      {/* Navigation - Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--color-brand-dark)] border-b border-white/10 flex flex-col p-4 shadow-lg shadow-black/50">
          <a href="#para-quem-e" onClick={() => setIsOpen(false)} className="py-3 px-4 text-xs font-medium hover:bg-white/5 hover:text-[var(--color-brand-primary)] transition-colors uppercase tracking-widest border-b border-white/5">Para Quem É</a>
          <a href="#metodo" onClick={() => setIsOpen(false)} className="py-3 px-4 text-xs font-medium hover:bg-white/5 hover:text-[var(--color-brand-secondary)] transition-colors uppercase tracking-widest border-b border-white/5">O Método</a>
          <a href="#conteudo" onClick={() => setIsOpen(false)} className="py-3 px-4 text-xs font-medium hover:bg-white/5 hover:text-[var(--color-brand-accent)] transition-colors uppercase tracking-widest border-b border-white/5">Conteúdo</a>
          <a href="#bonus" onClick={() => setIsOpen(false)} className="py-3 px-4 text-xs font-medium hover:bg-white/5 hover:text-[var(--color-brand-primary)] transition-colors uppercase tracking-widest border-b border-white/5">Bônus</a>
          <a href="#depoimentos" onClick={() => setIsOpen(false)} className="py-3 px-4 text-xs font-medium hover:bg-white/5 hover:text-[var(--color-brand-secondary)] transition-colors uppercase tracking-widest border-b border-white/5">Depoimentos</a>
          <a href="#perguntas-frequentes" onClick={() => setIsOpen(false)} className="py-3 px-4 text-xs font-medium hover:bg-white/5 hover:text-[var(--color-brand-accent)] transition-colors uppercase tracking-widest">Dúvidas</a>
        </div>
      )}
    </header>
  );
}
