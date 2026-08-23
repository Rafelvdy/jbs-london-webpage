export type Service = {
  id: string;
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "mechanical",
    title: "Mechanical Services & Maintenance",
    description:
      "Planned and reactive mechanical maintenance for commercial buildings, including heating, pumps, plant, ventilation, valves and associated mechanical systems. We provide PPM programmes, fault finding, repairs and replacement works to keep building services operating efficiently.",
    points: [
      "Heating systems",
      "Pumps & plant",
      "Ventilation",
      "Valves & associated systems",
      "PPM programmes",
      "Fault finding",
      "Repairs & replacement works",
    ],
  },
  {
    id: "electrical",
    title: "Electrical Services & Maintenance",
    description:
      "Full commercial electrical maintenance, testing, fault finding and repairs, together with new installations and alterations. This includes lighting, emergency lighting, power, distribution, electrical testing and general electrical works.",
    points: [
      "Lighting & emergency lighting",
      "Power & distribution",
      "Electrical testing",
      "Fault finding & repairs",
      "New installations & alterations",
      "General electrical works",
    ],
  },
  {
    id: "hvac",
    title: "Air Conditioning & HVAC",
    description:
      "Planned maintenance, servicing, fault finding, repairs and installation of commercial air-conditioning and HVAC systems, including split systems, VRF/VRV, FCUs, condensers and ventilation equipment.",
    points: [
      "Split systems",
      "VRF / VRV systems",
      "FCUs",
      "Condensers",
      "Ventilation equipment",
      "Planned maintenance & servicing",
      "Fault finding & repairs",
      "New installations",
    ],
  },
  {
    id: "plumbing",
    title: "Plumbing & Water Services",
    description:
      "Commercial plumbing maintenance, repairs and installations, from reactive leaks and faults through to new pipework, sanitary installations and associated water systems. We can also support planned water hygiene and compliance requirements.",
    points: [
      "Reactive leaks & faults",
      "New pipework",
      "Sanitary installations",
      "Water systems",
      "Water hygiene support",
      "Compliance requirements",
    ],
  },
  {
    id: "fabric",
    title: "Building Fabric Maintenance",
    description:
      "General building and fabric maintenance to keep commercial properties safe, presentable and operational. This includes painting and decorating, carpentry, doors and ironmongery, minor repairs, making good, flooring, ceilings and other general building works.",
    points: [
      "Painting & decorating",
      "Carpentry",
      "Doors & ironmongery",
      "Minor repairs & making good",
      "Flooring",
      "Ceilings",
      "General building works",
    ],
  },
  {
    id: "projects",
    title: "Projects, Installations & Refurbishments",
    description:
      "Mechanical, electrical, plumbing and building works ranging from small alterations through to larger installations and refurbishments. We can manage works from initial survey and quotation through to installation, commissioning and handover.",
    points: [
      "Small alterations",
      "Larger installations",
      "Refurbishments",
      "Initial survey & quotation",
      "Installation & commissioning",
      "Project handover",
    ],
  },
];