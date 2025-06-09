
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyParticipate from "@/components/WhyParticipate";
import TracksSection from "@/components/TracksSection";
import PrizesSection from "@/components/PrizesSection";
import TimelineSection from "@/components/TimelineSection";
import RegistrationSection from "@/components/RegistrationSection";
import HighlightsSection from "@/components/HighlightsSection";
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WhyParticipate />
      <TracksSection />
      <PrizesSection />
      <TimelineSection />
      <RegistrationSection />
      <HighlightsSection />
      <SponsorsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Index;
