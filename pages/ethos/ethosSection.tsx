import Image from "next/image";

type Value = {
  title: string;
  body: string[];
  image?: string;
};

const values: Value[] = [
  {
    title: "Proud Employer of British Veterans",
    body: [
      "Ranked among the UK's top veteran employers, we are committed to inclusion and proudly provide opportunities for British veterans, recognising their valuable experience, work ethic and the positive impact they bring to our workplace and wider community.",
      "We offer meaningful career opportunities, tailored development pathways, and a workplace culture that values discipline, leadership and transferable skills. Employees benefit from continuous upskilling, structured career progression and a supportive environment designed to help individuals thrive in civilian roles.",
    ],
    image: "/ethos/british-soldier.jpg",
  },
  {
    title: "Green & Sustainable",
    body: [
      "JBS London is committed to paperless operations as part of our commitment to reducing our environmental impact across every project.",
      "For every new contract we receive, we donate a percentage of the income to The Ocean Cleanup, an organisation using advanced technology to remove plastic and aiming to clean 90% of ocean plastic by 2040. Every contract awarded contributes towards cleaner oceans and a more sustainable future.",
    ],
    // image: "/ethos/sustainable.jpg",
  },
  {
    title: "Supporting the Arts",
    body: [
      "JBS is proud to support the creative industry through sponsorship and development of behind-the-scenes and in-front-of-camera talent, including hair and makeup artists and emerging performers.",
      "By investing in people at the start of their journey, we have helped create opportunities that have led to success within the industry. From working alongside Marvel to supporting a now BAFTA award-winning actress.",
    ],
    // image: "/ethos/arts.jpg",
  },
  {
    title: "Community Investment & Social Value",
    body: [
      "JBS London is committed to making a positive contribution within the communities where we work. Each year we select and sponsor local grassroots sports teams and community organisations.",
      "We understand the important role that sport plays in promoting health, confidence, teamwork and social inclusion — particularly amongst young people. Through sponsorship and support, we aim to help local clubs continue providing positive opportunities for children, young people and families.",
    ],
    // image: "/ethos/community.jpg",
  },
  {
    title: "Governance & Ethical Business",
    body: [
      "Strong governance is fundamental to the way JBS London operates. We are committed to conducting business responsibly, transparently and ethically while maintaining the highest standards of compliance and professionalism.",
      "Our commitments include: compliance with all relevant legislation and industry standards, ISO accredited management systems, robust health and safety procedures, ethical procurement, equality and diversity throughout our workforce, and continuous improvement through auditing and performance monitoring.",
    ],
    // image: "/ethos/governance.jpg",
  },
];

export default function EthosSection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-20 sm:gap-28">
        {values.map((value, i) => (
          <div
            key={value.title}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-last" : ""
            }`}
          >
            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-background-dark">
              {value.image ? (
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 92vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-foreground-light font-montserrat text-xs tracking-widest uppercase">Image</p>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-8 h-px bg-accent" />
              <h2 className="text-2xl sm:text-3xl font-sans font-light text-foreground">
                {value.title}
              </h2>
              {value.body.map((para, j) => (
                <p key={j} className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center flex flex-col items-center gap-4 border-t border-border-subtle pt-16">
          <div className="w-8 h-px bg-accent" />
          <h2 className="text-2xl sm:text-3xl font-sans font-light text-foreground">Our Commitment</h2>
          <p className="max-w-3xl text-sm sm:text-base text-foreground-muted leading-relaxed">
            At JBS London, ESG is not a separate initiative — it forms part of our everyday
            decision-making and company culture. Whether through supporting veterans, investing
            in local communities, contributing to ocean clean-up projects or reducing our
            environmental impact, we are committed to delivering meaningful and measurable
            social value. We believe that successful organisations should leave a positive
            legacy, and we are proud to work alongside clients who share those values.
          </p>
        </div>
      </div>
    </section>
  );
}
