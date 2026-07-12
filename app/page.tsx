import NavBar from '@/components/NavBar';
import Hero from '@/pages/home/hero'
import AboutUsSection from '@/pages/home/aboutUsSection'
import ServicesSection from '@/pages/home/servicesSection'

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background">
      <NavBar />
      <Hero />
      <AboutUsSection />
      <ServicesSection />
    </main>
  );
}
