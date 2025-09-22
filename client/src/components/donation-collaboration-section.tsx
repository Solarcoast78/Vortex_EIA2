import { useState } from "react";
import { Heart, Users, Send, CheckCircle, DollarSign, Handshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function DonationCollaborationSection() {
  const [donationForm, setDonationForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [collaborationForm, setCollaborationForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { toast } = useToast();

  // Donation request mutation
  const donationMutation = useMutation({
    mutationFn: (data: any) => apiRequest({
      url: '/api/collaboration',
      method: 'POST',
      body: { ...data, requestType: 'donation' }
    }),
    onSuccess: () => {
      setDonationForm({ name: "", email: "", message: "" });
      toast({
        title: "¡Solicitud enviada!",
        description: "Gracias por tu interés en apoyar nuestro equipo. Te contactaremos pronto.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "No se pudo enviar la solicitud. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  });

  // Collaboration request mutation
  const collaborationMutation = useMutation({
    mutationFn: (data: any) => apiRequest({
      url: '/api/collaboration',
      method: 'POST',
      body: { ...data, requestType: 'collaboration' }
    }),
    onSuccess: () => {
      setCollaborationForm({ name: "", email: "", message: "" });
      toast({
        title: "¡Solicitud enviada!",
        description: "Hemos recibido tu propuesta de colaboración. Te responderemos pronto.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "No se pudo enviar la solicitud. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  });

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donationForm.name.trim() || !donationForm.email.trim()) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa tu nombre y email.",
        variant: "destructive",
      });
      return;
    }
    donationMutation.mutate(donationForm);
  };

  const handleCollaborationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!collaborationForm.name.trim() || !collaborationForm.email.trim() || !collaborationForm.message.trim()) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }
    collaborationMutation.mutate(collaborationForm);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 theme-transition">Únete a Nuestro Crecimiento</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto theme-transition">
            Como equipo emergente de mecatrónica, valoramos el apoyo de la comunidad y las oportunidades de colaboración 
            que nos ayuden a desarrollar proyectos innovadores y expandir nuestro impacto tecnológico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Donation Section */}
          <Card className="shadow-xl card-hover theme-transition animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center scale-hover pulse-color">
                  <Heart className="text-pink-600 dark:text-pink-400 w-6 h-6 heartbeat" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white theme-transition">Apoya Nuestro Crecimiento</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-normal theme-transition">Donaciones para equipo creciente</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-pink-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">¿En qué usamos las donaciones?</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0" />
                    <span>Componentes electrónicos y sensores especializados</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0" />
                    <span>Materiales para prototipado y manufactura</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0" />
                    <span>Software y licencias de desarrollo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-pink-600 flex-shrink-0" />
                    <span>Participación en competencias y conferencias</span>
                  </li>
                </ul>
              </div>

              <form onSubmit={handleDonationSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="donation-name">Nombre *</Label>
                  <Input
                    id="donation-name"
                    value={donationForm.name}
                    onChange={(e) => setDonationForm(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Tu nombre o empresa"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="donation-email">Email *</Label>
                  <Input
                    id="donation-email"
                    type="email"
                    value={donationForm.email}
                    onChange={(e) => setDonationForm(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="donation-message">Mensaje (opcional)</Label>
                  <Textarea
                    id="donation-message"
                    value={donationForm.message}
                    onChange={(e) => setDonationForm(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Cuéntanos sobre tu interés en apoyar nuestro equipo..."
                    rows={3}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-pink-600 hover:bg-pink-700"
                  disabled={donationMutation.isPending}
                >
                  {donationMutation.isPending ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <DollarSign className="w-4 h-4 mr-2" />
                      Solicitar Información de Donación
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Collaboration Section */}
          <Card className="shadow-xl card-hover theme-transition animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center scale-hover pulse-color">
                  <Users className="text-blue-600 dark:text-blue-400 w-6 h-6 heartbeat" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white theme-transition">Colabora Con Nosotros</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-normal theme-transition">Solicitudes de colaboración</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Oportunidades de colaboración:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Proyectos conjuntos de investigación y desarrollo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Mentoría técnica y profesional</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Acceso a laboratorios y recursos especializados</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Oportunidades de prácticas e intercambios</span>
                  </li>
                </ul>
              </div>

              <form onSubmit={handleCollaborationSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="collab-name">Nombre *</Label>
                  <Input
                    id="collab-name"
                    value={collaborationForm.name}
                    onChange={(e) => setCollaborationForm(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Tu nombre o organización"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="collab-email">Email *</Label>
                  <Input
                    id="collab-email"
                    type="email"
                    value={collaborationForm.email}
                    onChange={(e) => setCollaborationForm(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="collab-message">Propuesta de Colaboración *</Label>
                  <Textarea
                    id="collab-message"
                    value={collaborationForm.message}
                    onChange={(e) => setCollaborationForm(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Describe tu propuesta de colaboración, área de expertise, recursos disponibles, o cómo te gustaría trabajar con nuestro equipo..."
                    rows={4}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={collaborationMutation.isPending}
                >
                  {collaborationMutation.isPending ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Handshake className="w-4 h-4 mr-2" />
                      Enviar Propuesta de Colaboración
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <Card className="bg-white/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">¿Tienes otras ideas?</h4>
              <p className="text-gray-600 mb-4">
                Estamos abiertos a cualquier forma de apoyo o colaboración. No dudes en contactarnos directamente.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
                <span>📧 mecatronica@universidad.edu</span>
                <span>🏫 Universidad EIA - Departamento de Mecatrónica</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}