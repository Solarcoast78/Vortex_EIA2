import ChallengeBlog from "@/components/challenge-blog";

export default function WaterChallenge() {
  const content = {
    conceive: [
      "Identificar la necesidad de vehículos submarinos autónomos (AUV) para exploración marina profunda utilizando sistemas de navegación inercial y sonar para mapeo del fondo oceánico.",
      "Definir requisitos para sensores especializados que monitoreen la calidad del agua incluyendo mediciones de pH, temperatura, salinidad y detección de contaminantes químicos.",
      "Conceptualizar sistema de propulsión hidrodinámica eficiente con múltiples propulsores que permitan movimientos submarinos precisos en seis dimensiones.",
      "Establecer especificaciones para sistema de comunicación submarina utilizando tecnología acústica para transmisión de datos en tiempo real y localización."
    ],
    design: [
      "Diseñar casco hidrodinámico utilizando software de simulación CFD para optimizar la resistencia al agua y estabilidad direccional bajo varias corrientes marinas.",
      "Crear arquitectura del sistema integrando microcontrolador marino impermeable, sensores de presión, giroscopio, brújula digital, sonar ultrasónico y sensores de calidad del agua.",
      "Desarrollar sistema de propulsión con motores sumergibles, hélices de paso variable y sistema automatizado de control de flotabilidad con tanques de lastre.",
      "Diseñar algoritmos de navegación submarina utilizando filtros de Kalman para fusión de sensores y estimación de posición en ambientes sin GPS."
    ],
    implement: [
      "Construir carcasa impermeable con materiales marinos certificados, sistema de sellado redundante y ventanas de visualización para cámaras submarinas.",
      "Programar algoritmos de navegación submarina con capacidades de fusión de sensores para seguimiento preciso de posición.",
      "Implementar sistema de comunicación acústica con frecuencias de transmisión optimizadas y red de repetidores acústicos.",
      "Integrar y probar todos los subsistemas incluyendo navegación, propulsión, comunicación y monitoreo ambiental."
    ],
    operate: [
      "Desplegar prototipo funcional de submarino autónomo con capacidades exitosas de inmersión, navegación estable a profundidades controladas y recolección efectiva de datos ambientales.",
      "Operar sistema completo de monitoreo ambiental que registra y transmite datos de calidad del agua en tiempo real con precisión científica verificada en laboratorio.",
      "Utilizar plataforma de control remoto que permite programación de misiones submarinas, seguimiento GPS en superficie y recuperación automática de emergencia.",
      "Mantener documentación integral del proyecto incluyendo análisis hidrodinámico, protocolos de pruebas, resultados de misiones de campo y guías de mantenimiento preventivo."
    ]
  };

  const processImages = [
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1564415708827-2d2d2e2c5448?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1571406252890-8fd8b5d1ba99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  ];

  return (
    <ChallengeBlog
      title="Reto Agua"
      description="Sistemas subacuáticos inteligentes para exploración marina"
      heroImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600"
      colorClass="water-color"
      bgColor="bg-gradient-to-r from-blue-900/70 to-blue-600/50"
      challengeType="water"
      content={content}
      processImages={processImages}
    />
  );
}
