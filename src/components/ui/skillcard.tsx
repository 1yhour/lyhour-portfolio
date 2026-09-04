import { SkillCardProps } from "@/data/myskill";
import { MYSKILL } from "@/data/myskill";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Skill = ({
  icon,
  title,
  description,
  level,
  badge,
}: SkillCardProps) => {
  return (
    <Card className="relative group bg-transparent border-border rounded-none hover:bg-foreground/[0.02] transition-colors duration-200 p-2">
      {badge && (
        <div className="absolute top-2 right-2 z-10 [&>div]:rounded-none [&>div]:border-foreground [&>div]:text-[8px] [&>div]:px-1 [&>div]:py-0 [&>div]:font-mono [&>div]:uppercase [&>div]:tracking-widest">
          {badge}
        </div>
      )}

      <CardHeader className="flex flex-col items-start pt-3 pb-1">
        <div className="mb-1 text-foreground/70 group-hover:text-foreground transition-colors duration-200 [&>svg]:w-6 [&>svg]:h-6">
          {icon}
        </div>
        <CardTitle className="text-sm md:text-base font-bold tracking-tight uppercase leading-none">
          {title}
        </CardTitle>
        <CardDescription className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest mt-0.5 text-foreground/50 leading-none">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-3 text-left">
        <span className="text-[9px] uppercase tracking-widest font-mono text-muted-foreground border-b border-border/50 pb-0.5 leading-none">
          {level}
        </span>
      </CardContent>
    </Card>
  );
};

export default function SkillCard() {
  return (
    <div className="w-full flex flex-col gap-4 mt-6">
      <div className="flex flex-col gap-2">
        <h2 className="scroll-m-20 text-xl md:text-2xl font-bold tracking-tight uppercase">
          Core Technologies & Tools
        </h2>
    
      </div>
      
      {/* Improved responsive grid layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {MYSKILL.map(({ title, icon, description, level, badge }) => (
          <Skill
            key={title}
            icon={icon}
            title={title}
            description={description}
            level={level}
            badge={badge}
          />
        ))}
      </div>
    </div>
  );
}
