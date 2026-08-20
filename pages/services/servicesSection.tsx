"use client";

import { useState } from "react";
import ServiceSelector from "@/components/ServiceSelector";
import ServiceDetailCard from "@/components/ServiceDisplay";
import { services } from "@/data/services-data";

export default function ServicesSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="max-w-screen min-h-screen grid md:grid-cols-2 gap-8 items-start p-8">
      <ServiceSelector
        services={services}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      />

      <ServiceDetailCard service={services[selectedIndex]} />
    </section>
  );
}