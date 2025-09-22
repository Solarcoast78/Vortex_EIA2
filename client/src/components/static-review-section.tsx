import { useState } from "react";
import { Star, Send, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";

interface StaticReviewSectionProps {
  challengeType: string;
  challengeTitle: string;
}

interface StaticReview {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

// Static sample reviews for demonstration
const sampleReviews: Record<string, StaticReview[]> = {
  earth: [
    {
      id: "1",
      userName: "Alex Rodriguez",
      rating: 5,
      comment: "Incredible work on autonomous navigation! The sensor integration is impressive.",
      createdAt: "2024-01-15"
    },
    {
      id: "2", 
      userName: "Maria Garcia",
      rating: 4,
      comment: "Great project demonstration. Would love to see more real-world testing scenarios.",
      createdAt: "2024-01-12"
    }
  ],
  water: [
    {
      id: "3",
      userName: "John Smith",
      rating: 5,
      comment: "The underwater exploration capabilities are fascinating. Excellent engineering!",
      createdAt: "2024-01-10"
    }
  ],
  air: [
    {
      id: "4",
      userName: "Sarah Wilson",
      rating: 4,
      comment: "Impressive flight stability and pattern recognition. Keep up the great work!",
      createdAt: "2024-01-08"
    }
  ]
};

export default function StaticReviewSection({ challengeType, challengeTitle }: StaticReviewSectionProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    rating: 5,
    comment: ""
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const reviews = sampleReviews[challengeType] || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.userName.trim() || !formData.comment.trim()) {
      alert(t('reviews.requiredMessage'));
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormData({ userName: "", email: "", rating: 5, comment: "" });
      setIsSubmitting(false);
      alert(t('reviews.successMessage'));
    }, 1000);
  };

  const renderStars = (rating: number, interactive = false) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= (interactive ? (hoveredRating || formData.rating) : rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            } ${interactive ? "cursor-pointer transition-colors" : ""}`}
            onClick={interactive ? () => setFormData({...formData, rating: star}) : undefined}
            onMouseEnter={interactive ? () => setHoveredRating(star) : undefined}
            onMouseLeave={interactive ? () => setHoveredRating(0) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-black dark:bg-black text-white dark:text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white dark:text-white">
            {t('reviews.title')}
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300">
            {t('reviews.description', { challengeTitle })}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Review Form */}
          <Card className="bg-gray-900 dark:bg-gray-900 border-gray-700 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-white dark:text-white flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('reviews.leaveReview')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="userName" className="text-white dark:text-white">
                    {t('reviews.yourName')} *
                  </Label>
                  <Input
                    id="userName"
                    value={formData.userName}
                    onChange={(e) => setFormData({...formData, userName: e.target.value})}
                    className="bg-gray-800 dark:bg-gray-800 border-gray-600 dark:border-gray-600 text-white dark:text-white"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white dark:text-white">
                    {t('reviews.yourEmail')}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-gray-800 dark:bg-gray-800 border-gray-600 dark:border-gray-600 text-white dark:text-white"
                  />
                </div>

                <div>
                  <Label className="text-white dark:text-white">
                    {t('reviews.rating')} *
                  </Label>
                  <div className="mt-2">
                    {renderStars(formData.rating, true)}
                  </div>
                </div>

                <div>
                  <Label htmlFor="comment" className="text-white dark:text-white">
                    {t('reviews.comment')} *
                  </Label>
                  <Textarea
                    id="comment"
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="bg-gray-800 dark:bg-gray-800 border-gray-600 dark:border-gray-600 text-white dark:text-white"
                    rows={4}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? t('common.loading') : t('reviews.submitReview')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Reviews Display */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white dark:text-white mb-4">
              {reviews.length} {t('reviews.reviewsCount')}
            </h3>
            
            {reviews.length === 0 ? (
              <Card className="bg-gray-900 dark:bg-gray-900 border-gray-700 dark:border-gray-700">
                <CardContent className="p-6 text-center">
                  <p className="text-gray-400 dark:text-gray-400">
                    No reviews yet. Be the first to share your thoughts!
                  </p>
                </CardContent>
              </Card>
            ) : (
              reviews.map((review) => (
                <Card key={review.id} className="bg-gray-900 dark:bg-gray-900 border-gray-700 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-white dark:text-white">
                          {review.userName}
                        </h4>
                        <div className="flex items-center mt-1">
                          {renderStars(review.rating)}
                          <span className="ml-2 text-sm text-gray-400 dark:text-gray-400">
                            {new Date(review.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 dark:text-gray-300">
                      {review.comment}
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}