import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function NavBar() {
    return (
<nav className="fixed top-4 left-0 w-full z-50 flex justify-center px-4">
  <div className="relative flex items-center justify-between w-full max-w-6xl h-14 px-6 gap-10
                  bg-white/10 backdrop-blur-2xl backdrop-saturate-150
                  border border-white/40
                  shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.6)]
                  rounded-full">
    <Image src="/logo.png" alt="Logo" width={32} height={32} />

    <ul className="absolute left-1/2 -translate-x-1/2 flex gap-10 font-inter text-thin text-foreground-muted [&_a:hover]:text-foreground [&_a]:transition-all [&_a]:duration-200">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/">Our services</Link></li>
      <li><Link href="/">Our projects</Link></li>
      <li><Link href="/">About us</Link></li>
    </ul>

    <Button variant="accent-outline" radius="xl" className="px-6 py-1 text-base whitespace-nowrap">
      Contact us
    </Button>
  </div>
</nav>  
    )
}