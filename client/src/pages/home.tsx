import Navigation from "@/components/navigation";
import HeroBanner from "@/components/hero-banner";
import TabbedContent from "@/components/tabbed-content";
import StaticDonationCollaborationSection from "@/components/static-donation-collaboration-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black dark:bg-black text-white dark:text-white">
      <Navigation />
      <HeroBanner />
      <TabbedContent />
      <StaticDonationCollaborationSection />
      <Footer />
    </div>
  );
}
