import Hero from '@/pages/home/hero'
import AboutUsSection from '@/pages/home/aboutUsSection'
import ServicesSection from '@/pages/home/servicesSection'
import TrustedBy from '@/pages/home/trustedBySection';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background">
      <Hero />
      <AboutUsSection />
      <ServicesSection />
      <TrustedBy />   
    </main>
  );
}
