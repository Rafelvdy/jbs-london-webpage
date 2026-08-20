export type Service = {
  id: string;
  title: string;
  description: string;
  points: string[];
  /** True when this service has no real detail copy yet. */
  needsContent?: boolean;
};

export const services: Service[] = [
  {
    id: "mande",
    title: "Mechanical and Electrical Installations",
    description:
      "Refurbishments and installations of all electrical and mechanical systems can be provided. Whether the work is identified during routine maintenance or required as part of a new building contract, our fully qualified engineers can skilfully carry out a variety of mechanical and electrical installations, including works ranging from thermostatic radiator valves to installing an efficient, full-service BMS system.",
    points: [
      "Heating systems",
      "Boiler installations & pipe work",
      "Ventilation systems",
      "Hot and cold water systems",
      "Above-ground drainage & sanitary waste",
      "BMS systems",
      "Environmental controls",
      "Small power installations",
      "High voltage switching",
      "Generator and UPS installations",
      "Air conditioning and refrigeration",
      "Lighting, including emergency systems",
      "Telephone and computer data cabling",
      "Electric meters",
    ],
  },
  {
    id: "repairs",
    title: "Building Repairs and Refurbishments",
    description:
      "Our fully-qualified engineers can be on site or on call and work within CDM regulations.",
    points: [],
    needsContent: true,
  },
  {
    id: "fabric",
    title: "Building Fabric Maintenance",
    description:
      "We understand the importance of a comfortable work environment, and that's why we offer our clients such high standards of building fabric maintenance services at cost-effective prices, working alongside an existing project manager or offering a fully project-managed solution.",
    points: [
      "Carpentry",
      "Electricians",
      "Plumbers",
      "Decorators",
      "Glaziers",
      "Roofers",
      "Drainage engineers",
      "Flooring installers",
      "Plasterers",
      "Painters",
      "Carpeters",
    ],
  },
  {
    id: "fire-door",
    title: "Fire Door Testing",
    description: "Fire door testing is available for commercial buildings.",
    points: [],
    needsContent: true,
  },
  {
    id: "painting",
    title: "Painting & Exterior",
    description: "We can deliver high-quality refurbishments and paintwork.",
    points: [],
    needsContent: true,
  },
  {
    id: "maintenance",
    title: "Building Services Maintenance",
    description:
      "After we have conducted an initial site survey to assess all assets, followed by detailed analysis of customer requirements, we can offer planned preventative, reactive and condition-based maintenance. Our team of experienced engineers are coordinated on a daily basis from our main office, managed by area supervisors, with an out-of-hours helpline and engineers available on a static or mobile basis.",
    points: [
      "Boilers",
      "Generators",
      "Heating & air con systems",
      "Chillers",
      "Electrical circuitry",
      "Lighting",
      "Plumbing",
      "Drainage",
      "Building management systems",
    ],
  },
];