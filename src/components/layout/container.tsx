import { cn } from "@/lib/utils";
import Scales from "@/components/ui/scales";

export function Container({className, children}:{
    className?: string
    children: React.ReactNode
}){
    return(
        <div className={cn("mx-auto w-full max-w-full md:max-w-3xl lg:max-w-4xl border-l border-r border-border pt-8 md:pt-16 lg:pt-24 pb-2 md:pb-4 lg:pb-8 px-4 sm:px-8", className)}>
            
            {children}
        </div>
    )
}

export function Section({className,children}:{
    className?: string
    children: React.ReactNode
}){
    return(
        <section className={cn("w-full border-t border-border relative", className)}>
            <div className="absolute top-0 left-0 h-8 w-full border-b border-border pointer-events-none overflow-hidden flex justify-center">
                <Scales size={5} />
            </div>
            {children}
        </section>
    )
}