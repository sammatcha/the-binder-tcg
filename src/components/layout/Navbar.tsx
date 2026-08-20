'use client';
import Link from "next/link";
import Container from "../ui/Container";
import { useState } from "react";

const navLinks = [
    { name: "Pokémon", href: "/pokemon" },
    { name: "One Piece", href: "/one-piece" },
];

export default function NavBar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="border-b border-line ">
            <Container className="flex items-center justify-between px-6 md:px-8 py-4 relative z-40">
                <Link href="/" className="flex items-baseline gap-2">
                    <span className="text-lg font-bold uppercase tracking-wide text-accent-2 md:text-xl">
                        The Binder
                    </span>
                    <span className="text-xs font-semibold normal-case tracking-normal text-slate-300">
                        Set DB
                    </span>
                </Link>
                <button 
                    type="button"
                    className="md:hidden relative h-4 w-5.5"
                    aria-expanded={open}
                    aria-label={open ? "Close menu": "Open menu"}
                    onClick={() => setOpen(!open)}
                >
                    <span
                        className={`absolute left-0 right-0 h-0.5 bg-ink transition duration-300 ease-out ${open ? "top-1.75 rotate-45" : "top-0.5"
                        }`}
                    />
                    <span
                        className={`absolute left-0 right-0 h-0.5 bg-ink transition duration-300 ease-out ${open ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <span 
                        className={`absolute left-0 right-0 h-0.5 bg-ink transition duration-300 ease-out ${open ? "top-1.75 -rotate-45" : "top-3.25"
                        }`}
                    />
                </button>
                {/* desktop nav */}
                <div className="hidden md:flex items-center gap-6 ">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-base md:text-lg  "
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </Container>
            <div 
                className={`md:hidden fixed bg-bg-4 w-full h-full z-10 flex flex-col justify-center items-center transition duration-300 ease-out gap-4 ${open ? "translate-y-0 opacity-100 "
                : "pointer-events-none -translate-y-3 opacity-0"
                }`}
            >
                {navLinks.map((link) => {
                    return(
                        <Link key={link.href} href={link.href}  onClick={() => setOpen(false)} className="text-3xl font-bold">
                            {link.name}
                        </Link>
                    )
                })}
            </div>
        </nav>
    );
}
