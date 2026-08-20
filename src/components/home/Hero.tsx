import Button from "../ui/Button";
import Container from "../ui/Container";

export default function HeroSection(){
    return(
        <section className="border-b border-line overflow-hidden min-h-120 bg-[#16283A]" >
            <Container className="relative min-h-120 pt-8 pb-10 md:pt-12 md:pb-16">
                <div
                    className="pointer-events-none bg-[url('/image/bg-1.png')] bg-no-repeat absolute -bottom-10 right-0 w-[20rem] h-[18rem] bg-contain bg-bottom-right md:h-[min(100%,32rem)] md:w-[min(48vw,36rem)]"
                />
                <div className="relative max-w-xl">
                    <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">Your guide to
                        <br/>
                        <span className="text-accent-2">every set.</span>
                    </h1>
                    <div className="mt-3 md:mt-4 text-base text-ink md:text-lg">
                        <p>Your stop to card lists, guides, and release dates</p>
                    </div>
                    <div className="mt-6 flex gap-4 md:mt-8">
                        <Button href="/pokemon">Browse Pokemon</Button>
                        <Button variant="ghost" href="/one-piece">Browse One Piece</Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
