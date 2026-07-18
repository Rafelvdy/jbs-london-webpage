import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Fire Door Testing",
    description: "Fire Door Testing is available for commercial buildings",
    className: "lg:col-span-2",
  },
  {
    title: "Painting and Exterior",
    description:
      "We can deliver high-quality refurbishments and paintwork",
    className: "lg:col-span-2",
  },
  {
    title: "Building Repairs and Refurbishments",
    description:
      "Our fully-qualified team of engineers can be on site or on call and work within CDM regulations",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Mechanical and Electrical Installations",
    description:
      "Refurbishments and installations of all electrical and mechanical systems can be provided",
    className: "lg:col-span-4",
    varient: "dark",
  },
  {
    title: "Building Fabric Maintenance",
    description:
      "Our highly skilled team will ensure your building occupants are in a fresh, comfortable environment",
    className: "lg:col-span-3",
  },
  {
    title: "Building Services Maintenance",
    description:
      "We offer planned preventative maintenance and reactionary work",
    className: "lg:col-span-3",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full px-10 py-16">
      <h2 className="text-6xl text-foreground font-sans font-light text-center mb-10">
        What services do we offer?
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mt-20">
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
