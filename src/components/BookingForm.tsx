import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, MapPin, Navigation, User, MessageSquare, Send, Car } from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { CarLoader } from "./CarLoader";

// EDIT ME: replace with your driver's WhatsApp number in international format, no +/spaces.
const DRIVER_WHATSAPP = "27000000000";

const RIDE_TYPES = [
  { id: "regular", label: "Regular", desc: "Everyday ride" },
  { id: "xl", label: "XL", desc: "Extra space & luggage" },
  { id: "luxury", label: "Luxury", desc: "Premium comfort" },
  { id: "airport", label: "Airport", desc: "Flights & transfers" },
  { id: "business", label: "Business", desc: "Meetings & events" },
  { id: "long", label: "Long distance", desc: "Out of town" },
];

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(60),
  pickup: z.string().trim().min(3, "Enter pickup location").max(160),
  destination: z.string().trim().min(3, "Enter destination").max(160),
  time: z.string().regex(/^\d{2}:\d{2}$/, "Pick a time"),
  notes: z.string().trim().max(400).optional(),
});

export function BookingForm() {
  const [rideType, setRideType] = useState("regular");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState("12:00");
  const [name, setName] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast.error("Please select a date");
      return;
    }
    const result = schema.safeParse({ name, pickup, destination, time, notes });
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    const ride = RIDE_TYPES.find((r) => r.id === rideType)?.label ?? "Regular";
    const when = `${format(date, "EEE, d MMM yyyy")} at ${time}`;
    const message =
      `*New Shuttle Booking*%0A` +
      `%0A👤 *Name:* ${encodeURIComponent(name)}` +
      `%0A🚗 *Ride type:* ${encodeURIComponent(ride)}` +
      `%0A📅 *When:* ${encodeURIComponent(when)}` +
      `%0A📍 *Pickup:* ${encodeURIComponent(pickup)}` +
      `%0A🏁 *Destination:* ${encodeURIComponent(destination)}` +
      (notes ? `%0A📝 *Notes:* ${encodeURIComponent(notes)}` : "");

    const url = `https://wa.me/${DRIVER_WHATSAPP}?text=${message}`;

    setLoading(true);
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setLoading(false);
      toast.success("Opening WhatsApp — send the message to confirm your ride.");
    }, 2200);
  };

  return (
    <>
      {loading && <CarLoader label="Dispatching to your driver…" />}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border bg-card/80 p-6 shadow-elegant backdrop-blur-md md:p-8"
      >
        <div className="mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Car className="h-4 w-4 text-primary" />
          Book your ride
        </div>

        {/* Ride type grid */}
        <div className="mb-6">
          <Label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Choose your ride
          </Label>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
            {RIDE_TYPES.map((r) => {
              const active = rideType === r.id;
              return (
                <button
                  type="button"
                  key={r.id}
                  onClick={() => setRideType(r.id)}
                  className={cn(
                    "group rounded-xl border p-3 text-left transition-all",
                    active
                      ? "border-primary bg-primary/5 shadow-sm ring-1 ring-primary/30"
                      : "border-border hover:border-primary/40 hover:bg-accent/40",
                  )}
                >
                  <div className="flex items-center gap-2">
                    <Car
                      className={cn(
                        "h-4 w-4 transition-colors",
                        active ? "text-primary" : "text-muted-foreground",
                      )}
                    />
                    <span className="text-sm font-semibold">{r.label}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{r.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Your name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="name"
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-9"
                maxLength={60}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                  initialFocus
                  className={cn("pointer-events-auto p-3")}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Pickup time</Label>
            <Input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="space-y-2 md:col-span-1">
            <Label htmlFor="pickup">Pickup</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
              <Input
                id="pickup"
                placeholder="123 Main St"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="pl-9"
                maxLength={160}
              />
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="destination">Destination</Label>
            <div className="relative">
              <Navigation className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
              <Input
                id="destination"
                placeholder="Airport, Hotel, Office…"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="pl-9"
                maxLength={160}
              />
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="notes">Notes for driver (optional)</Label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Textarea
                id="notes"
                placeholder="Number of passengers, luggage, child seat…"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-[88px] pl-9"
                maxLength={400}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn-grey-glow mt-8 inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground"
        >
          <Send className="h-4 w-4" />
          Send booking via WhatsApp
        </button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          We'll open WhatsApp with your ride details pre-filled. Just hit send.
        </p>
      </form>
    </>
  );
}
