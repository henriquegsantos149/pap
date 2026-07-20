import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pap5Benefits from './components/Pap5Benefits';
import AboutPAP from './components/AboutPAP';
import TargetAudience from './components/TargetAudience';
import Transformation from './components/Transformation';
import Methodology from './components/Methodology';
import Curriculum from './components/Curriculum';
import MecRecognition from './components/MecRecognition';
import Bonuses from './components/Bonuses';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Guarantees from './components/Guarantees';
import Faculty from './components/Faculty';
import FAQ from './components/FAQ';
import StickyCTA from './components/StickyCTA';
import LeadModal from './components/LeadModal';
import ExitIntentModal from './components/ExitIntentModal';
import NoveltyModal from './components/NoveltyModal';

const checkoutRedirectUrl = 'https://pay.voompcreators.com.br/428/offer/uBszrb/?cupom=ESPECIAL500';

function App() {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  const [isExitOpen, setIsExitOpen] = useState(false);
  const [isNoveltyOpen, setIsNoveltyOpen] = useState(false);

  // Show novelty modal on first load
  useEffect(() => {
    const hasSeenNovelty = sessionStorage.getItem('seenNoveltyPopup');
    if (!hasSeenNovelty) {
      const timer = setTimeout(() => {
        setIsNoveltyOpen(true);
        sessionStorage.setItem('seenNoveltyPopup', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Bind exit intent to open the QGIS package lead collection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 40) {
        const hasSeen = sessionStorage.getItem('seenExitPopup');
        if (!hasSeen) {
          sessionStorage.setItem('seenExitPopup', 'true');
          setIsExitOpen(true);
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const openLeadModal = () => setIsLeadOpen(true);
  const closeLeadModal = () => setIsLeadOpen(false);
  const closeExitModal = () => setIsExitOpen(false);
  const closeNoveltyModal = () => setIsNoveltyOpen(false);

  return (
    <main className="w-full min-h-screen bg-[var(--color-brand-dark)] text-[var(--color-brand-light)] font-secondary selection:bg-[var(--color-brand-primary)] selection:text-[var(--color-brand-dark)]">
      
      {/* Navigation Header */}
      <Header />
      
      {/* Sections */}
      <Hero onOpenModal={openLeadModal} />
      <Pap5Benefits />
      <AboutPAP />
      <TargetAudience />
      <Transformation onOpenModal={openLeadModal} />
      <Methodology />
      <Curriculum />
      <MecRecognition />
      <Bonuses />
      <Testimonials />
      
      {/* Pricing and Offer block */}
      <Pricing onOpenModal={openLeadModal} />
      
      {/* Legal & Conditional Guarantees */}
      <Guarantees />
      
      {/* Profile Bio */}
      <Faculty onOpenModal={openLeadModal} />
      
      {/* Accordion FAQ & WhatsApp link */}
      <FAQ />

      {/* Floating Interactive CTA */}
      <StickyCTA onOpenModal={openLeadModal} />

      {/* Popups / Modals */}
      <LeadModal 
        isOpen={isLeadOpen} 
        onClose={closeLeadModal} 
        checkoutUrl={checkoutRedirectUrl}
      />
      
      <ExitIntentModal 
        isOpen={isExitOpen} 
        onClose={closeExitModal} 
      />
      
      <NoveltyModal 
        isOpen={isNoveltyOpen} 
        onClose={closeNoveltyModal} 
      />

      {/* Footer */}
      <footer className="bg-[#020604] border-t border-black/10 py-10 text-center text-[var(--color-brand-light)]/40 text-xs">
        <p className="font-secondary tracking-widest uppercase mb-2">
          © {new Date().getFullYear()} Ambiental Pro. Todos os direitos reservados.
        </p>
        <p className="font-secondary text-[10px] text-[var(--color-brand-light)]/20 mt-1 max-w-md mx-auto px-4">
          O Programa Ambiental Pro (PAP) é um curso livre de Extensão Universitária. As marcas citadas são de propriedade de seus respectivos desenvolvedores.
        </p>
      </footer>

    </main>
  );
}

export default App;
