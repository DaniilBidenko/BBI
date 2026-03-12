"use client";

/**
 * Инфографика результатов кейса в стиле гайда:
 * - Одно значение → фирменный красный
 * - Два значения (до/после) → жёлтый (прогноз/до) + красный (результат)
 * - Шрифт Articulat, тени, красные акценты
 */

const CHART_RED = "#ff2b44";
const CHART_RED_GLOW = "rgba(255, 43, 68, 0.35)";
const CHART_YELLOW = "#facc15";

type ResultItem = {
  before: string;
  after: string;
  beforeValue?: number;
  afterValue?: number;
  label?: string;
};

type CaseResultsInfographicProps = {
  items: ResultItem[];
  forecastLabel: string;
  resultLabel: string;
  title?: string;
};

export function CaseResultsInfographic({
  items,
  forecastLabel,
  resultLabel,
  title,
}: CaseResultsInfographicProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#ff2b44]/15 bg-[#1b1c21] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_60px_-12px_rgba(255,43,68,0.15),inset_0_1px_0_rgba(255,255,255,0.04)] md:p-8">
      {/* Заголовок с красным акцентом */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff2b44]">
          {title ?? "Результаты в цифрах"}
        </h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full shadow-sm"
              style={{
                backgroundColor: CHART_YELLOW,
                boxShadow: "0 0 8px rgba(250,204,21,0.4)",
              }}
            />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/55">
              {forecastLabel}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: CHART_RED,
                boxShadow: `0 0 10px ${CHART_RED_GLOW}`,
              }}
            />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#ff2b44]/90">
              {resultLabel}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {items.map((item, i) => {
          const hasValues = item.afterValue != null;
          const beforeVal = item.beforeValue ?? 0;
          const afterVal = item.afterValue ?? 0;
          // Шкала 0–100%: длина бара = итоговое значение. Без серого продолжения.
          const yellowPct = Math.min(beforeVal, 100);
          const redPct = Math.min(Math.max(afterVal - beforeVal, 0), 100 - yellowPct);
          const filledPct = yellowPct + redPct;

          return (
            <div key={i} className="min-w-0 space-y-3">
              <div className="flex min-w-0 items-baseline justify-between gap-3 overflow-hidden">
                <span className="min-w-0 truncate text-sm font-medium text-white/90">
                  {item.label ?? item.after}
                </span>
                <div className="flex min-w-0 shrink items-baseline gap-2 overflow-hidden">
                  {hasValues && beforeVal > 0 && (
                    <span className="shrink-0 text-xs font-normal tabular-nums text-white/45">
                      {beforeVal}%
                    </span>
                  )}
                  <span
                    className="min-w-0 truncate text-xl font-extrabold tabular-nums"
                    style={{
                      color: CHART_RED,
                      fontFamily: "Articulat, Akrobat, sans-serif",
                      textShadow: `0 0 20px ${CHART_RED_GLOW}`,
                    }}
                    title={item.after}
                  >
                    {item.after}
                  </span>
                </div>
              </div>
              {hasValues ? (
                <div
                  className="flex h-6 w-full overflow-hidden rounded-full"
                  style={{ maxWidth: "100%" }}
                >
                  <div
                    className="flex h-full shrink-0 overflow-hidden rounded-full"
                    style={{ width: `${filledPct}%`, minWidth: filledPct > 0 ? "2rem" : 0 }}
                  >
                    {yellowPct > 0 && (
                      <div
                        className="h-full transition-all duration-500"
                        style={{
                          width: filledPct > 0 ? `${(yellowPct / filledPct) * 100}%` : 0,
                          backgroundColor: CHART_YELLOW,
                          borderRadius: redPct > 0 ? "9999px 0 0 9999px" : "9999px",
                          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)",
                        }}
                      />
                    )}
                    {redPct > 0 && (
                      <div
                        className="h-full transition-all duration-500"
                        style={{
                          width: filledPct > 0 ? `${(redPct / filledPct) * 100}%` : 0,
                          backgroundColor: CHART_RED,
                          borderRadius: yellowPct > 0 ? "0 9999px 9999px 0" : "9999px",
                          boxShadow: `inset 0 1px 0 rgba(255,255,255,0.12), 0 0 16px ${CHART_RED_GLOW}`,
                        }}
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="h-6 w-24 overflow-hidden rounded-full"
                  style={{
                    backgroundColor: CHART_RED,
                    boxShadow: `0 0 12px ${CHART_RED_GLOW}`,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
