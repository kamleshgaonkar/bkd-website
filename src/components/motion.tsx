'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.hero-image', { scale: 1.06, duration: 2.2, ease: 'power2.out' });
      gsap.from('.hero-reveal', { y: 28, opacity: 0, duration: 1.1, stagger: 0.14, delay: 0.15, ease: 'power2.out' });
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(element => {
        gsap.from(element, { y: 30, opacity: 0, duration: 0.85, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 92%', once: true } });
      });
      gsap.utils.toArray<SVGPathElement>('.plan-line').forEach(path => {
        const length = path.getTotalLength();
        gsap.fromTo(path, { strokeDasharray: length, strokeDashoffset: length }, { strokeDashoffset: 0, duration: 1.8, ease: 'power1.inOut', scrollTrigger: { trigger: '.floor-plan', start: 'top 80%', once: true } });
      });
      if (window.innerWidth >= 768) gsap.to('.studio-image img', { yPercent: 5, ease: 'none', scrollTrigger: { trigger: '.studio-image', start: 'top bottom', end: 'bottom top', scrub: true } });
    });
    return () => media.revert();
  }, []);
  return null;
}
