import Link from "next/link";
import ProjectZipper from "@/components/ProjectZipper";
import { projects } from "@/data/project.data";
import Button from "@/components/Button";

export default function Projects() {
    return (
        <main>
            <section className="w-full px-4 sm:px-6 md:px-10 pt-20 pb-10 flex flex-col items-center justify-center gap-4 text-center h-[70vh]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-light text-foreground">
                    Our Projects
                </h1>
                <p className="max-w-2xl text-sm sm:text-base text-foreground-muted">
                    A selection of the commercial properties we&apos;ve worked on across London and the South East. From planned maintenance programmes and compliance works through to full mechanical, electrical and building fabric refurbishments.
                </p>
                <Link href="/contact-us">
                    <Button variant="foreground-fill" radius="full" className="mt-4 px-8 py-3">
                        Discuss your project
                    </Button>
                </Link>
            </section>
            <ProjectZipper projects={projects} />
        </main>
    )
}