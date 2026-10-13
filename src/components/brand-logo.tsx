import Image from 'next/image';

export function BrandLogo({ variant = 'light', priority = false }: { variant?: 'dark' | 'light'; priority?: boolean }) {
  return <span className="brand-logo">
    <Image
      src={`/images/branding/brainstorm-${variant}.svg`}
      alt="Brainstorm Kitchen Designs — Right Design, Right Ideas Matter"
      fill
      sizes="(max-width: 767px) 230px, 300px"
      preload={priority}
      unoptimized
      className="brand-logo-image"
    />
  </span>;
}
