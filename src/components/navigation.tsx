'use client';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import { navigation } from '@/content/studio';
export function Navigation() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a className="header-brand" href="#top" aria-label="Brainstorm Kitchen Design home"><BrandLogo priority /></a>
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}<a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={15} /></a></nav>
    <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }}>{[...navigation, { label: 'Let’s talk', href: '#contact' }].map(item => <a href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={20} /></a>)}</nav>}
  </header>;
}
