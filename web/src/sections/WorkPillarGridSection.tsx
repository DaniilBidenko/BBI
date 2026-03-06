import { Container } from "@/components/Container";
import type { WorkPillar } from "@/content/dictionaries/types";

type WorkPillarGridSectionProps = {
  title: string;
  description: string;
  pillars: WorkPillar[];
  field: "result" | "broken" | "actions";
  badge: string;
};

const variantStyles = {
  result: {
    section: "relative py-24",
    headerBadge: "text-xs font-medium uppercase tracking-[0.28em] text-emerald-400/90",
    card: "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#1a1b20] to-[#15161a] p-6 transition hover:border-emerald-500/20",
    cardAccent: "absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-500/50 to-transparent",
    label: "text-xs font-medium uppercase tracking-[0.2em] text-white/50",
    text: "mt-3 text-[15px] leading-[1.65] text-white/88",
  },
  broken: {
    section: "relative py-24",
    headerBadge: "text-xs font-medium uppercase tracking-[0.28em] text-amber-400/90",
    card: "relative rounded-xl border border-amber-500/15 bg-[#18191d] px-5 py-4",
    cardAccent: "absolute left-0 top-0 bottom-0 w-[3px] rounded-l bg-amber-500/40",
    label: "text-xs font-medium uppercase tracking-[0.2em] text-white/45",
    text: "mt-2 text-sm leading-relaxed text-white/80",
  },
  actions: {
    section: "relative py-24",
    headerBadge: "text-xs font-medium uppercase tracking-[0.28em] text-[#ff2b44]",
    card: "relative rounded-2xl border border-[#ff2b44]/20 bg-[#1b1c21] p-6 shadow-[inset_0_1px_0_rgba(255,43,68,0.08)]",
    cardAccent: "",
    label: "text-xs font-medium uppercase tracking-[0.22em] text-[#ff2b44]/80",
    text: "mt-3 text-[15px] leading-[1.65] text-white/90",
  },
} as const;

export function WorkPillarGridSection({
  title,
  description,
  pillars,
  field,
  badge,
}: WorkPillarGridSectionProps) {
  const styles = variantStyles[field];

  return (
    <section className={styles.section}>
      <Container className="relative mx-auto space-y-10 lg:w-[85%]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-2">
            <div className={styles.headerBadge}>{badge}</div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              {title}
            </h2>
          </div>
          <p className="max-w-xl text-[15px] leading-[1.6] text-white/70">
            {description}
          </p>
        </div>

        {field === "result" && (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map((pillar, i) => (
              <article
                key={`${pillar.key}-${field}`}
                className={styles.card}
              >
                <div className={styles.cardAccent} />
                <div className={styles.label}>{pillar.title}</div>
                <p className={styles.text}>{pillar[field]}</p>
              </article>
            ))}
          </div>
        )}

        {field === "broken" && (
          <div className="space-y-3">
            {pillars.map((pillar, i) => (
              <article
                key={`${pillar.key}-${field}`}
                className={styles.card}
              >
                <div className={styles.cardAccent} />
                <div className="flex items-baseline justify-between gap-4">
                  <span className={styles.label}>{pillar.title}</span>
                  <span className="text-[10px] font-semibold tabular-nums text-amber-500/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className={styles.text}>{pillar[field]}</p>
              </article>
            ))}
          </div>
        )}

        {field === "actions" && (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {pillars.map((pillar, i) => (
              <article
                key={`${pillar.key}-${field}`}
                className={styles.card}
              >
                <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#ff2b44]/15 text-xs font-bold text-[#ff2b44]">
                  {i + 1}
                </div>
                <div className={styles.label}>{pillar.title}</div>
                <p className={styles.text}>{pillar[field]}</p>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
