import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import TrendingSection from "@/components/TrendingSection";
import ContinueWatching from "@/components/ContinueWatching";
import CategoriesSection from "@/components/CategoriesSection";
import ActressSection from "@/components/ActressSection";
import NewReleases from "@/components/NewReleases";
import UploadCTA from "@/components/UploadCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StorySection />
        <TrendingSection />
        <ContinueWatching />
        <CategoriesSection />
        <ActressSection />
        <NewReleases />
        <UploadCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
