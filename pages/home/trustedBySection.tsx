
import LogoStrip from '@/components/LogoStrip';

const rowOne = [
  { src: '/carousel/trusted-by/APAM.png',               alt: 'APAM' },
  { src: '/carousel/trusted-by/Ashdown_Phillips.png',    alt: 'Ashdown Phillips' },
  { src: '/carousel/trusted-by/CBRE.png',               alt: 'CBRE' },
  { src: '/carousel/trusted-by/encore.jpeg',            alt: 'Encore' },
  { src: '/carousel/trusted-by/Envirotech.png',         alt: 'Envirotech' },
  { src: '/carousel/trusted-by/Equinix.png',            alt: 'Equinix' },
  { src: '/carousel/trusted-by/First-Port.png',         alt: 'First Port' },
  { src: '/carousel/trusted-by/Gleeds.png',             alt: 'Gleeds' },
  { src: '/carousel/trusted-by/GP-bullhound.png',       alt: 'GP Bullhound' },
  { src: '/carousel/trusted-by/Kings_Street.png',       alt: 'Kings Street' },
  { src: '/carousel/trusted-by/Lee_Baron.png',          alt: 'Lee Baron' },
  { src: '/carousel/trusted-by/Longview_Partners.png',  alt: 'Longview Partners' },
];

const rowTwo = [
  { src: '/carousel/trusted-by/MLM.png',                  alt: 'MLM' },
  { src: '/carousel/trusted-by/Morgan_Hunt.png',          alt: 'Morgan Hunt' },
  { src: '/carousel/trusted-by/Oche.png',                 alt: 'Oche' },
  { src: '/carousel/trusted-by/Qinetiq.png',              alt: 'Qinetiq' },
  { src: '/carousel/trusted-by/Rendall-and-Rittner.png',  alt: 'Rendall and Rittner' },
  { src: '/carousel/trusted-by/Rocco-Forte.png',          alt: 'Rocco Forte' },
  { src: '/carousel/trusted-by/Schonfeld.png',            alt: 'Schonfeld' },
  { src: '/carousel/trusted-by/Seplat.png',               alt: 'Seplat' },
  { src: '/carousel/trusted-by/Supercell.png',            alt: 'Supercell' },
  { src: '/carousel/trusted-by/The_7_Stars.png',          alt: 'The 7 Stars' },
  { src: '/carousel/trusted-by/Tideway.webp',             alt: 'Tideway' },
  { src: '/carousel/trusted-by/Toca_Social.png',          alt: 'Toca Social' },
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
