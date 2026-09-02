import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const heading = cva("font-semibold tracking-tight text-foreground", {
  variants: {
    level: {
      h1: "text-4xl md:text-5xl lg:text-6xl",
      h2: "text-3xl md:text-4xl lg:text-5xl",
      h3: "text-2xl md:text-3xl lg:text-4xl",
    },
  },
});

export function Heading({
  level = "h2",
  as,
  className,
  children,
}: { as?: "h1" | "h2" | "h3" } & VariantProps<typeof heading> & {
    className?: string;
    children: React.ReactNode;
  }) {
  const Tag = as ?? level ?? "h2";
  return <Tag className={cn(heading({ level }), className)}>{children}</Tag>;
}

export function Text({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("text-base lg:text-lg text-muted-foreground", className)}>
      {children}
    </p>
  );
}