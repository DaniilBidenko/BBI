import { Container } from "./Container";

type FooterProps = {
  text: string;
};

export function Footer({ text }: FooterProps) {
  return (
    <footer className="border-t border-[color:var(--bbi-border)] py-8 text-sm text-[var(--bbi-muted)]">
      <Container>
        <div>{text}</div>
      </Container>
    </footer>
  );
}
