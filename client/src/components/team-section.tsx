import { useLanguage } from "@/contexts/LanguageContext";
import gustavoImg from "@/assets/1000073045_1753322693414.jpg";
import susanaImg from "@/assets/1000074098_1753817927059.jpg";
import emilianoImg from "@/assets/1000073551_1753322701190.jpg";

export default function TeamSection() {
  const { t } = useLanguage();
  const teamMembers = [
    {
      name: "Gustavo Santos",
      role: "Líder de Proyecto & Especialista en Robótica",
      description: "Tengo 17 años y soy egresado del Colegio Hontanares. Desde muy joven me ha apasionado el \"aprender a aprender\", es decir, no solo memorizar información, sino entender profundamente cómo y por qué funcionan las cosas. Esta curiosidad constante me llevó a explorar la programación desde pequeño, creando programas simples y construyendo máquinas básicas como carros o circuitos aplicados. Esa mezcla entre lógica, creatividad y tecnología es lo que me llevó a elegir la Ingeniería Mecatrónica. Además de lo académico, practico voleibol a nivel medio competitivo, voy al gimnasio, juego ajedrez y participo activamente en competencias relacionadas con mis hobbies. Programar es parte de mi rutina, así como seguir aprendiendo idiomas: hablo inglés avanzado y estoy comenzando con alemán en nivel principiante.",
      image: gustavoImg,
      roleColor: "text-blue-600"
    },
    {
      name: "Susana",
      role: "Desarrolladora de Software & Analista de Sistemas",
      description: "Desde pequeña he tenido la costumbre —y la pasión— de desarmar objetos para entender cómo funcionan y luego reconstruirlos, muchas veces mejorados. Esa curiosidad innata por el \"por qué\" y el \"cómo\" de las cosas me llevó a elegir la Ingeniería Mecatrónica, una carrera que combina lo que más me entusiasma: la mecánica, la electrónica, la creatividad y la posibilidad de transformar ideas en soluciones reales. Me gusta aprender haciendo, ensuciándome las manos y enfrentando retos prácticos, porque no hay nada más emocionante que ver cómo algo que imaginé se convierte en realidad y puede, además, facilitarle la vida a alguien más.",
      image: susanaImg,
      roleColor: "text-emerald-600"
    },
    {
      name: "Emiliano Tamayo",
      role: "Diseñador Mecánico & Especialista en Prototipado",
      description: "Desde que tengo memoria, me ha intrigado el funcionamiento de las máquinas y la posibilidad de darles vida mediante la ingeniería. Esa inquietud constante por entender y crear me llevó a escoger la carrera de Ingeniería Mecatrónica, donde convergen mis intereses por la mecánica, la electrónica y la innovación. En mi tiempo libre practico fútbol y voy al gimnasio, lo que me ayuda a mantener la disciplina y el enfoque. Me desempeño especialmente bien en física, un área en la que puedo conectar con claridad los conceptos teóricos y su aplicación práctica, fortaleciendo así mi perfil como futuro ingeniero.",
      image: emilianoImg,
      roleColor: "text-amber-600"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('team.whoWeAre')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('team.whoWeAreDescription')}
          </p>
        </div>

        {teamMembers.map((member, index) => (
          <div 
            key={member.name}
            className={`flex flex-col lg:flex-row items-center mb-16 lg:mb-20 ${
              index === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={`lg:w-1/3 mb-8 lg:mb-0 ${
              index === 1 ? 'lg:pl-12' : 'lg:pr-12'
            }`}>
              <div className="w-72 h-72 rounded-full mx-auto overflow-hidden shadow-2xl">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="lg:w-2/3">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{member.name}</h3>
              <p className={`text-lg font-medium mb-4 ${member.roleColor}`}>{member.role}</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
