import Image from 'next/image';
import ContactTextLink from './ContactTextLink';

export default function Footer() {
    return (
        <footer className="w-full py-8 bg-background-light flex flex-col items-center gap-4">
            <div className="flex flex-row w-full">
                <div className="w-50 flex flex-col justify-center">
                    <div className="flex flex-row items-center gap-4">
                        <Image src="/logo.png" alt="Logo" width={64} height={64} />
                        <h3 className="font-sans text-2xl w-fit">JBS LONDON</h3>
                    </div>
                    <p className="font-sans font-light mt-2 tracking-widest text-xs">Delivering reliable building services with precision, professionalism, and long-term client focus.</p>
                    <div>
                        <ContactTextLink text="admin@jbslondon.co.uk" />
                        <ContactTextLink text="01732 752144" />
                    </div>
                </div>
                <div className="w-50">

                </div>
            </div>
            <p className="text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} JBS London Ltd. All rights reserved.
            </p>
        </footer>
    );
}