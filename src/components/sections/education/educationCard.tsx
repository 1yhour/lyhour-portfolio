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
              <h3 className="font-semibold text-foreground leading-snug">{school}</h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5 text-sm text-muted-foreground">
                <span>{period}</span>
                {degree && <><span className="text-border select-none">|</span><span>{degree}</span></>}
                {field && <><span className="text-border select-none">|</span><span>{field}</span></>}
              </div>
            </div>
          }
        >
          {details && details.length > 0 && (
            <ul className="space-y-2 pl-2">
              {details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground leading-relaxed">
                  <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-muted-foreground" />
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </Collapsible>

        {/* tags stay outside Collapsible — always visible */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}