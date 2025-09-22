import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ChallengesSection() {
  const { t } = useLanguage();
  
  const challenges = [
    {
      title: t('challenges.earth.title'),
      description: t('challenges.earth.description'),
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      link: "/reto-tierra",
      colorClass: "earth-color",
      gradientFrom: "from-purple-600/80",
      iconColor: "text-purple-600"
    },
    {
      title: t('challenges.water.title'),
      description: t('challenges.water.description'),
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      link: "/reto-agua",
      colorClass: "water-color",
      gradientFrom: "from-blue-600/80",
      iconColor: "text-blue-600"
    },
    {
      title: t('challenges.air.title'),
      description: t('challenges.air.description'),
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      link: "/reto-aire",
      colorClass: "air-color",
      gradientFrom: "from-cyan-600/80",
      iconColor: "text-cyan-600"
    }
  ];

  return (
    <section id="challenges" className="py-20 dark:bg-black bg-[#000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white dark:text-white mb-4">{t('challenges.title')}</h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 max-w-3xl mx-auto">
            {t('challenges.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <Link href={challenge.link} key={challenge.title}>
              <div className="group cursor-pointer">
                <div className="bg-gray-900 dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden card-hover theme-transition animate-fade-in border border-gray-700 dark:border-gray-700" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={challenge.image}
                      alt={challenge.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${challenge.gradientFrom} to-transparent transition-opacity duration-300 group-hover:opacity-80`} />
                    <div className="absolute bottom-4 left-4 text-white transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                      <div className="text-3xl mb-2 animate-bounce-in float" style={{ animationDelay: `${index * 0.2}s` }}>
                        {challenge.link === "/reto-tierra" && "🚗"}
                        {challenge.link === "/reto-agua" && "🚢"}
                        {challenge.link === "/reto-aire" && "✈️"}
                      </div>
                      <h3 className="text-2xl font-bold">{challenge.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 dark:text-gray-300 mb-4 theme-transition">{challenge.description}</p>
                    <div className={`flex items-center font-medium ${challenge.colorClass} group-hover:scale-105 transition-transform duration-200`}>
                      <span>{t('challenges.exploreProject')}</span>
                      <ArrowRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>


      </div>
    </section>
  );
}
