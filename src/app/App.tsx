import { HeroSection } from '@/app/components/HeroSection';
import { AboutSection } from '@/app/components/AboutSection';
import { ProjectsGrid } from '@/app/components/ProjectsGrid';
import { WorkflowSection } from '@/app/components/WorkflowSection';
import { ToolsSection } from '@/app/components/ToolsSection';
import { ExperimentsSection } from '@/app/components/ExperimentsSection';
import { Footer } from '@/app/components/Footer';
import { Navigation } from '@/app/components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsGrid />
      <WorkflowSection />
      <ToolsSection />
      <ExperimentsSection />
      <Footer />
    </div>
  );
}