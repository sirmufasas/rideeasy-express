import car from "@/assets/haval-jolion.png";

export function CarLoader({ label = "Connecting your driver…" }: { label?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm">
      <p className="mb-8 font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
        WELCOME TO KGC SHUTTLES
      </p>
      <div className="relative w-full overflow-hidden">
        <div className="animate-drive mx-auto w-fit">
          <img
            src={car}
            alt=""
            aria-hidden
            className="h-32 w-auto scale-x-[-1] drop-shadow-[0_20px_30px_rgba(37,99,235,0.25)] md:h-44"
          />
        </div>
        <div className="road-stripes mx-auto mt-2 h-[2px] w-[90%] opacity-40" />
      </div>
      <p className="mt-8 text-sm font-medium tracking-wide text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
