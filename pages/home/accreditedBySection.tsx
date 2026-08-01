import LogoStrip from '@/components/LogoStrip';

const logos = [
  { src: '/carousel/accredited-by/Acc-1.png', alt: 'Gas Safe' },
  { src: '/carousel/accredited-by/Acc-2.jpg', alt: 'Construction Line Certificate' },
  { src: '/carousel/accredited-by/Acc-3.jpg', alt: 'Safe Contractor Approved' },
  { src: '/carousel/accredited-by/Acc4.jpg', alt: 'ISO Registered' },
  { src: '/carousel/accredited-by/acc5.gif', alt: 'Has' },
  { src: '/carousel/accredited-by/acc6.jpg', alt: 'Refcom F-Gas certified' },
  { src: '/carousel/accredited-by/ISO-14001.png', alt: 'ISO 14001 : 2015 Certified' },
  { src: '/carousel/accredited-by/living-wage.jpg', alt: 'Living Wage Employer' },
];

export default function AccreditedBySection() {
    return (
    <section className="w-full py-16 flex flex-col gap-6 overflow-x-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-light text-center mb-4 px-4">
        Accredited by
      </h2>
      <LogoStrip logos={logos} direction="right" />
    </section>
    )
}