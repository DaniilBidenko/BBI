import type { WorkPillar } from "@/content/dictionaries/types";

const SCHEME_KEYS = ["operations", "finance", "sales", "hr", "legal", "marketing"] as const;
/** Углы узлов: сверху-слева по часовой — как на референсе */
const ANGLE_DEG = [-135, -45, 0, 45, 135, 180] as const;

/** Компактные плитки, больший радиус — больше воздуха между узлами */
const VB = 480;
const CX = 240;
const CY = 240;
const R = 168;
const OUTER_HALF = 35;
const CENTER_HALF = 40;
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
const sw = 1.65;
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

function ShieldCenterIcon() {
  return (
    <g fill="none" stroke={stroke} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M0-16.5 L13.5-9v11c0 8-5.5 14-13.5 16.5C-8.5 16-14 9.5-14 2v-11z" />
      <path d="M-4.5 0.5l3.5 3.5 8-9.5" />
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
        className="h-auto w-full max-w-[560px] rounded-[18px] object-contain"
        loading="eager"
      />
    );
  }

  return (
    <svg
      viewBox={`0 0 ${VB} ${VB}`}
      className="mx-auto h-auto w-full max-w-[min(100%,520px)] select-none sm:max-w-[540px] md:max-w-[580px] lg:max-w-[min(90vw,640px)]"
      role="img"
      aria-label={centerLabel}
    >
      <defs>
        <marker id="work-scheme-arrow" markerWidth="5" markerHeight="5" refX="4.2" refY="2.5" orient="auto">
          <path d="M0 0 L5 2.5 L0 5 Z" fill="rgba(255,43,68,0.58)" />
        </marker>
      </defs>

      <g opacity="0.84">
        {ANGLE_DEG.map((_, i) => {
          const a = ANGLE_DEG[i];
          const b = ANGLE_DEG[(i + 1) % 6];
          const p1 = pt(R, a);
          const p2 = pt(R, b);
          return (
            <line
              key={`perim-${i}`}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke="rgba(255,43,68,0.4)"
              strokeWidth="1.15"
              markerStart="url(#work-scheme-arrow)"
              markerEnd="url(#work-scheme-arrow)"
            />
          );
        })}
      </g>

      <g opacity="0.9">
        {ANGLE_DEG.map((deg, i) => {
          const inner = pt(SPOKE_IN, deg);
          const outer = pt(SPOKE_OUT, deg);
          return (
            <line
              key={`spoke-${i}`}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              stroke="rgba(255,43,68,0.48)"
              strokeWidth="1.15"
              markerEnd="url(#work-scheme-arrow)"
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
            <g transform="translate(0,-11) scale(0.92)">
              <PillarIcon pillarKey={node.key} />
            </g>
            <foreignObject x={-OUTER_HALF + 3} y={14} width={(OUTER_HALF - 3) * 2} height="42">
              <div className="flex h-full items-start justify-center break-words px-0.5 text-center text-[8px] font-medium leading-[1.12] text-white/95 sm:text-[9px]">
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
          rx={13}
          fill={tileFill}
          stroke={centerStroke}
          strokeWidth="1.08"
        />
        <g transform="translate(0,-12) scale(0.92)">
          <ShieldCenterIcon />
        </g>
        <text
          x="0"
          y="26"
          textAnchor="middle"
          fill="rgba(255,255,255,0.96)"
          fontSize="11.5"
          fontWeight="600"
          fontFamily="inherit"
          letterSpacing="0.06em"
        >
          {centerLabel}
        </text>
      </g>
    </svg>
  );
}
