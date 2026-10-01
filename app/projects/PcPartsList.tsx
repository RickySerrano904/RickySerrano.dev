/**
 * Renders the shared PC parts list using the items supplied by each case study.
 * Supports optional prices, crossed-out donated prices, and a supplied total label.
 */
import Image from "next/image";

type Part = {
  category: string;
  name: string;
  imageSrc: string;
  price?: string;
  donated?: boolean;
};

type PcPartsListProps = {
  items: Part[];
  total?: string;
};

export default function PcPartsList({ items, total }: PcPartsListProps) {
  const hasPrices = items.some((item) => item.price !== undefined);

  return (
    <>
      <div className="mt-4 overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-strong)]">
        {items.map(({ category, name, imageSrc, price, donated }) => (
          <div
            key={`${category}-${name}`}
            className={`grid grid-cols-[3.25rem_minmax(0,1fr)] gap-3 border-b border-[color:var(--border)] px-3 py-4 last:border-b-0 sm:items-center sm:gap-4 sm:px-4 ${hasPrices ? "sm:grid-cols-[4.5rem_7rem_minmax(0,1fr)_5.5rem]" : "sm:grid-cols-[4.5rem_7rem_minmax(0,1fr)]"}`}
          >
            <span className="flex h-[3.25rem] w-[3.25rem] items-center justify-center overflow-hidden rounded-xl border border-[color:var(--border)] bg-white p-2 sm:h-16 sm:w-16">
              <Image src={imageSrc} alt="" width={64} height={64} className="h-full w-full object-contain" />
            </span>
            <span className="col-start-2 inline-flex w-fit rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] px-2 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--muted)] sm:col-start-auto sm:tracking-[0.18em]">
              {category}
            </span>
            <span className="col-span-2 text-sm font-semibold leading-6 text-[color:var(--fg)] sm:col-span-1">
              {name}
            </span>
            {hasPrices ? (
              <span className={`col-start-2 text-sm font-semibold text-[color:var(--muted)] sm:col-start-auto sm:text-right ${donated ? "line-through opacity-60" : ""}`}>
                {price}
              </span>
            ) : null}
          </div>
        ))}
      </div>
      {total ? <p className="mt-4 pr-2 text-right text-sm font-semibold text-[color:var(--muted)]">{total}</p> : null}
    </>
  );
}
