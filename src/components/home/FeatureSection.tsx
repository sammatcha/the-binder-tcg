import FeatureCard from "../ui/FeatureCard"
import { PackageOpen, List, Sparkles } from "lucide-react";

export default function FeatureSection() {
    return(
        <section className="py-10 px-6 md:py-20 md:px-8 border-b border-line">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-9">
                <FeatureCard icon={<PackageOpen className=" size-8"/>} title= "Products Info" description="Whats in the box" color="blue" />
                <FeatureCard icon={<List className="size-8"/>} title= "Card List" description="What cards are in the set" color="orange" />
                <FeatureCard icon={<Sparkles className="size-8"/>} title= "Rarity Breakdown" description="Know the rarities" color="red" />
            </div>
        </section>
        
    )
}