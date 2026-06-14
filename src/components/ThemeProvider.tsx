import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";
const ThemeCtx = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "light",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("kgc-theme")) as Theme | null;
    const initial: Theme = stored ?? "light";
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("kgc-theme", theme);
  }, [theme]);

  return (
    <ThemeCtx.Provider value={{ theme, toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")) }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeCtx);
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative grid h-9 w-9 place-items-center rounded-full border bg-card text-foreground transition-all hover:scale-110 hover:shadow-md"
    >
      <Sun className={`h-4 w-4 transition-all ${theme === "dark" ? "scale-0 -rotate-90" : "scale-100 rotate-0"}`} />
      <Moon className={`absolute h-4 w-4 transition-all ${theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90"}`} />
    </button>
  );
}
