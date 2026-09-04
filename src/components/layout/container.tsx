import { cn } from "@/lib/utils";

export function Container({className, children}:{
    className?: string
    children: React.ReactNode
}){
    return(
        <div className={cn("mx-auto w-full max-w-full md:max-w-3xl lg:max-w-5xl border-l border-r border-border pt-8 md:pt-16 lg:pt-24 pb-2 md:pb-4 lg:pb-8 px-4 sm:px-8", className)}>
            {children}
        </div>
    )
}

export function Section({className,children}:{
    className?: string
    children: React.ReactNode
}){
    return(
        <section className={cn("w-full border-t border-border", className)}>
            {children}
        </section>
    )
}