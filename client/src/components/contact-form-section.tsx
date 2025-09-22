import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactFormSection() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setContactForm({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      alert("¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.");
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-black dark:bg-black text-white dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white dark:text-white mb-4">
            Ponte en Contacto
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 max-w-3xl mx-auto">
            ¿Tienes preguntas, ideas o quieres saber más sobre nuestros proyectos? ¡Escríbenos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <Card className="shadow-xl bg-gray-900 dark:bg-gray-900 border-gray-700 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Send className="text-blue-600 dark:text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-white">
                    Envíanos un Mensaje
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300 font-normal">
                    Te responderemos lo antes posible
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name" className="text-white dark:text-white">Nombre *</Label>
                    <Input
                      id="contact-name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Tu nombre completo"
                      className="bg-gray-800 dark:bg-gray-800 border-gray-600 dark:border-gray-600 text-white dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email" className="text-white dark:text-white">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="tu@email.com"
                      className="bg-gray-800 dark:bg-gray-800 border-gray-600 dark:border-gray-600 text-white dark:text-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact-subject" className="text-white dark:text-white">Asunto</Label>
                  <Input
                    id="contact-subject"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                    placeholder="¿De qué quieres hablar?"
                    className="bg-gray-800 dark:bg-gray-800 border-gray-600 dark:border-gray-600 text-white dark:text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="contact-message" className="text-white dark:text-white">Mensaje *</Label>
                  <Textarea
                    id="contact-message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Cuéntanos en qué podemos ayudarte, qué te interesa de nuestros proyectos, o cualquier pregunta que tengas..."
                    rows={5}
                    className="bg-gray-800 dark:bg-gray-800 border-gray-600 dark:border-gray-600 text-white dark:text-white"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Información de contacto */}
          <div className="space-y-8">
            <Card className="shadow-xl bg-gray-900 dark:bg-gray-900 border-gray-700 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                    <Mail className="text-emerald-600 dark:text-emerald-400 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white dark:text-white">
                      Información de Contacto
                    </h3>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-gray-400 w-5 h-5" />
                  <div>
                    <p className="font-semibold text-white dark:text-white">Email</p>
                    <p className="text-gray-300 dark:text-gray-300">mecatronica@universidad.edu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-gray-400 w-5 h-5" />
                  <div>
                    <p className="font-semibold text-white dark:text-white">Ubicación</p>
                    <p className="text-gray-300 dark:text-gray-300">Universidad EIA</p>
                    <p className="text-gray-300 dark:text-gray-300">Departamento de Mecatrónica</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-gray-400 w-5 h-5" />
                  <div>
                    <p className="font-semibold text-white dark:text-white">Horario de Respuesta</p>
                    <p className="text-gray-300 dark:text-gray-300">24-48 horas laborables</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl bg-gradient-to-br from-blue-950 to-indigo-950 dark:from-blue-950 dark:to-indigo-950 border-gray-700 dark:border-gray-700">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-white dark:text-white mb-3">
                  ¿Prefieres otro medio?
                </h4>
                <p className="text-gray-300 dark:text-gray-300 mb-4">
                  También puedes encontrarnos en nuestras redes sociales o visitarnos directamente en la universidad.
                </p>
                <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">Visítanos en el laboratorio de mecatrónica</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}