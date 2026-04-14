import type { WorkPillar } from "@/content/dictionaries/types";

const SCHEME_KEYS = ["operations", "finance", "sales", "hr", "legal", "marketing"] as const;
/** Углы узлов: сверху-слева по часовой — как на референсе */
const ANGLE_DEG = [-135, -45, 0, 45, 135, 180] as const;

/** Более крупная схема: больше радиус и плитки */
const VB = 620;
const CX = 310;
const CY = 310;
const R = 222;
const OUTER_HALF = 44;
const CENTER_HALF = 54;
const SPOKE_IN = CENTER_HALF;
const SPOKE_OUT = R - OUTER_HALF;
const TILE_RX = 12;

function rad(deg: number) {
  return (deg * Math.PI) / 180;
}

function pt(r: number, deg: number) {
  const t = rad(deg);
  return { x: CX + r * Math.cos(t), y: CY + r * Math.sin(t) };
}

const stroke = "rgba(255,43,68,0.95)";
const sw = 1.7;
const common = {
  fill: "none" as const,
  stroke,
  strokeWidth: sw,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/**
 * Иконки: единый вес линии, аккуратная геометрия (24×24 → масштаб ~±13)
 */
function PillarIcon({ pillarKey }: { pillarKey: string }) {
  switch (pillarKey) {
    case "operations":
      return (
        <g {...common}>
          <circle cx="0" cy="0" r="4.2" opacity="0.95" />
          <path
            d="M0-13v3.4 M0 9.6v3.4 M13 0h-3.4 M-9.6 0h-3.4 M9.2-9.2l-2.1 2.1 M-9.2-9.2l2.1 2.1 M9.2 9.2l-2.1-2.1 M-9.2 9.2l2.1-2.1"
            opacity="0.98"
          />
        </g>
      );
    case "finance":
      return (
        <g {...common}>
          <path d="M-12.5-6h25a2.5 2.5 0 012.5 2.5v10a2.5 2.5 0 01-2.5 2.5h-25a2.5 2.5 0 01-2.5-2.5v-10A2.5 2.5 0 01-12.5-6z" />
          <path d="M-12.5-1h25" opacity="0.55" strokeWidth={1.25} />
          <rect x="-8" y="2.5" width="16" height="10" rx="1.5" opacity="0.35" />
          <circle cx="5" cy="5.5" r="2.6" fill="rgba(255,43,68,0.1)" stroke={stroke} strokeWidth={sw} />
        </g>
      );
    case "sales":
      return (
        <g {...common}>
          <path d="M-12.5-9h25a2.5 2.5 0 012.5 2.5v11a2.5 2.5 0 01-2.5 2.5h-25a2.5 2.5 0 01-2.5-2.5v-11A2.5 2.5 0 01-12.5-9z" />
          <path d="M-12.5-4h25" opacity="0.4" strokeWidth={1.2} />
          <path d="M-7 6.5v-5 M-2 6.5v-8 M3 6.5v-3.5 M8 6.5v-6" />
          <path d="M-8 9h16" opacity="0.25" strokeWidth={1.15} />
        </g>
      );
    case "hr":
      return (
        <g {...common}>
          <circle cx="-3.5" cy="-4.5" r="3.6" />
          <path d="M-12.5 11.5c0-5.2 5.2-9 12.5-9s12.5 3.8 12.5 9" />
          <circle cx="11" cy="-5" r="5" opacity="0.22" strokeWidth={1.2} />
          <path d="M11-9.5v9 M6.5-5h9" strokeWidth={sw} />
        </g>
      );
    case "legal":
      return (
        <g {...common}>
          <path d="M-10-12h11l10 10v12.5a2.5 2.5 0 01-2.5 2.5H-10a2.5 2.5 0 01-2.5-2.5v-20a2.5 2.5 0 012.5-2.5z" />
          <path d="M1-12v9.5h9.5" opacity="0.5" strokeWidth={1.35} />
          <path d="M-5 2h12 M-5 6h12 M-5 10h8" strokeWidth={1.35} opacity="0.92" />
        </g>
      );
    case "marketing":
      return (
        <g {...common}>
          <path d="M-13-3 L-4-7.5 L11-5.5 L11 5.5 L-4 7.5 L-13 3 Z" />
          <path d="M-4-7.5 L-4 7.5" opacity="0.28" strokeWidth={1.25} />
          <path d="M11 0h5.5" />
          <path
            d="M16.5 0 Q19.2 -3 17 -5.5 M16.5 0 Q19.2 3 17 5.5"
            opacity="0.44"
            strokeWidth={1.2}
          />
        </g>
      );
    default:
      return <circle cx="0" cy="0" r="8" {...common} />;
  }
}

/** Центр схемы: бизнес — портфель (без щита) */
function BusinessCenterIcon() {
  return (
    <g fill="none" stroke={stroke} strokeWidth={1.65} strokeLinecap="round" strokeLinejoin="round">
      <path d="M-10.5-1.5h21a2 2 0 012 2v8a2 2 0 01-2 2h-21a2 2 0 01-2-2v-8a2 2 0 012-2z" />
      <path d="M-4.5-1.5v-3a4.5 4.5 0 019 0v3" />
      <path d="M-6.5 4.5h13" opacity="0.55" strokeWidth={1.35} />
      <path d="M0 6.5v3.5" opacity="0.55" strokeWidth={1.35} />
    </g>
  );
}

const tileFill = "rgba(18,17,20,0.96)";
const tileStroke = "rgba(255,43,68,0.24)";
const centerStroke = "rgba(255,43,68,0.34)";

type WorkSchemeDiagramProps = {
  centerLabel: string;
  pillars: WorkPillar[];
};

export function WorkSchemeDiagram({ centerLabel, pillars }: WorkSchemeDiagramProps) {
  const nodes = SCHEME_KEYS.map((key) => pillars.find((p) => p.key === key)).filter(
    (p): p is WorkPillar => Boolean(p),
  );
  if (nodes.length !== 6) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/brand/work-scheme.jpg"
        alt=""
        className="h-auto w-full max-w-[760px] rounded-[18px] object-contain"
        loading="eager"
      />
    );
  }

  return (
    <svg
      viewBox={`0 0 ${VB} ${VB}`}
      className="mx-auto h-auto w-full max-w-[min(100%,760px)] select-none sm:max-w-[720px] md:max-w-[760px] lg:max-w-[min(92vw,860px)]"
      role="img"
      aria-label={centerLabel}
    >
      <defs>
        <marker
          id="work-scheme-arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6.5"
          refY="4"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0 0 L8 4 L0 8 Z" fill="rgba(255,43,68,0.9)" />
        </marker>
      </defs>

      <g opacity="0.84">
        {ANGLE_DEG.map((_, i) => {
          const a = ANGLE_DEG[i];
          const b = ANGLE_DEG[(i + 1) % 6];
          const p1 = pt(R, a);
          const p2 = pt(R, b);
          return (
            <path
              key={`perim-${i}`}
              d={`M ${p1.x} ${p1.y} L ${(p1.x + p2.x) / 2} ${(p1.y + p2.y) / 2} L ${p2.x} ${p2.y}`}
              fill="none"
              stroke="rgba(255,43,68,0.4)"
              strokeWidth="1.3"
              markerMid="url(#work-scheme-arrow)"
            />
          );
        })}
      </g>

      <g opacity="0.9">
        {ANGLE_DEG.map((deg, i) => {
          const inner = pt(SPOKE_IN, deg);
          const outer = pt(SPOKE_OUT, deg);
          return (
            <path
              key={`spoke-${i}`}
              d={`M ${inner.x} ${inner.y} L ${(inner.x + outer.x) / 2} ${(inner.y + outer.y) / 2} L ${outer.x} ${outer.y}`}
              fill="none"
              stroke="rgba(255,43,68,0.48)"
              strokeWidth="1.3"
              markerMid="url(#work-scheme-arrow)"
            />
          );
        })}
      </g>

      {nodes.map((node, i) => {
        const deg = ANGLE_DEG[i];
        const { x, y } = pt(R, deg);
        return (
          <g key={node.key} transform={`translate(${x}, ${y})`}>
            <rect
              x={-OUTER_HALF}
              y={-OUTER_HALF}
              width={OUTER_HALF * 2}
              height={OUTER_HALF * 2}
              rx={TILE_RX}
              fill={tileFill}
              stroke={tileStroke}
              strokeWidth="1"
            />
            <g transform="translate(0,-16) scale(1.02)">
              <PillarIcon pillarKey={node.key} />
            </g>
            <foreignObject x={-OUTER_HALF + 3} y={12} width={(OUTER_HALF - 3) * 2} height="70">
              <div
                lang="ru"
                className="flex h-full items-start justify-center break-words px-1 text-center text-[8.5px] font-medium leading-[1.1] text-white/95 [overflow-wrap:anywhere] sm:text-[9px] sm:leading-[1.12]"
              >
                {node.title}
              </div>
            </foreignObject>
          </g>
        );
      })}

      <g transform={`translate(${CX}, ${CY})`}>
        <rect
          x={-CENTER_HALF}
          y={-CENTER_HALF}
          width={CENTER_HALF * 2}
          height={CENTER_HALF * 2}
          rx={16}
          fill={tileFill}
          stroke={centerStroke}
          strokeWidth="1.08"
        />
        <g transform="translate(0,-16) scale(1.05)">
          <BusinessCenterIcon />
        </g>
        <text
          x="0"
          y="34"
          textAnchor="middle"
          fill="rgba(255,255,255,0.96)"
          fontSize="16"
          fontWeight="700"
          fontFamily="inherit"
          letterSpacing="0.06em"
        >
          {centerLabel}
        </text>
      </g>
    </svg>
  );
}
