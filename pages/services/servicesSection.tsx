'use client';

import { useState } from "react";
import ServiceSelector from "@/components/ServiceSelector";
import ServiceDetailCard from "@/components/ServiceDisplay";
import { services } from "@/data/services-data";

export default function ServicesSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-stretch gap-4 sm:gap-6 md:gap-8">
        <ServiceSelector
          services={services}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
        />

        <ServiceDetailCard service={services[selectedIndex]} />
      </div>
    </section>
  );
}