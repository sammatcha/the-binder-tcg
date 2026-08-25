import Link from "next/link";
import type { TCGSet } from "@/data/types";

export default function SetRow({ set }: { set: TCGSet }) {
    const showType = set.type !== "main";

    return (
        <Link
            href={`/${set.game}/${set.slug}`}
            className="flex items-baseline justify-between gap-4 py-3.5 border-b border-line"
        >
            <div>
                <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-ink">{set.name}</span>
                    {showType ? (
                        <span className="text-[11px] font-semibold px-1.5 py-0.5 border border-accent-2 text-accent-2">
                            {set.type}
                        </span>
                    ) : null}
                </div>
                <div className="mt-1 text-sm text-ink-soft">{set.code}</div>
            </div>
            <div className="text-sm text-ink-muted whitespace-nowrap">{set.released}</div>
        </Link>
    );
}
