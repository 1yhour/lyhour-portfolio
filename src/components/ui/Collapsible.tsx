import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
interface CollapsibleProps {
  id: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
  trigger: React.ReactNode;   // whatever header content you want
  children: React.ReactNode;  // the collapsible body
}

export function Collapsible({ id, isOpen, onToggle, trigger, children }: CollapsibleProps) {
  const contentId = `collapsible-content-${id}`;

  return (
    <div className="flex flex-col">
      <button
        onClick={() => onToggle(id)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="flex items-start justify-between gap-3 w-full text-left group cursor-pointer"
      >
        {trigger}
        <span className="shrink-0 mt-0.5 text-muted-foreground group-hover:text-foreground transition-colors duration-200">
          {isOpen ? <MdKeyboardArrowUp size={22} /> : <MdKeyboardArrowDown size={22} />}
        </span>
      </button>

      <div
        id={contentId}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}