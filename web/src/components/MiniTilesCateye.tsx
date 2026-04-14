type MiniTilesCateyeProps = {
  items: string[];
  /** По умолчанию — отступы для блока «Почему BBI»; для встраивания в «Итог» передайте свой корневой className */
  rootClassName?: string;
  /**
   * Индексы плиток (0-based) с золотым «тёплым» акцентом. По умолчанию [0, 3] — первая и четвёртая, как в «Наш подход».
   * Пустой массив — все плитки нейтральные (холодный кошачий глаз).
   */
  warmIndices?: number[];
};

/**
 * Плитки 3 + 2 с кошачьим глазом (как в жёлтом блоке «BBI — операционный партнёр»).
 */
export function MiniTilesCateye({ items, rootClassName, warmIndices }: MiniTilesCateyeProps) {
  const topRow = items.slice(0, 3);
  const bottomRow = items.slice(3, 5);
  const warmSet =
    warmIndices === undefined ? new Set<number>([0, 3]) : new Set(warmIndices);

  const renderTile = (b: string, rowIndex: number, i: number) => {
    const globalIndex = rowIndex === 0 ? i : i + 3;
    const isAccentTile = warmSet.has(globalIndex);
    const toneClass = isAccentTile
      ? "bbi-cateye-recognize--warm"
      : "bbi-cateye-recognize--neutral";
    const widthCls =
      rowIndex === 0
        ? "w-full min-w-0"
        : "w-full min-w-0 sm:w-auto sm:max-w-[min(100%,23.5rem)] md:max-w-[min(100%,25.5rem)]";
    return (
      <div
        key={`${rowIndex}-${i}`}
        className={`bbi-cateye-recognize bbi-hover-lift ${toneClass} flex ${widthCls} items-start gap-2 rounded-[16px] px-2.5 py-2.5 md:gap-2.5 md:rounded-[18px] md:px-3.5 md:py-3`}
      >
        <span
          className="bbi-cateye-plus ml-px mt-px flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[14px] font-medium leading-none md:mt-0.5 md:h-7 md:w-7 md:text-[15px]"
          aria-hidden
        >
          +
        </span>
        <div className="min-w-0 flex-1 self-center">
          <span className="block text-center text-[13px] font-medium leading-snug text-white/76 md:text-[14px]">
            {b}
          </span>
        </div>
      </div>
    );
  };

  const root =
    rootClassName ??
    "mt-4 w-full max-w-[min(100%,58rem)] space-y-4 pb-5 md:mt-5 md:space-y-4 md:pb-6";

  return (
    <div className={root}>
      {topRow.length > 0 && (
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-x-4 sm:gap-y-4">
          {topRow.map((b, i) => renderTile(b, 0, i))}
        </div>
      )}
      {bottomRow.length > 0 && (
        <div className="flex w-full flex-col gap-4 sm:w-fit sm:max-w-full sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-4 md:gap-x-4">
          {bottomRow.map((b, i) => renderTile(b, 1, i))}
        </div>
      )}
    </div>
  );
}
