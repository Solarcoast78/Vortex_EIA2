import { Clock, Calendar, Lightbulb, Cog, Cpu, Zap } from "lucide-react";

export default function TimelineSection() {
  const timelineEvents = [
    {
      year: "1969",
      title: "Nacimiento del Término",
      description: "Tetsuro Mori acuña el término 'mecatrónica' en Yaskawa Electric Corporation",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "bg-blue-500",
      position: "left"
    },
    {
      year: "1971",
      title: "Marca Registrada",
      description: "Yaskawa obtiene la marca registrada del término mecatrónica",
      icon: <Calendar className="w-6 h-6" />,
      color: "bg-emerald-500",
      position: "right"
    },
    {
      year: "1980s",
      title: "Expansión Industrial",
      description: "La mecatrónica se expande en la industria automotriz y de manufactura",
      icon: <Cog className="w-6 h-6" />,
      color: "bg-purple-500",
      position: "left"
    },
    {
      year: "1982",
      title: "Liberación del Término",
      description: "Yaskawa permite el uso libre del término para toda la industria",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-amber-500",
      position: "right"
    },
    {
      year: "1990s",
      title: "Era Digital",
      description: "Integración de sistemas computacionales y control digital avanzado",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-red-500",
      position: "left"
    },
    {
      year: "2000s+",
      title: "Industria 4.0",
      description: "IoT, IA y sistemas autónomos revolucionan la mecatrónica moderna",
      icon: <Clock className="w-6 h-6" />,
      color: "bg-indigo-500",
      position: "right"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Línea de Tiempo de la Mecatrónica
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Un recorrido por los momentos clave que definieron esta disciplina
          </p>
        </div>

        <div className="relative">
          {/* Línea central vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 dark:bg-gray-700"></div>

          {/* Eventos del timeline */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Punto central */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-gray-300 dark:border-gray-700 rounded-full z-10"></div>

                {/* Contenido del evento */}
                <div className={`flex ${event.position === 'left' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${event.position === 'left' ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className={`flex items-center space-x-3 mb-4 ${event.position === 'left' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`w-12 h-12 ${event.color} rounded-full flex items-center justify-center text-white`}>
                          {event.icon}
                        </div>
                        <div className={event.position === 'left' ? 'text-right' : 'text-left'}>
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            {event.year}
                          </span>
                        </div>
                      </div>
                      <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-2 ${event.position === 'left' ? 'text-right' : 'text-left'}`}>
                        {event.title}
                      </h3>
                      <p className={`text-gray-600 dark:text-gray-300 leading-relaxed ${event.position === 'left' ? 'text-right' : 'text-left'}`}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}