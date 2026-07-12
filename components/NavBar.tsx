import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 w-full h-16 z-50 flex items-center py-10 justify-between px-10">
            <Image src="/logo.png" alt="Logo" width={35} height={35}/>

            <ul className="absolute left-1/2 -translate-x-1/2 flex gap-15 font-inter text-thin text-foreground-muted [&_a:hover]:text-foreground [&_a:hover]:scale-[1.05] [&_a]:inline-block [&_a]:transition-all [&_a]:duration-200">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Our services</Link></li>
            <li><Link href="/">Our projects</Link></li>
            <li><Link href="/">About us</Link></li>
            </ul>

            <Button variant="accent-outline" radius="xl" className="px-6 py-1 text-lg">Contact us</Button>
        </nav>
    )
}