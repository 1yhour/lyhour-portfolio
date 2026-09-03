import { cn } from "@/lib/utils";

export function Container({className, children}:{
    className?: string
    children: React.ReactNode
}){
    return(
        <div className={cn("mx-auto w-full  ","max-w-full md:max-w-3xl lg:max-w-5xl border-l border-r", className)}>
            {children}
        </div>
    )
}
export function Section({className,children}:{
    className?: string
    children: React.ReactNode
}){
    return(
        <section className={cn("py-16 md:py-24 lg:py-32 border-t border-border", className)}>
            {children}
        </section>
    )
}