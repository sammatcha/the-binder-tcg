import Image from "next/image";

export default function HeroCard() {
    return(
        <section className="mt-6 md:mt-8 flex ">
            <Image 
                className="rounded-lg" 
                src="/image/card-bg-good.png" 
                alt="Hero Card Stack" 
                width={600} 
                height={600} 
            />
        </section>
    )
}