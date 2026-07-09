import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'COGNIVA — Herramientas para decisiones clínicas',
  description: 'Vademécum clínico completo, calculadoras médicas y herramientas para profesionales de salud en LATAM. 218 fármacos · 72 calculadoras · Para médicos, enfermeras y obstetras.',
  keywords: 'vademécum, calculadoras médicas, dosis pediátrica, medicina LATAM, herramientas clínicas, farmacos Peru',
  openGraph: {
    title: 'COGNIVA — Herramientas para decisiones clínicas',
    description: 'Vademécum completo + 72 calculadoras clínicas. Para profesionales de salud en LATAM.',
    url: 'https://cognivaapp.com',
    siteName: 'COGNIVA',
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COGNIVA',
    description: 'Herramientas clínicas para decisiones médicas en LATAM',
    creator: '@cognivaapp',
  },
  icons: { icon: '/favicon.ico' },
  metadataBase: new URL('https://cognivaapp.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
