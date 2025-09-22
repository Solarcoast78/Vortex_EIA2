import { useState } from "react";
import { Star, Send, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { ReviewSkeleton } from "@/components/ui/loading-skeleton";

interface ReviewSectionProps {
  challengeType: string;
  challengeTitle: string;
}

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export default function ReviewSection({ challengeType, challengeTitle }: ReviewSectionProps) {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    rating: 5,
    comment: ""
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch reviews for this challenge
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ['reviews', challengeType],
    queryFn: () => fetch(`/api/reviews/${challengeType}`).then(res => res.json())
  });

  // Submit review mutation
  const submitReviewMutation = useMutation({
    mutationFn: (reviewData: any) => apiRequest({
      url: '/api/reviews',
      method: 'POST',
      body: reviewData
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews', challengeType] });
      setFormData({ userName: "", email: "", rating: 5, comment: "" });
      toast({
        title: "¡Review enviado!",
        description: "Gracias por tu opinión sobre nuestro proyecto.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "No se pudo enviar el review. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.userName.trim() || !formData.comment.trim()) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa tu nombre y comentario.",
        variant: "destructive",
      });
      return;
    }

    submitReviewMutation.mutate({
      challengeType,
      ...formData
    });
  };

  const renderStars = (rating: number, interactive = false) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 cursor-pointer transition-all duration-200 scale-hover ${
          i < (interactive ? (hoveredRating || formData.rating) : rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300 dark:text-gray-600'
        } ${interactive ? 'hover:scale-110' : ''}`}
        onClick={interactive ? () => setFormData(prev => ({ ...prev, rating: i + 1 })) : undefined}
        onMouseEnter={interactive ? () => setHoveredRating(i + 1) : undefined}
        onMouseLeave={interactive ? () => setHoveredRating(0) : undefined}
      />
    ));
  };

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum: number, review: Review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return (
    <div className="max-w-4xl mx-auto mt-16 space-y-8">
      {/* Header */}
      <div className="text-center animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 theme-transition">Reviews y Opiniones</h2>
        <p className="text-gray-600 dark:text-gray-300 theme-transition">
          ¿Qué te pareció nuestro {challengeTitle}? Comparte tu opinión y calificación
        </p>
        {reviews.length > 0 && (
          <div className="flex items-center justify-center mt-4 space-x-2 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex">{renderStars(Math.round(Number(averageRating)))}</div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white theme-transition">{averageRating}</span>
            <span className="text-gray-500 dark:text-gray-400 theme-transition">({reviews.length} reviews)</span>
          </div>
        )}
      </div>

      {/* Review Form */}
      <Card className="card-hover theme-transition animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageCircle className="w-5 h-5 scale-hover" />
            <span>Deja tu Review</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="userName">Nombre *</Label>
                <Input
                  id="userName"
                  value={formData.userName}
                  onChange={(e) => setFormData(prev => ({ ...prev, userName: e.target.value }))}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email (opcional)</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <Label>Calificación *</Label>
              <div className="flex items-center space-x-1 mt-2">
                {renderStars(formData.rating, true)}
                <span className="ml-2 text-sm text-gray-600">
                  ({formData.rating} de 5 estrellas)
                </span>
              </div>
            </div>

            <div>
              <Label htmlFor="comment">Comentario *</Label>
              <Textarea
                id="comment"
                value={formData.comment}
                onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
                placeholder="Comparte tu opinión sobre este proyecto..."
                rows={4}
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={submitReviewMutation.isPending}
            >
              {submitReviewMutation.isPending ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Review
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Reviews List */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900">
          Reviews de la Comunidad ({reviews.length})
        </h3>
        
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <ReviewSkeleton key={i} />
            ))}
          </div>
        ) : reviews.length === 0 ? (
          <Card>
            <CardContent className="text-center py-8">
              <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                Sé el primero en dejar un review sobre este proyecto
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {reviews.map((review: Review) => (
              <Card key={review.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.userName}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex">{renderStars(review.rating)}</div>
                        <span className="text-sm text-gray-500">
                          {new Date(review.createdAt).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}