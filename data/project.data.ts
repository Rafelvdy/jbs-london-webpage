import { toTitle } from "@/lib/format";

const rawImages: string[] = [
  "/projects/project-Adeline-Place.jpeg",
  "/projects/project-Blandford-Street.jpeg",
  "/projects/project-Bourdon.jpeg",
  "/projects/project-Cassia.jpg",
  "/projects/project-Cork-Street.jpeg",
  "/projects/project-Elder-House.jpeg",
  "/projects/project-Elvin.jpeg",
  "/projects/project-Emerald-scaled.jpg",
  "/projects/project-Equinix.jpeg",
  "/projects/project-gleeds-seplat.jpeg",
  "/projects/project-Harley-Cavendish.jpeg",
  "/projects/project-Kao-2.jpeg",
  "/projects/project-Longview.jpeg",
  "/projects/project-Magna.jpeg",
  "/projects/project-Mansel.jpeg",
  "/projects/project-oche.webp",
  "/projects/project-Rosewood.jpeg",
  "/projects/project-St.James_-Street.jpeg",
  "/projects/project-The-Corner-Building.jpeg",
  "/projects/project-toca-social.jpeg",
  "/projects/project-Wimpole.jpeg",
];

export const projects = rawImages.map((src) => ({
  src,
  name: toTitle(src),
}));