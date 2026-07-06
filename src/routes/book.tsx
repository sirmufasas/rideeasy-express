import { createFileRoute } from "@tanstack/react-router";
import { BookingForm } from "@/components/BookingForm";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a ride — KGC" },
      { name: "description", content: "Book your shuttle in seconds via WhatsApp." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 animate-fade-in-up">
      <div className="mb-8 text-center">
        <h1 className="font-display text-3xl font-bold md:text-5xl">Book your ride</h1>
        <p className="mt-3 text-muted-foreground">Tell us where and when — we'll take it from there.</p>
      </div>
      <BookingForm />
    </section>
  );
}
