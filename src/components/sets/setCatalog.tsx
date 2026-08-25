import type { TCGSet } from "@/data/types";
import SetRow from "./setRow";

export default function SetCatalog({ sets }: { sets: TCGSet[] }) {
    // const grouped = groupByEra(sets);

    return (
        <div className="grid grid-cols-3 gap-8">
          {sets.map((set) => (
            <SetRow key={set.slug} set={set}/>
          ))}
        </div>
    );
}
