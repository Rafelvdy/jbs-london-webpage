import Hero from '@/pages/home/hero'
import AboutUsSection from '@/pages/home/aboutUsSection'
import ServicesSection from '@/pages/home/servicesSection'
import TrustedBy from '@/pages/home/trustedBySection';
import AccreditedBySection from '@/pages/home/accreditedBySection';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background">
      <Hero />
      <AboutUsSection />
      <ServicesSection />
      <TrustedBy />   
      <AccreditedBySection />
    </main>
  );
}
