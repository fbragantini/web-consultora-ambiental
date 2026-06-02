import { type ReactNode } from "react";

type Props = {
  label?: string;
  aspect?: "video" | "square" | "portrait" | "wide";
  className?: string;
  children?: ReactNode;
};

const aspectClass = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
};

/** Placeholder para una imagen. Reemplazá con `<img src="..." alt="..." />` cuando tengas la foto. */
export function ImageSlot({ label = "Foto", aspect = "video", className = "", children }: Props) {
  return (
    <div
      className={`${aspectClass[aspect]} relative w-full overflow-hidden rounded-xl border border-border bg-secondary ${className}`}
      data-image-slot
    >
      {children ? (
        children
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-soft text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
          <span className="text-xs font-medium uppercase tracking-wider">{label}</span>
          <span className="text-[10px] opacity-70">Slot para imagen</span>
        </div>
      )}
    </div>
  );
}
