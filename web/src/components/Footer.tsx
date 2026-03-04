import { Container } from "./Container";

type FooterProps = {
  text: string;
};

export function Footer({ text }: FooterProps) {
  return (
    <footer className="border-t border-white/10 py-8 text-sm text-white/60">
      <Container>
        <div>{text}</div>
      </Container>
    </footer>
  );
}
