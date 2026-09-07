export default function Title({
  title,
  page,
  count,
}: {
  title: string;
  page: string;
  count?: number;
}) {
  return (
    <div className="relative flex items-baseline gap-4 py-2">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen border-b border-border pointer-events-none" />
      <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground select-none">
        {page}
      </span>
      <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase flex-1">
        {title}
      </h2>
      {count != null && (
        <span className="font-mono text-[9px] tracking-widest text-muted-foreground select-none hidden sm:block">
          {count}&nbsp;ITEMS
        </span>
      )}
    </div>
  );
}
