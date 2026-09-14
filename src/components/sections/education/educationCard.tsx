import { IoIosSchool } from "react-icons/io";
import { Collapsible } from "@/components/ui/Collapsible";

interface EducationCardProps {
  id: string;
  school: string;
  period: string;
  degree?: string;
  field?: string;
  tags: string[];
  details?: string[];
  isOpen: boolean;
  toggleOpen: (id: string) => void;
}

export function EducationCard({
  id, school, period, degree, field, tags, details, isOpen, toggleOpen,
}: EducationCardProps) {
  return (
    <div className="py-5 flex gap-3">
      <div className="shrink-0 mt-0.5 p-0.5">
        <IoIosSchool size={28} className="fill-muted-foreground" />
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <Collapsible
          id={id}
          isOpen={isOpen}
          onToggle={toggleOpen}
          trigger={
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-sm sm:text-base uppercase tracking-tight text-foreground leading-snug">{school}</h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1 font-mono text-[10px] sm:text-xs text-muted-foreground tracking-wide">
                <span>{period}</span>
                {degree && <><span className="text-border select-none">|</span><span className="uppercase">{degree}</span></>}
                {field && <><span className="text-border select-none">|</span><span className="uppercase">{field}</span></>}
              </div>
            </div>
          }
        >
          {details && details.length > 0 && (
            <ul className="space-y-2 pt-3">
              {details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2.5 font-mono text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-muted-foreground" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </Collapsible>

        {/* tags stay outside Collapsible — always visible */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {tags.map((tag) => (
              <span key={tag} className="font-mono text-[10px] sm:text-xs px-2.5 py-0.5 border border-border text-muted-foreground bg-background/50 rounded-none uppercase">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}