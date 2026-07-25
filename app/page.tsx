import Hero from '@/pages/home/hero'
import ProjectsSection from '@/pages/home/projectsSection'
import AboutUsSection from '@/pages/home/aboutUsSection'
import ServicesSection from '@/pages/home/servicesSection'
import TrustedBy from '@/pages/home/trustedBySection';
import AccreditedBySection from '@/pages/home/accreditedBySection';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background">
      <Hero />
      <ProjectsSection />
      <AboutUsSection />
      <ServicesSection />
      <TrustedBy />   
      <AccreditedBySection />
    </main>
  );
}
