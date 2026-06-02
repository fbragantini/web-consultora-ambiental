# Consultora Ambiental Bragantini

Sitio web estático de la consultora (Vite + React + Tailwind). Sin dependencias de Lovable.

## Desarrollo

Requiere **Node.js 18+** (recomendado 20 o 22). Si usás `nvm`: `nvm use`.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

La salida queda en `dist/`.

## Deploy en Vercel

1. Creá un repo en GitHub y subí este proyecto.
2. En [vercel.com](https://vercel.com): **Add New Project** → importá el repo.
3. Vercel detecta Vite automáticamente. No hace falta configuración extra (`vercel.json` ya incluye rewrites para el router).

## Imágenes

Los placeholders están en `ImageSlot`. Para agregar una foto:

```tsx
<ImageSlot label="Equipo">
  <img src="/images/equipo.jpg" alt="Equipo en terreno" className="h-full w-full object-cover" />
</ImageSlot>
```

Guardá los archivos en `public/images/`.
