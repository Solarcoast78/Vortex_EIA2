import ChallengeBlog from "@/components/challenge-blog";
import concebirImg from "@assets/1000074213_1753817539044.jpg";
import disenarImg from "@assets/1000074131_1753817595994.jpg";
import implementarImg from "@assets/1000074128_1753817660719.jpg";
import operarVideo from "@assets/1000074122_1753817738008.mp4";

export default function EarthChallenge() {
  const content = {
    conceive: [
      "Todo comienza con una idea: crear un vehículo que pueda moverse solo y llegar de un punto a otro.",
      "Dibujamos nuestras primeras ideas en papel, pensando en cómo debería verse y funcionar nuestro vehículo.",
      "Definimos qué queremos que haga: que se mueva hacia adelante, que pueda girar y que tenga ruedas para moverse en diferentes superficies.",
      "Pensamos en los componentes básicos que necesitamos: motores para el movimiento y una pila para darle energía."
    ],
    design: [
      "Seleccionamos los componentes que necesitamos: motores para el movimiento y cables para conectar todo.",
      "Elegimos una pila TRONEX que nos proporciona la energía necesaria para que el vehículo funcione.",
      "Diseñamos el circuito eléctrico básico, conectando cada componente de forma segura y funcional.",
      "Planificamos cómo va a funcionar nuestro vehículo: conectar la pila a los motores para que se mueva."
    ],
    implement: [
      "Llega el momento de construir: soldamos los componentes, conectamos los cables y armamos el chasis del vehículo.",
      "Trabajamos en el laboratorio, con mucha concentración y cuidado, para que cada conexión quede perfecta.",
      "Conectamos la pila TRONEX a los motores para que el vehículo tenga la energía necesaria para moverse.",
      "Probamos cada parte por separado antes de unir todo: primero los motores, luego las conexiones eléctricas, y finalmente el vehículo completo."
    ],
    operate: [
      "¡Nuestro vehículo está listo! Lo encendemos conectando la pila y vemos cómo se mueve, impulsado por los motores.",
      "Funciona perfectamente: la pila TRONEX proporciona la energía suficiente para que el vehículo se mueva de manera continua.",
      "Grabamos videos para documentar cómo funciona nuestro proyecto y mostrar los resultados de todo nuestro trabajo.",
      "El vehículo puede funcionar mientras la pila tenga carga y es capaz de moverse por diferentes superficies sin problemas."
    ]
  };

  const processImages = [
    concebirImg,
    disenarImg,
    implementarImg,
    operarVideo
  ];

  return (
    <ChallengeBlog
      title="Reto Tierra"
      description="Desarrollo de vehículos autónomos terrestres con navegación inteligente"
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600"
      colorClass="earth-color"
      bgColor="bg-gradient-to-r from-purple-900/70 to-purple-600/50"
      challengeType="earth"
      content={content}
      processImages={processImages}
    />
  );
}
