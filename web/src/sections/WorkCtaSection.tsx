import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

type WorkCtaSectionProps = {
  title: string;
  description: string;
  form: {
    name: string;
    phone: string;
    message: string;
    submit: string;
  };
  submitHref: string;
};

export function WorkCtaSection({
  title,
  description,
  form,
  submitHref,
}: WorkCtaSectionProps) {
  return (
    <section className="relative pb-32 pt-16">
      <Container className="relative mx-auto lg:w-[85%]">
        <div className="bbi-card grid gap-8 rounded-[32px] border border-white/10 bg-[#1b1c21] p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
            <p className="text-sm text-white/70">{description}</p>
          </div>
          <form className="grid gap-4">
            <input
              className="h-11 rounded-2xl border border-white/10 bg-[#14151a] px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#ff2b44]/60"
              placeholder={form.name}
            />
            <input
              className="h-11 rounded-2xl border border-white/10 bg-[#14151a] px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#ff2b44]/60"
              placeholder={form.phone}
            />
            <textarea
              className="min-h-[96px] rounded-2xl border border-white/10 bg-[#14151a] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#ff2b44]/60"
              placeholder={form.message}
            />
            <Button href={submitHref}>{form.submit}</Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
