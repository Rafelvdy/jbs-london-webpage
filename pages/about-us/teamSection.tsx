import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

const team: TeamMember[] = [
  { name: "Wayne Bruce", role: "Managing Director", image: "/employees/Wayne.jpeg" },
  { name: "Matthew Holland", role: "Contracts Director", image: "/employees/Matt.jpeg" },
  { name: "Geoff Midgeley", role: "Projects Director", image: "/employees/Geoff.jpeg" },
  { name: "Dax Parker", role: "Contracts Supervisor", image: "/employees/Dax.jpeg" },
  { name: "Louisa O'Donnell", role: "Head of Scheduling - Alpha Team", image: "/employees/Louisa.jpeg" },
  { name: "Staci Jenner", role: "Head of Scheduling - Bravo Team", image: "/employees/Staci.jpeg" },
  { name: "Steph Glumart", role: "Head of Accounts", image: "/employees/Steph.png" },
  { name: "Stephanie Owens", role: "Contracts Director's PA", image: "/employees/Stephanie.jpeg" },
  { name: "Jodie Kemp", role: "Head of HR", image: "/employees/Jodie.jpeg" },
];

export default function TeamSection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-16 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-sans font-light text-foreground text-center mb-10 sm:mb-14">
        Meet the team
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col items-center gap-3 text-center">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-background-dark shrink-0">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 8rem, 6rem"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-foreground-muted font-montserrat text-2xl font-light">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
            </div>
            <div>
              <p className="text-foreground font-sans font-medium text-sm sm:text-base leading-tight">
                {member.name}
              </p>
              <p className="text-foreground-muted font-sans text-xs sm:text-sm mt-0.5 leading-snug">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
