import Link from "next/link";
import Container from "../ui/Container";

const navLinks = [
    { name: "Pokémon", href: "/pokemon" },
    { name: "One Piece", href: "/one-piece" },
];

export default function Footer() {
    return(
        <footer className="w-full text-white ">
            <Container className="flex flex-col pt-8 pb-10 md:pt-12 md:pb-16">
                <div className="flex flex-col">
                    <p className="font-bold text-lg mb-2 md:mb-3 gap-2">GAMES</p>
                     <div className="flex flex-col md:flex-row gap-1 md:gap-6 ">
                        {navLinks.map((link) => (
                             <Link 
                            key={link.href} 
                            href={link.href}
                            >
                                <p>{link.name}</p>
                            </Link>            
                        ))}
                    </div>
                    
                </div>
                <div className="mt-8 md:mt-12">
                    <p className="text-sm text-white/70 ">
                        © {new Date().getFullYear()} 
                    </p>
                    <p className="text-5xl tracking-wide md:text-8xl md:tracking-wide mt-1">
                        The Binder
                    </p>
                    <p className="text-xs max-w-lg md:max-w-3xl mt-4 md:mt-6 text-ink-soft">
                        The Binder is a fan-made, non-commercial reference site and is not affiliated with, endorsed by, or sponsored by Nintendo, The Pokémon Company, Bandai, GameFreak, or Shueisha. Pokémon and One Piece are trademarks of their respective owners
                    </p>
                </div>
            </Container>
            
        </footer>
        
    )
}