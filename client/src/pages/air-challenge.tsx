import ChallengeBlog from "@/components/challenge-blog";
import heliumAirshipImage from "@assets/stock_images/helium_airship_blimp_272c8a52.jpg";

export default function AirChallenge() {
  const content = {
    conceive: [
      `🚁 SOLUCIONES SIMILARES (GLOBOS + MOTORES):

Globo con motores laterales (tipo dirigible clásico)

Fácil de construir, estable, pero menos maniobrable. Ideal para cargas grandes y vuelos largos. Requiere timones para dirección y es vulnerable a vientos laterales.

Globo con hélices orientables (VTOL híbrido)

Permite despegar y aterrizar verticalmente, pero es más complejo. Excelente para maniobras de precisión y control de altitud. Necesita servos robustos para el mecanismo de vectorizado.

Globo con multirotores alrededor (como un dron con flotador)

Preciso y controlado, aunque consume más energía. Perfecto para hovering estático y movimientos finos. Combina estabilidad del globo con agilidad de multirotor.

Globo con alas (aerodinámico híbrido)

Muy eficiente en vuelo largo, pero necesita velocidad mínima para funcionar. Las alas generan sustentación adicional a 15+ km/h, reduciendo dependencia del helio.`,
      `📊 DATOS ÚTILES DE CÁLCULO:

1 m³ de helio levanta ~1,05 kg (sin contar el peso del material del globo).

Ejemplo: Para levantar 5 kg se necesitan unos 4,8 m³ de helio.

Siempre deja un margen de 20–30% para peso extra.

Factores importantes: La temperatura afecta la flotabilidad (más calor = menos sustentación). A 30°C pierdes ~10% de capacidad. El helio se escapa gradualmente, planifica recargas cada 2-3 semanas. Un globo de látex pierde ~1% diario.`,
      `⚡ MOTORES:

Si la carga total es 5 kg y quieres empuje seguro (1,5×):

Necesitas 7,5 kgf de empuje total.

Con 4 motores → ~2 kgf de empuje por motor.

Consideraciones adicionales: Motores brushless son más eficientes y duraderos. Para 2 kgf por motor, usar hélices 10x4.5" con motor 2212-13T. Batería LiPo 3S 2200mAh da ~20 min de vuelo. ESCs de 30A mínimo para margen de seguridad.`,
      `🔒 SEGURIDAD Y PRUEBAS:

Verificar fugas del globo.

Medir cuánta carga levanta realmente.

Probar los motores en banco con dinamómetro.

Hacer vuelos amarrados antes de soltarlo.

Protocolos adicionales: Usar cable de seguridad de 100m máximo. Verificar dirección del viento y velocidad <15 km/h. Tener extintor cerca para baterías LiPo. Comunicación por radio obligatoria. Plan de contingencia si se pierde control. Área de vuelo libre de obstáculos en 50m radio.`
    ],
    design: [
      "Diseñar marco aerodinámico utilizando simulaciones CFD para optimizar eficiencia energética, estabilidad de vuelo y resistencia a perturbaciones externas.",
      "Crear arquitectura del sistema integrando controlador de vuelo Pixhawk, motores sin escobillas, ESCs, hélices de fibra de carbono y sistema de telemetría de largo alcance.",
      "Desarrollar sistema de navegación con GPS RTK, IMU de 9 ejes, barómetro de precisión y sensores de flujo óptico para estabilización en interiores.",
      "Diseñar algoritmos de control de vuelo utilizando PX4 Autopilot con misiones MAVLink personalizadas e integración de estación de control terrestre."
    ],
    implement: [
      "Construir prototipo físico con marco aerodinámico optimizado y sistemas de vuelo integrados.",
      "Programar algoritmos de control de vuelo con ajuste fino de parámetros PID y sistemas de amortiguación de vibraciones IMU.",
      "Implementar sistema de visión con cámara gimbal estabilizada, procesamiento de imágenes en tiempo real y algoritmos de detección de objetos con aprendizaje profundo.",
      "Integrar y probar todos los subsistemas incluyendo navegación, control de vuelo, comunicación y ejecución de misiones."
    ],
    operate: [
      "Desplegar prototipo funcional de dron autónomo con capacidades de vuelo avanzadas, navegación de precisión y ejecución exitosa de misiones programadas complejas.",
      "Operar sistema de reconocimiento visual con capacidad de detectar y rastrear objetos específicos, útil para aplicaciones de búsqueda y rescate.",
      "Utilizar plataforma completa de control de misiones con interfaz gráfica para planificación de vuelos, monitoreo en tiempo real y análisis de datos de telemetría post-vuelo.",
      "Mantener documentación técnica detallada incluyendo manuales de vuelo, procedimientos de seguridad, análisis de rendimiento y videos de demostración de capacidades del sistema."
    ]
  };

  const processImages = [
    heliumAirshipImage,
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1623049306159-0b29b94a3cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  ];

  return (
    <ChallengeBlog
      title="Reto Aire"
      description="Sistemas aéreos no tripulados con inteligencia avanzada"
      heroImage={heliumAirshipImage}
      colorClass="air-color"
      bgColor="bg-gradient-to-r from-cyan-900/70 to-cyan-600/50"
      challengeType="air"
      content={content}
      processImages={processImages}
    />
  );
}