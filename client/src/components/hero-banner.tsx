import { useLanguage } from "@/contexts/LanguageContext";
import vortexLogo from "@assets/ChatGPT Image 22 sept 2025, 15_28_37_1758572998521.png";

export default function HeroBanner() {
  const { t } = useLanguage();
  return (
    <section className="relative h-96 w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-700 hover:scale-105" 
        style={{
          backgroundImage: `url(${vortexLogo})`,
          backgroundPosition: 'center 20%'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50 transition-opacity duration-500 hover:opacity-80" />
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-bounce-in float">
            VORTEX
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}
