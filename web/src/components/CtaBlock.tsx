import { Button } from "./Button";

type CtaBlockProps = {
  href: string;
  label: string;
  className?: string;
};

export function CtaBlock({ href, label, className = "" }: CtaBlockProps) {
  return (
    <div className={`flex justify-center py-5 md:py-6 ${className}`}>
      <Button href={href} variant="primary">
        {label}
      </Button>
    </div>
  );
}
