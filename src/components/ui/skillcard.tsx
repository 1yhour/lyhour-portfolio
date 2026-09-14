import { SkillCardProps } from "@/data/myskill";
export const Skill = ({
  icon,
  title,
  description,
  level,
  badge,
  index,
}: SkillCardProps & { index: number }) => {
  return (
    <div className="group relative border border-border flex flex-col justify-between p-4 min-h-[160px] hover:bg-foreground hover:text-background transition-colors duration-150 cursor-default overflow-hidden">
      <div className="flex items-start justify-between mb-3">
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground group-hover:text-background/60 transition-colors leading-none select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
        {badge && (
          <span className="font-mono text-[9px] tracking-widest uppercase px-1.5 py-0.5 leading-none group-hover:border-background/40 group-hover:text-background/70 transition-colors [&>svg]:hidden">
            {typeof badge === "string" ? (
              badge
            ) : (
              <span className="[&>*]:!text-[8px]">{badge}</span>
            )}
          </span>
        )}
      </div>
      <div className="flex-1 flex items-center mb-3 [&>svg]:w-8 [&>svg]:h-8 [&>svg]:transition-colors [&>svg]:duration-150 group-hover:[&>svg]:text-background text-foreground">
        {icon}
      </div>
      <div className="flex flex-col gap-0.5 border-t border-border group-hover:border-background/30 pt-2 transition-colors">
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground group-hover:text-background/60 leading-none transition-colors">
          {description}
        </span>
        <span className="font-bold text-sm md:text-base uppercase tracking-tight leading-tight">
          {title}
        </span>
        <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-muted-foreground group-hover:text-background/50 leading-none mt-0.5 transition-colors">
          {level}
        </span>
      </div>
      <span className="pointer-events-none absolute top-0 left-0 w-2 h-2 border-r border-b border-foreground/10 group-hover:border-background/20 transition-colors" />
      <span className="pointer-events-none absolute bottom-0 right-0 w-2 h-2 border-l border-t border-foreground/10 group-hover:border-background/20 transition-colors" />
    </div>
  );
};
