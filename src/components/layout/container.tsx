import { cn } from "@/lib/utils";

export function Container({className, children}:{
    className?: string
    children: React.ReactNode
}){
    return(
        <div className={cn("mx-auto w-full px-6 md:px-10 lg:px-20 ","max-w-full md:max-w-3xl lg:max-w-7xl border-l border-r", className)}>
            {children}
        </div>
    )
}
export function Section({className,children}:{
    className?: string
    children: React.ReactNode
}){
    return(
        <section className={cn("py-16 md:py-24 lg:py-32", className)}>
            {children}
        </section>
    )
}