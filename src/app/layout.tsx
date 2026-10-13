import type { Metadata } from 'next';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import './globals.css';
export const metadata: Metadata = {
  title: 'BKD — Brainstorm Kitchen Design',
  description: 'Commercial kitchen planning and design consultancy. Thoughtful spaces, precise planning and a considered approach to hospitality design.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
