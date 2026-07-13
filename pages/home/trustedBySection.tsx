
import LogoStrip from '@/components/LogoStrip';

const rowOne = [
  { src: '/carousel/APAM.png',               alt: 'APAM' },
  { src: '/carousel/Ashdown_Phillips.png',    alt: 'Ashdown Phillips' },
  { src: '/carousel/CBRE.png',               alt: 'CBRE' },
  { src: '/carousel/encore.jpeg',            alt: 'Encore' },
  { src: '/carousel/Envirotech.png',         alt: 'Envirotech' },
  { src: '/carousel/Equinix.png',            alt: 'Equinix' },
  { src: '/carousel/First-Port.png',         alt: 'First Port' },
  { src: '/carousel/Gleeds.png',             alt: 'Gleeds' },
  { src: '/carousel/GP-bullhound.png',       alt: 'GP Bullhound' },
  { src: '/carousel/Kings_Street.png',       alt: 'Kings Street' },
  { src: '/carousel/Lee_Baron.png',          alt: 'Lee Baron' },
  { src: '/carousel/Longview_Partners.png',  alt: 'Longview Partners' },
];

const rowTwo = [
  { src: '/carousel/MLM.png',                  alt: 'MLM' },
  { src: '/carousel/Morgan_Hunt.png',          alt: 'Morgan Hunt' },
  { src: '/carousel/Oche.png',                 alt: 'Oche' },
  { src: '/carousel/Qinetiq.png',              alt: 'Qinetiq' },
  { src: '/carousel/Rendall-and-Rittner.png',  alt: 'Rendall and Rittner' },
  { src: '/carousel/Rocco-Forte.png',          alt: 'Rocco Forte' },
  { src: '/carousel/Schonfeld.png',            alt: 'Schonfeld' },
  { src: '/carousel/Seplat.png',               alt: 'Seplat' },
  { src: '/carousel/Supercell.png',            alt: 'Supercell' },
  { src: '/carousel/The_7_Stars.png',          alt: 'The 7 Stars' },
  { src: '/carousel/Tideway.webp',             alt: 'Tideway' },
  { src: '/carousel/Toca_Social.png',          alt: 'Toca Social' },
];

export default function TrustedBy() {
  return (
    <section className="w-full py-16 flex flex-col gap-6">
      <h2 className="text-6xl font-sans font-light text-center mb-4">
        Trusted by
      </h2>
      <LogoStrip logos={rowOne} direction="left" />
      <LogoStrip logos={rowTwo} direction="right" />
    </section>
  );
}
