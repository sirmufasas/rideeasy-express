import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/policy")({
  head: () => ({
    meta: [
      { title: "Policies & Terms — KGC" },
      { name: "description", content: "Terms of service, liability, privacy and conduct policies for KGC Shuttles, Security & Suppliers." },
      { property: "og:title", content: "Policies & Terms — KGC" },
      { property: "og:description", content: "Read the terms covering our shuttle, security and supplier services." },
    ],
  }),
  component: PolicyPage,
});

function PolicyPage() {
  const updated = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-16 animate-fade-in-up">
        <h1 className="font-display text-3xl font-bold md:text-4xl">Policies & Terms</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>

        <div className="prose prose-sm mt-10 max-w-none space-y-8">
          <Block title="1. Agreement to Terms">
            By booking, requesting, or otherwise engaging KGC ("we", "us", "our") for shuttle,
            security, supplier, or any related services, you ("the Customer") agree to be bound by
            these Terms. If you do not agree, do not use the service.
          </Block>

          <Block title="2. Nature of Service">
            KGC provides private shuttle transport, contracted security personnel, and supplier
            coordination on a request basis. All bookings are arranged informally via WhatsApp or
            other messaging and are confirmed only once KGC explicitly accepts the booking. An
            unanswered or pending message is not a confirmed booking.
          </Block>

          <Block title="3. Limitation of Liability">
            To the fullest extent permitted by law, KGC, its owners, drivers, officers, agents and
            affiliates shall not be liable for any indirect, incidental, special, consequential or
            punitive damages, including but not limited to loss of profits, data, goodwill, missed
            connections, delayed arrival, lost luggage, or any other intangible losses, arising
            out of or related to your use of the service. Total aggregate liability for any claim
            shall not exceed the amount actually paid by the Customer to KGC for the specific
            service giving rise to the claim.
          </Block>

          <Block title="4. Assumption of Risk">
            Road travel and security work carry inherent risks. The Customer acknowledges and
            voluntarily accepts these risks. KGC is not responsible for delays, route changes,
            accidents, third-party conduct, traffic conditions, weather, force majeure events, or
            any incident outside our reasonable control.
          </Block>

          <Block title="5. Customer Conduct">
            The Customer agrees to behave lawfully and respectfully at all times. KGC reserves the
            right to refuse, suspend or terminate service — without refund — to any person who is
            intoxicated beyond safe travel, abusive, threatening, in possession of illegal
            substances or weapons, or who endangers the driver, security officer, vehicle, or
            other passengers. Any damage caused to the vehicle by the Customer (including
            cleaning fees for spills or soiling) will be charged to the Customer.
          </Block>

          <Block title="6. Prohibited Items & Activities">
            The transport of illegal drugs, unlicensed firearms, explosives, hazardous materials,
            stolen goods, or any item prohibited by law is strictly forbidden. KGC will cooperate
            fully with law enforcement and is not liable for any consequence arising from a
            Customer's unlawful conduct.
          </Block>

          <Block title="7. Payments, Cancellations & No-Shows">
            Fares are quoted before each trip. Payment is due as agreed at booking. Cancellations
            made less than 1 hour before the scheduled pickup, and no-shows, may be charged in
            full at KGC's discretion. Refunds are not guaranteed.
          </Block>

          <Block title="8. Security Services">
            Security personnel are deployed where applicable through registered providers (e.g.
            PSIRA-registered officers, where relevant). Officers act within the scope of their
            lawful authority. KGC does not guarantee any specific outcome and is not liable for
            losses, damage, or injury resulting from third-party actions, provided reasonable
            professional care has been exercised.
          </Block>

          <Block title="9. Supplier Services">
            Where KGC coordinates suppliers on a Customer's behalf, KGC acts as a facilitator
            only. Quality, fitness for purpose, delivery times and warranties of goods supplied
            remain the responsibility of the underlying supplier. Disputes regarding supplied
            goods must be raised with the supplier directly.
          </Block>

          <Block title="10. Privacy">
            Information shared with us via WhatsApp or other channels (name, pickup/drop-off
            locations, contact number, trip notes) is used solely to fulfil the booking and to
            contact you about your service. We do not sell your personal information. Standard
            WhatsApp end-to-end encryption applies to messages sent through that platform.
          </Block>

          <Block title="11. Indemnity">
            The Customer agrees to indemnify and hold harmless KGC, its drivers, security
            officers, employees and agents against any claim, loss, liability, cost or expense
            (including reasonable legal fees) arising out of the Customer's breach of these Terms
            or unlawful or negligent conduct.
          </Block>

          <Block title="12. Governing Law">
            These Terms are governed by the laws of the Republic of South Africa. Any dispute
            shall be subject to the exclusive jurisdiction of the South African courts.
          </Block>

          <Block title="13. Changes to These Terms">
            KGC may update these Terms at any time. Continued use of the service after changes
            are posted on this page constitutes acceptance of the updated Terms.
          </Block>

          <Block title="14. Contact">
            Questions about these Terms can be sent to us via WhatsApp or email on the{" "}
            <a className="text-primary underline" href="/contact">Contact</a> page.
          </Block>
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          This page is a general policy template and not legal advice. For binding terms tailored
          to your jurisdiction and operation, please have it reviewed by a qualified attorney.
        </p>
      </section>
      <SiteFooter />
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">{children}</p>
    </section>
  );
}
