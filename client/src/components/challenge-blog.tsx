import { ArrowLeft, Lightbulb, Target, Settings, AlertTriangle, Trophy } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";
import StaticReviewSection from "./static-review-section";

interface ChallengeBlogProps {
  title: string;
  description: string;
  heroImage: string;
  colorClass: string;
  bgColor: string;
  challengeType: string;
  content: {
    conceive: string[];
    design: string[];
    implement: string[];
    operate: string[];
  };
  processImages: string[];
}

export default function ChallengeBlog({ 
  title, 
  description, 
  heroImage, 
  colorClass, 
  bgColor, 
  challengeType,
  content, 
  processImages 
}: ChallengeBlogProps) {
  // Auto-scroll to the first section (Resultados Finales) when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      const firstSection = document.getElementById('section-0');
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      title: "Concebir",
      icon: Lightbulb,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      items: content.conceive
    },
    {
      title: "Diseñar",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-100",
      items: content.design
    },
    {
      title: "Implementar",
      icon: Settings,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      items: content.implement
    },
    {
      title: "Operar",
      icon: Trophy,
      color: "text-red-600",
      bgColor: "bg-red-100",
      items: content.operate
    }
  ];

  return (
    <div className="min-h-screen bg-black dark:bg-black">
      {/* Navigation */}
      <nav className="bg-gray-900 dark:bg-gray-900 shadow-sm sticky top-0 z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <div className="flex items-center cursor-pointer text-white dark:text-white hover:text-blue-400 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="text-lg font-semibold">Volver al Inicio</span>
              </div>
            </Link>
            <h1 className="text-xl font-bold text-white dark:text-white">{title}</h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className={`absolute inset-0 ${bgColor}`} />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">{description}</p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-black dark:bg-black">
        <div className="grid gap-16">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card key={section.title} id={`section-${index}`} className="shadow-xl bg-gray-900 dark:bg-gray-900 border-gray-700 dark:border-gray-700">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${section.bgColor} rounded-full flex items-center justify-center mr-4`}>
                      <IconComponent className={`${section.color} w-6 h-6`} />
                    </div>
                    <h2 className="text-3xl font-bold text-white dark:text-white">{section.title}</h2>
                  </div>
                  
                  {/* Process Image or Video */}
                  {processImages[index] && (
                    <div className="mb-8">
                      {typeof processImages[index] === 'string' && processImages[index].includes('.mp4') ? (
                        <video 
                          src={processImages[index]} 
                          controls
                          className="w-full max-w-2xl mx-auto rounded-xl shadow-lg"
                          style={{ maxHeight: '400px' }}
                          preload="metadata"
                        >
                          Tu navegador no soporta el elemento de video.
                        </video>
                      ) : (
                        <img 
                          src={processImages[index]} 
                          alt={`${section.title} proceso`}
                          className="w-full max-w-2xl mx-auto rounded-xl shadow-lg"
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                    </div>
                  )}
                  
                  <div className="grid gap-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-gray-800 dark:bg-gray-800 rounded-lg p-6 border border-gray-600 dark:border-gray-600">
                        <p className="text-gray-300 dark:text-gray-300 leading-relaxed text-lg">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Review Section */}
        <StaticReviewSection challengeType={challengeType} challengeTitle={title} />
      </div>
    </div>
  );
}
