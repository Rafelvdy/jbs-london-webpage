import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Mechanical Services & Maintenance",
    description:
      "Planned and reactive mechanical maintenance for commercial buildings, including heating, pumps, plant, ventilation, valves and associated systems.",
    className: "lg:col-span-3",
    varient: "dark",
  },
  {
    title: "Electrical Services & Maintenance",
    description:
      "Full commercial electrical maintenance, testing, fault finding and repairs, together with new installations and alterations.",
    className: "lg:col-span-3",
    varient: "dark",
  },
  {
    title: "Air Conditioning & HVAC",
    description:
      "Planned maintenance, servicing, fault finding, repairs and installation of commercial air-conditioning and HVAC systems.",
    className: "lg:col-span-2",
  },
  {
    title: "Plumbing & Water Services",
    description:
      "Commercial plumbing maintenance, repairs and installations, from reactive leaks through to new pipework and sanitary installations.",
    className: "lg:col-span-2",
  },
  {
    title: "Projects, Installations & Refurbishments",
    description:
      "Mechanical, electrical, plumbing and building works from small alterations through to larger installations, managed from survey to handover.",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Building Fabric Maintenance",
    description:
      "General building and fabric maintenance including painting, carpentry, doors and ironmongery, flooring, ceilings and general building works.",
    className: "lg:col-span-4",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-16">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl leading-20 md:text-5xl lg:text-6xl text-foreground font-sans font-light text-center">
          Everything your building needs. <br />All from one trusted contractor.
        </h2>
        <p className="max-w-2xl mt-5 text-center text-sm sm:text-base text-foreground-muted">
          From planned preventative maintenance and compliance works to reactive call-outs and full installations. One contractor, covering every system in your commercial property.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mt-10 lg:mt-20">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            className={service.className}
          />
        ))}
      </div>
    </section>
  );
}
