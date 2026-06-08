import car from "@/assets/haval-jolion.png";

export function CarLoader({ label = "Connecting your driver…" }: { label?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="relative w-full overflow-hidden">
        <img
          src={car}
          alt=""
          aria-hidden
          className="animate-drive mx-auto h-32 w-auto drop-shadow-[0_20px_30px_rgba(37,99,235,0.25)] md:h-44"
        />
        <div className="road-stripes mx-auto mt-2 h-[2px] w-[90%] opacity-40" />
      </div>
      <p className="mt-8 text-sm font-medium tracking-wide text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
