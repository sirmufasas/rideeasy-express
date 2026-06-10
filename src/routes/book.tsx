import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { BookingForm } from "@/components/BookingForm";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Ride — KGC Shuttles" },
      { name: "description", content: "Book your private shuttle via WhatsApp. Pick date, time, pickup and destination." },
      { property: "og:title", content: "Book a Ride — KGC Shuttles" },
      { property: "og:description", content: "Book your private shuttle via WhatsApp in seconds." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster richColors position="top-center" />
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-16 animate-fade-in-up">
        <h1 className="font-display text-3xl font-bold md:text-4xl">Book a ride</h1>
        <p className="mt-2 text-muted-foreground">Fill in your trip details — we'll open WhatsApp to confirm.</p>
        <div className="mt-8">
          <BookingForm />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
