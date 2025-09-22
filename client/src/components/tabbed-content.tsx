import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import TeamSection from "@/components/team-section";
import HistorySection from "@/components/history-section";
import ContextSection from "@/components/context-section";
import ChallengesSection from "@/components/challenges-section";
import CDIOSection from "@/components/cdio-section";
import TimelineSection from "@/components/timeline-section";
import ContactFormSection from "@/components/contact-form-section";

export default function TabbedContent() {
  const { t } = useLanguage();

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen">
      <Tabs defaultValue="mechatronic-team" className="w-full">
        <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <TabsList className="bg-gray-100 dark:bg-gray-900 border-gray-300 dark:border-gray-700 w-full justify-start h-16">
              <TabsTrigger 
                value="mechatronic-team"
                className="text-gray-900 dark:text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-blue-600 dark:data-[state=active]:text-white px-6 py-4 text-base font-semibold"
              >
                {t('tabs.mechatronicTeam')}
              </TabsTrigger>
              <TabsTrigger 
                value="mechatronic-universe"
                className="text-gray-900 dark:text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-blue-600 dark:data-[state=active]:text-white px-6 py-4 text-base font-semibold"
              >
                {t('tabs.mechatronicUniverse')}
              </TabsTrigger>
              <TabsTrigger 
                value="professional-team" 
                className="text-gray-900 dark:text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-blue-600 dark:data-[state=active]:text-white px-6 py-4 text-base font-semibold"
              >
                {t('tabs.professionalTeam')}
              </TabsTrigger>
              <TabsTrigger 
                value="graduates-companies"
                className="text-gray-900 dark:text-white data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-blue-600 dark:data-[state=active]:text-white px-6 py-4 text-base font-semibold"
              >
                {t('tabs.graduatesCompanies')}
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="professional-team" className="mt-0">
          <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
            {/* Section for teachers and assistants only */}
            <section className="py-20 bg-white dark:bg-black">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Equipo de Profesionales
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Maestros y ayudantes que apoyan nuestro desarrollo académico
                  </p>
                </div>
                
                {/* Content to be added later */}
                <div className="text-center py-20">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    Próximamente disponible
                  </p>
                </div>
              </div>
            </section>
          </div>
        </TabsContent>

        <TabsContent value="graduates-companies" className="mt-0">
          <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
            {/* New section for graduates and companies */}
            <section className="py-20 bg-white dark:bg-black">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Egresados y Empresas EIA
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Red de egresados y empresas colaboradoras
                  </p>
                </div>
                
                {/* Content to be added later */}
                <div className="text-center py-20">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    Próximamente disponible
                  </p>
                </div>
              </div>
            </section>
          </div>
        </TabsContent>

        <TabsContent value="mechatronic-team" className="mt-0">
          <div className="bg-black dark:bg-black text-white dark:text-white">
            <TeamSection />
            <CDIOSection />
            <ChallengesSection />
            <ContactFormSection />
          </div>
        </TabsContent>

        <TabsContent value="mechatronic-universe" className="mt-0">
          <div className="bg-black text-white min-h-screen">
            <HistorySection />
            <TimelineSection />
            <ContextSection />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}