import Image from "next/image";

type ShotsProps = {
    frontSrc: string;
    backSrc?: string;
    promoSrc?: string;
    label?: string;
    priority?: boolean;
    className?: string;
};

type ProductCardProps = ShotsProps & {
    name?: string;
};

function Shot({
    src,
    alt,
    priority = false,
}: {
    src: string;
    alt: string;
    priority?: boolean;
}) {
    return (
        <div className="relative aspect-square min-w-0 w-full overflow-hidden border border-line bg-[#1a2438]">
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 768px) 40vw, 50vw"
                className="object-contain p-2 md:p-3"
                priority={priority}
            />
        </div>
    );
}

export function ProductShots({
    frontSrc,
    backSrc,
    promoSrc,
    label,
    priority = false,
    className = "",
}: ShotsProps) {
    const shots = [
        { src: frontSrc, alt: label, priority },
        promoSrc
            ? { src: promoSrc, alt: `${label} promo card`, priority: false }
            : null,
        backSrc
            ? { src: backSrc, alt: `${label} back`, priority: false }
            : null,
    ].filter((shot): shot is { src: string; alt: string; priority: boolean } =>
        Boolean(shot),
    );

    const multiple = shots.length > 1;

    return (
        <div
            className={`grid min-w-0 gap-2 sm:gap-3 md:gap-4 ${multiple ? "grid-cols-2" : ""} ${className}`}
        >
            {shots.map((shot) => (
                <Shot
                    key={shot.src}
                    src={shot.src}
                    alt={shot.alt}
                    priority={shot.priority}
                />
            ))}
        </div>
    );
}

export default function ProductCard({
    name,
    frontSrc,
    backSrc,
    promoSrc,
    className = "",
    priority = false,
}: ProductCardProps) {
    const label = name ?? "Product";

    return (
        <article className={`min-w-0 ${className}`}>
            {name ? (
                <h3 className="text-sm font-semibold leading-snug tracking-tight text-ink sm:text-base md:text-lg">
                    {name}
                </h3>
            ) : null}
            <ProductShots
                frontSrc={frontSrc}
                backSrc={backSrc}
                promoSrc={promoSrc}
                label={label}
                priority={priority}
                className={name ? "mt-3 md:mt-4" : ""}
            />
        </article>
    );
}
