import Container from "@/components/ui/Container";
import SetCatalog from "@/components/sets/setCatalog";
import { pokemonSets } from "@/data/pokemon-sets";

export default function PokemonPage() {
    return(
        <section className="py-10 w-full px-6 md:py-20 md:px-8 border-b border-line">
            <Container>
                <p className="text-xs tracking-wide text-accent-2">Pokemon Card Game</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                    Sets
                </h1>
                <p className="mt-2 mb-10 text-ink-soft">
                    Card lists, products, and release dates.
                </p>
                <SetCatalog sets={pokemonSets} />
            </Container>
        </section>
    )
}