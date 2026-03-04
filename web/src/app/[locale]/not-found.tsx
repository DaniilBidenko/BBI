import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-3xl font-semibold">Страница не найдена</h1>
      <p className="mt-4 text-white/60">
        Проверьте ссылку или вернитесь на главную.
      </p>
      <div className="mt-6">
        <Link href="/" className="text-red-400 hover:text-red-300">
          На главную
        </Link>
      </div>
    </Container>
  );
}
