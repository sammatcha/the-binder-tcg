import Link from "next/link";
import Container from "../ui/Container";

const navLinks = [
    { name: "Pokémon", href: "/pokemon" },
    { name: "One Piece", href: "/one-piece" },
];

export default function NavBar() {
    return (
        <nav className="border-b border-line">
            <Container className="flex items-center justify-between px-6 md:px-8 py-4">
                <Link href="/" className="text-lg font-bold uppercase tracking-wide text-accent-2">
                    The Binder
                </Link>
                <div className="flex items-center gap-6 ">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-base text-ink-soft"
                        >
                            {link.name}
                        </Link>
                    ))}
                    
                </div>
            </Container>
        </nav>
    );
}
