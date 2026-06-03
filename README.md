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

## Formulario de contacto (email)

Usa [Resend](https://resend.com) (plan gratis, ideal para pocos mails).

### 1. Crear cuenta en Resend

1. Entrá a [resend.com](https://resend.com) y registrate (podés usar `jorgebragantini2008@gmail.com`).
2. En **API Keys** → **Create API Key** → copiá la clave (`re_...`).

Sin dominio propio, al principio podés enviar desde `onboarding@resend.dev` hacia el email con el que te registraste en Resend (suele ser el mismo Gmail).

### 2. Variables en Vercel

En el proyecto de Vercel → **Settings** → **Environment Variables**:

| Variable | Valor |
|----------|--------|
| `RESEND_API_KEY` | tu clave `re_...` |
| `CONTACT_TO_EMAIL` | `jorgebragantini2008@gmail.com` |
| `CONTACT_FROM_EMAIL` | `onboarding@resend.dev` (o tu dominio cuando lo verifiques) |

Redeploy después de guardar.

### 3. Probar en local (opcional)

```bash
cp .env.example .env.local
# editá .env.local con tu RESEND_API_KEY
npm install
npx vercel dev
```

`npm run dev` solo no ejecuta `/api/contact`; para probar el formulario en local usá `vercel dev` o deployá a Vercel.

El mail llega con asunto **consulta web consultora bragantini** y en el cuerpo: nombre, email del visitante y mensaje. Al responder, Gmail usa el email del formulario (`Reply-To`).
