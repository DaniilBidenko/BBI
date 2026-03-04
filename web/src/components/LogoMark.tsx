type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <img
      src="/brand/logo-mark.png"
      alt="BBI"
      className={className}
      draggable={false}
    />
  );
}
