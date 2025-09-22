import { useLanguage } from "@/contexts/LanguageContext";
import { Lightbulb, Cog, Wrench, Settings } from "lucide-react";

export default function CDIOSection() {
  const { t } = useLanguage();

  const cdioSteps = [
    {
      phase: t('challenges.process.conceive'),
      description: t('challenges.process.conceiveDescription'),
      icon: Lightbulb,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/20"
    },
    {
      phase: t('challenges.process.design'),
      description: t('challenges.process.designDescription'),
      icon: Cog,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20"
    },
    {
      phase: t('challenges.process.implement'),
      description: t('challenges.process.implementDescription'),
      icon: Wrench,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20"
    },
    {
      phase: t('challenges.process.operate'),
      description: t('challenges.process.operateDescription'),
      icon: Settings,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('challenges.designProcess')}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-2">
            {t('challenges.designProcessDescription')}
          </p>
          <p className="text-lg text-gray-400 font-medium">
            Massachusetts Institute of Technology (MIT)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cdioSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.phase}
                className={`${step.bgColor} ${step.borderColor} border-2 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${step.color} mb-4 p-3 rounded-full ${step.bgColor}`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className={`text-xl font-bold ${step.color} mb-3`}>
                    {step.phase}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-900 rounded-full px-6 py-3 border border-gray-700">
            <span className="text-gray-300 font-medium">Metodología aplicada en todos nuestros retos tecnológicos</span>
          </div>
        </div>
      </div>
    </section>
  );
}