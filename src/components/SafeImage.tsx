import { useMemo, useState } from "react";

import { ImageSlot } from "./ImageSlot";

type ImageFit = "cover" | "contain" | "natural";

type Props = {
  src?: string;
  alt: string;
  label?: string;
  aspect?: "video" | "square" | "portrait" | "wide" | "auto";
  /** cover: llena el recuadro (puede recortar). contain: imagen completa. natural: el alto sigue la proporción de la foto. */
  fit?: ImageFit;
  className?: string;
  imgClassName?: string;
};

/**
 * Muestra una imagen si existe; si no, cae a un placeholder sin romper la UI.
 * Si el archivo no está en `public/`, el navegador devuelve 404 y se renderiza `ImageSlot`.
 */
const defaultImgClass: Record<ImageFit, string> = {
  cover: "absolute inset-0 h-full w-full object-cover",
  contain: "absolute inset-0 h-full w-full object-contain",
  natural: "block h-auto w-full",
};

export function SafeImage({
  src,
  alt,
  label,
  aspect = "video",
  fit = "natural",
  className = "",
  imgClassName,
}: Props) {
  const [failed, setFailed] = useState(false);
  const normalizedSrc = useMemo(() => {
    const value = (src ?? "").trim();
    return value.length > 0 ? value : undefined;
  }, [src]);

  const frameAspect = fit === "natural" ? "auto" : aspect;
  const resolvedImgClass = imgClassName ?? defaultImgClass[fit];

  if (!normalizedSrc || failed) {
    return <ImageSlot label={label ?? alt} aspect={frameAspect === "auto" ? "video" : frameAspect} className={className} />;
  }

  return (
    <ImageSlot label={label ?? alt} aspect={frameAspect} className={className}>
      <img src={normalizedSrc} alt={alt} className={resolvedImgClass} onError={() => setFailed(true)} />
    </ImageSlot>
  );
}

