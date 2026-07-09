# COGNIVA Landing Page

Landing web de COGNIVA — `cognivaapp.com`

## Stack
- Next.js 14 (App Router)
- TypeScript
- CSS Modules
- Deploy: Vercel

## Deploy en Vercel (5 pasos)

1. Subir esta carpeta a GitHub como repositorio `cogniva-landing`
2. Ir a vercel.com → New Project → Import desde GitHub
3. Seleccionar el repositorio `cogniva-landing`
4. Vercel detecta Next.js automáticamente
5. Click en Deploy

## Dominio personalizado
Una vez deployado en Vercel:
- Settings → Domains → Add Domain → `cognivaapp.com`
- Agregar los DNS records que Vercel indica en tu registrador de dominio

## Desarrollo local
```bash
npm install
npm run dev
# Abrir http://localhost:3000
```

## Páginas
- `/` — Landing principal
- `/support/activacion` — Cómo obtener código de activación

## Actualizar contador de cupos de lanzamiento
En `src/app/page.tsx`, línea ~100:
```tsx
const LAUNCH_USED = 147;  // ← cambiar este número
```

## Variables de entorno (próximamente)
```
NEXT_PUBLIC_STRIPE_KEY=pk_live_...
```
