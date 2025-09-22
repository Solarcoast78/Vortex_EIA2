import { useState } from "react";
import { Heart, Users, Send, CheckCircle, DollarSign, Handshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";

export default function StaticDonationCollaborationSection() {
  const { t } = useLanguage();
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donationForm.name.trim() || !donationForm.email.trim()) {
      alert(t('collaboration.error') + ": " + "Please complete your name and email.");
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setDonationForm({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      alert(t('collaboration.donationSuccess'));
    }, 1000);
  };

  const handleCollaborationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!collaborationForm.name.trim() || !collaborationForm.email.trim() || !collaborationForm.message.trim()) {
      alert(t('collaboration.error') + ": " + "Please complete all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setCollaborationForm({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      alert(t('collaboration.collaborationSuccess'));
    }, 1000);
  };

  return (
    <section className="py-20 bg-black dark:bg-black text-white dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white dark:text-white mb-4">
            {t('collaboration.title')}
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 max-w-3xl mx-auto">
            {t('collaboration.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Donation Section */}
          <Card className="bg-gray-900 dark:bg-gray-900 border-gray-700 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-pink-900 dark:bg-pink-900 rounded-full flex items-center justify-center">
                  <Heart className="text-pink-400 dark:text-pink-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-white">
                    {t('collaboration.donation.title')}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300 font-normal">
                    Support our growing team
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 dark:text-gray-300">
                {t('collaboration.donation.description')}
              </p>
              
              <form onSubmit={handleDonationSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="donation-name" className="text-white dark:text-white">
                    {t('collaboration.donation.form.name')} *
                  </Label>
                  <Input
                    id="donation-name"
                    value={donationForm.name}
                    onChange={(e) => setDonationForm({...donationForm, name: e.target.value})}
                    className="bg-gray-800 dark:bg-gray-800 border-gray-600 dark:border-gray-600 text-white dark:text-white"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="donation-email" className="text-white dark:text-white">
                    {t('collaboration.donation.form.email')} *
                  </Label>
                  <Input
                    id="donation-email"
                    type="email"
                    value={donationForm.email}
                    onChange={(e) => setDonationForm({...donationForm, email: e.target.value})}
                    className="bg-gray-800 dark:bg-gray-800 border-gray-600 dark:border-gray-600 text-white dark:text-white"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="donation-message" className="text-white dark:text-white">
                    {t('collaboration.donation.form.message')}
                  </Label>
                  <Textarea
                    id="donation-message"
                    value={donationForm.message}
                    onChange={(e) => setDonationForm({...donationForm, message: e.target.value})}
                    className="bg-gray-800 dark:bg-gray-800 border-gray-600 dark:border-gray-600 text-white dark:text-white"
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? t('common.loading') : t('collaboration.donation.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Collaboration Section */}
          <Card className="bg-gray-900 dark:bg-gray-900 border-gray-700 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-900 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Users className="text-blue-400 dark:text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-white">
                    {t('collaboration.collaborate.title')}
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300 font-normal">
                    Join our mission
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 dark:text-gray-300">
                {t('collaboration.collaborate.description')}
              </p>
              
              <form onSubmit={handleCollaborationSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="collab-name" className="text-white dark:text-white">
                    {t('collaboration.collaborate.form.name')} *
                  </Label>
                  <Input
                    id="collab-name"
                    value={collaborationForm.name}
                    onChange={(e) => setCollaborationForm({...collaborationForm, name: e.target.value})}
                    className="bg-gray-800 dark:bg-gray-800 border-gray-600 dark:border-gray-600 text-white dark:text-white"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="collab-email" className="text-white dark:text-white">
                    {t('collaboration.collaborate.form.email')} *
                  </Label>
                  <Input
                    id="collab-email"
                    type="email"
                    value={collaborationForm.email}
                    onChange={(e) => setCollaborationForm({...collaborationForm, email: e.target.value})}
                    className="bg-gray-800 dark:bg-gray-800 border-gray-600 dark:border-gray-600 text-white dark:text-white"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="collab-message" className="text-white dark:text-white">
                    {t('collaboration.collaborate.form.message')} *
                  </Label>
                  <Textarea
                    id="collab-message"
                    value={collaborationForm.message}
                    onChange={(e) => setCollaborationForm({...collaborationForm, message: e.target.value})}
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
                  <Users className="w-4 h-4 mr-2" />
                  {isSubmitting ? t('common.loading') : t('collaboration.collaborate.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center bg-gray-900 dark:bg-gray-900 rounded-xl p-8 border border-gray-700 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-white dark:text-white mb-4">
            {t('collaboration.other.title')}
          </h3>
          <p className="text-gray-300 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            {t('collaboration.other.description')}
          </p>
          <div className="space-y-2">
            <p className="text-blue-400 dark:text-blue-400 font-medium">
              {t('collaboration.other.email')}
            </p>
            <p className="text-gray-300 dark:text-gray-300">
              {t('collaboration.other.university')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}