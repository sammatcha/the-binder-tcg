import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { pokemonSets } from "@/data/pokemon-sets";
import ProductCard, { ProductShots } from "@/components/sets/productCard";
import type { Product } from "@/data/types";

const media = "https://pub-d0c056ca95e54f81b8ed861d43bb078c.r2.dev";

function productFileUrl(setSlug: string, file: string) {
    return `${media}/pokemon/${setSlug}/products/${file}`;
}

function cardProps(setSlug: string, product: Product) {
    const front = product.front ?? `${product.slug}.webp`;
    return {
        name: product.name,
        frontSrc: productFileUrl(setSlug, front),
        backSrc: product.back
            ? productFileUrl(setSlug, product.back)
            : undefined,
        promoSrc: product.promo
            ? productFileUrl(setSlug, product.promo)
            : undefined,
    };
}

export default async function PokemonSetPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const set = pokemonSets.find((s) => s.slug === slug);

    if (!set) {
        notFound();
    }

    const showType = set.type !== "main";

    return (
        <section className="w-full overflow-x-hidden border-b border-line py-8 md:py-16">
            <Container>
                <Link
                    href="/pokemon"
                    className="text-sm text-ink-soft hover:text-accent-2"
                >
                    ← Pokémon sets
                </Link>

                <p className="mt-6 text-xs tracking-wide text-accent-2 md:mt-8">
                    POKÉMON TCG
                    <span className="text-ink-muted"> · </span>
                    <span className="text-ink-soft">{set.era}</span>
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 md:gap-3">
                    <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-5xl">
                        {set.name}
                    </h1>
                    {showType ? (
                        <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wide px-1.5 py-0.5 border border-accent-2 text-accent-2">
                            {set.type}
                        </span>
                    ) : null}
                </div>
                <p className="mt-3 max-w-xl text-sm text-ink-soft md:text-base">
                    Products released with this set.
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-b border-line py-4 text-sm md:mt-10 md:grid-cols-4 md:py-5">
                    <div className="min-w-0">
                        <dt className="text-ink-muted">Set</dt>
                        <dd className="mt-1 font-medium text-ink">{set.code}</dd>
                    </div>
                    <div className="min-w-0">
                        <dt className="text-ink-muted">Era</dt>
                        <dd className="mt-1 font-medium leading-snug text-ink">{set.era}</dd>
                    </div>
                    <div className="min-w-0">
                        <dt className="text-ink-muted">Cards</dt>
                        <dd className="mt-1 font-medium text-ink">{set.cardCount}</dd>
                    </div>
                    <div className="min-w-0">
                        <dt className="text-ink-muted">Released</dt>
                        <dd className="mt-1 font-medium leading-snug text-ink">{set.released}</dd>
                    </div>
                </dl>

                <div className="mt-10 md:mt-16">
                    <h2 className="text-xl font-semibold tracking-tight text-ink md:text-3xl">
                        Product Lineup
                    </h2>
                    <div className="mt-2 h-px w-16 bg-accent-2" />

                    <div className="mt-2 max-w-4xl">
                        {(set.products ?? []).map((row, index) => {
                            if (row.layout === "pair") {
                                const [first, second] = row.products;
                                const sharedTitle = Boolean(first.name && !second.name);
                                const shotsLabel = first.name ?? "Product";

                                if (sharedTitle) {
                                    return (
                                        <div
                                            key={`${first.slug}-${second.slug}`}
                                            className="border-b border-line py-6 md:py-10"
                                        >
                                            <h3 className="text-sm font-semibold leading-snug tracking-tight text-ink sm:text-base md:text-lg">
                                                {first.name}
                                            </h3>
                                            <div className="mt-3 grid min-w-0 grid-cols-2 gap-2 sm:gap-3 md:mt-4 md:gap-4">
                                                {row.products.map((product) => (
                                                    <ProductShots
                                                        key={product.slug}
                                                        {...cardProps(set.slug, product)}
                                                        label={shotsLabel}
                                                        priority={index === 0}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    );
                                }

                                return (
                                    <div
                                        key={`${first.slug}-${second.slug}`}
                                        className="grid grid-cols-1 gap-6 border-b border-line py-6 sm:grid-cols-2 sm:gap-4 md:gap-6 md:py-10"
                                    >
                                        {row.products.map((product) => (
                                            <ProductCard
                                                key={product.slug}
                                                {...cardProps(set.slug, product)}
                                                priority={index === 0}
                                            />
                                        ))}
                                    </div>
                                );
                            }

                            const wide = Boolean(row.product.back || row.product.promo);

                            return (
                                <div
                                    key={row.product.slug}
                                    className={`border-b border-line py-6 last:border-b-0 md:py-10 ${wide ? "" : "max-w-sm"}`}
                                >
                                    <ProductCard
                                        {...cardProps(set.slug, row.product)}
                                        priority={index === 0}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
