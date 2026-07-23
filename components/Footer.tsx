import Image from 'next/image';
import ContactTextLink from './ContactTextLink';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full py-8 bg-background-light flex flex-col items-center gap-4">
            <div className="flex flex-row w-full py-10 px-20">
                <div className="flex flex-1 flex-col justify-start">
                    <div className="flex flex-row items-center gap-8">
                        <Image src="/logo.png" alt="Logo" width={64} height={64} />
                        <h3 className="font-sans text-accent text-3xl w-fit">JBS LONDON</h3>
                    </div>
                    <p className="font-sans font-light mt-3 tracking-widest text-xs max-w-md mb-10">Delivering reliable building services with precision, professionalism, and long-term client focus.</p>
                    <div>
                        <ContactTextLink text="admin@jbslondon.co.uk" />
                        <ContactTextLink text="01732 752144" />
                    </div>
                </div>
                <div className="flex flex-1 flex-row justify-around font-sans font-light">
                    <div className="flex flex-col">
                        <h4 className="text-2xl text-foreground mb-3">Company</h4>
                        <ul className="text-foreground-muted [&>li]:mt-2 [&>li]:cursor-pointer [&>li]:hover:text-foreground text-md">
                            <li>
                                <Link href="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link href="/services">Services</Link>
                            </li>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-2xl text-foreground mb-3">Services</h4>
                            <ul className="text-foreground-muted [&>li]:mt-2 [&>li]:cursor-pointer [&>li]:hover:text-foreground text-md">
                                <li>Mechanical & Electrical Installations</li>
                                <li>Building Repairs & Refurbs</li>
                                <li>Building Fabric Maintenance</li>
                                <li>Fire Door Testing</li>
                                <li>Painting & Exterior</li>
                                <li>Building Services Maintenance</li>
                            </ul>
                    </div>
                </div>
            </div>
            <p className="text-center text-sm text-foreground-light">
                &copy; {new Date().getFullYear()} JBS London Ltd. All rights reserved.
            </p>
        </footer>
    );
}