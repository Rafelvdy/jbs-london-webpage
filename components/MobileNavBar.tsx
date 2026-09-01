
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from './Button';

const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Our services' },
    { href: '/projects', label: 'Our projects' },
    { href: '/about-us', label: 'About us' },
    { href: '/ethos', label: 'Ethos & values' },
];

export default function MobileNavBar() {
    const [open, setOpen] = useState(false);

    // Close on escape and lock body scroll while the menu is open.
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('keydown', onKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
            <div className="relative flex items-center justify-end w-full h-14 px-2">
                <button
                    type="button"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    className="relative size-8 shrink-0 cursor-pointer"
                >
                    <span
                        className={`absolute left-1 right-1 h-0.5 rounded-full bg-foreground transition-all duration-300 ease-in-out ${
                            open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-2'
                        }`}
                    />
                    <span
                        className={`absolute left-1 right-1 top-1/2 -translate-y-1/2 h-0.5 rounded-full bg-foreground transition-all duration-300 ease-in-out ${
                            open ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                        }`}
                    />
                    <span
                        className={`absolute left-1 right-1 h-0.5 rounded-full bg-foreground transition-all duration-300 ease-in-out ${
                            open ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-2'
                        }`}
                    />
                </button>
            </div>

            <div
                className={`absolute left-4 right-4 top-full mt-3 origin-top rounded-3xl
                            bg-white/10 backdrop-blur-2xl backdrop-saturate-150
                            border border-white/40
                            shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.6)]
                            transition-all duration-300 ease-in-out
                            ${open ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                aria-hidden={!open}
            >
                <ul className="flex flex-col items-center gap-6 py-10 font-sans text-xl text-foreground">
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <Link href={href} onClick={() => setOpen(false)}>
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/contact-us" onClick={() => setOpen(false)}>
                            <Button variant="accent-fill" radius="full" className="px-8 py-2 text-lg">
                                Contact us
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
