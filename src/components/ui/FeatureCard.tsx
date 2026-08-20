
type FeatureCardProps = {
    icon : React.ReactNode;
    title: string;
    color: "blue"| "orange"| "red";
    description: string;
}
const bgMap = {
    blue: "bg-[#33478C]",
    orange: "bg-[#6B4A28]",
    red: "bg-[#5C2E2E]",
}

export default function FeatureCard({icon, title, description, color} : FeatureCardProps) {
    return(
        <div className="text-center">
            <div
                className={`size-18 ${bgMap[color]} brightness-200 flex items-center mx-auto justify-center mb-3 md:mb-5`}
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            >
                 {icon}
            </div>
           
            <div>
                <h4 className="text-lg"> {title}</h4>
                <p className="text-base text-ink-soft mt-1 md:mt-2">  {description}</p>
            </div>
           

         
        </div>
    )
}