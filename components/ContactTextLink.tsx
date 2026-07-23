"use client";

import { useState } from 'react';

interface ContactTextLinkProps {
    text: string;
    className?: string;
}

export default function ContactTextLink({ text, className }: ContactTextLinkProps) {
    const [copied, setCopied] = useState(false);

    const copyText = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <div className="flex flex-row items-center gap-2">
            <p className={`font-accent text-foreground-light cursor-pointer hover:underline underline-offset-2 transition-all ease-in-out ${className ?? ''}`} onClick={copyText}>{text}</p>
            {copied && <span className="text-xs text-muted-foreground">Copied!</span>}
        </div>
    )
}