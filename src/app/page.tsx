import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Plus } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Motion } from '@/components/motion';
import { FloorPlan } from '@/components/floor-plan';
import { BrandLogo } from '@/components/brand-logo';
import { contact, expertise, navigation, process, projects } from '@/content/studio';
function Label({ number, children }: { number: string; children: React.ReactNode }) { return <p className="section-label"><span>{number}</span>{children}</p>; }
export default function Home() {
  return <>
    <a href="#main" className="skip-link">Skip to content</a><Motion />
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-image"><Image src="/images/kitchen.webp" alt="Concept image of a precisely planned commercial kitchen" fill sizes="100vw" preload className="object-cover" /></div><div className="hero-shade" />
      <Navigation />
      <div className="hero-content"><p className="eyebrow hero-reveal"><span className="small-dot" /> FORM. FLOW. FUNCTION.</p><h1 className="hero-reveal">Behind Every Great<br className="desktop-break" /> Kitchen Is<br /> <span>Great Design.</span></h1><div className="hero-bottom hero-reveal"><p>Commercial kitchen planning & consultancy.<br />Considered spaces. Extraordinary possibilities.</p><a className="text-link light" href="#expertise">Explore Our Expertise <ArrowUpRight size={20} /></a></div></div>
      <div className="hero-foot"><a href="#studio">SCROLL TO EXPLORE <ArrowDown size={14} /></a><span>DESIGNED WITH PURPOSE. BUILT AROUND YOU.</span></div>
    </section>
    <main id="main">
      <section id="studio" className="studio section-pad"><Label number="01">THE STUDIO</Label><div className="studio-heading" data-reveal><h2>Designing Spaces<br />That <span className="serif">Work.</span></h2><span className="cross-mark" aria-hidden="true">+</span></div><div className="studio-grid"><div className="studio-image"><Image src="/images/kitchen.webp" alt="Warm light and considered circulation in a conceptual commercial kitchen" fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" /><span className="image-caption">A STUDY IN SPACE & PURPOSE</span></div><div className="studio-copy" data-reveal><p className="lead">Great kitchens begin long<br />before the first service.</p><p>At Brainstorm Kitchen Design, we bring a designer’s eye and a planner’s precision to commercial kitchen environments.</p><p>Based in India, our consultancy considers every space, workflow and technical detail — creating thoughtful foundations for the hospitality experiences that follow.</p><a className="text-link" href="#philosophy">Our approach <ArrowUpRight size={18} /></a></div></div></section>
      <section id="philosophy" className="philosophy section-pad"><div><Label number="02">OUR DESIGN PHILOSOPHY</Label><h2 data-reveal>Every Space.<br />Every Movement.<br /><span className="muted">Every Detail.</span></h2><p data-reveal>A kitchen is an ecosystem. We design the relationships between its parts, so that people, spaces and processes work in harmony.</p><span className="plan-key"><i /> INTELLIGENCE IN EVERY LINE</span></div><div className="plan-wrap"><FloorPlan /><p className="plan-note">ILLUSTRATIVE SCHEMATIC · NOT A CLIENT PROJECT</p></div></section>
      <section id="expertise" className="expertise section-pad"><Label number="03">OUR EXPERTISE</Label><div className="section-heading" data-reveal><h2>From possibility<br />to <span className="serif">precision.</span></h2><p>A complete perspective.<br />A considered solution.</p></div><div className="expertise-list">{expertise.map((item, index) => <details className="expertise-row" key={item.title} data-reveal><summary><span className="row-number">0{index + 1}</span><h3>{item.title}</h3><Plus className="detail-icon" size={22} /></summary><p>{item.description}</p></details>)}</div></section>
      <section id="projects" className="projects section-pad"><Label number="04">SELECTED PROJECTS</Label><div className="section-heading" data-reveal><h2>Spaces with<br /><span className="serif">a point of view.</span></h2><p>An exploration of what’s possible.<br />Concept imagery, awaiting real stories.</p></div><div className="project-grid">{projects.map(project => <article className="project" key={project.number} data-reveal><div className="project-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 767px) 100vw, 33vw" style={{ objectPosition: project.position }} className="object-cover" /><span className="project-tag">PLACEHOLDER PROJECT</span></div><div className="project-title"><span>{project.number}</span><h3>{project.title}</h3><ArrowUpRight size={19} aria-hidden="true" /></div><p>{project.category}</p></article>)}</div><p className="project-disclaimer">These fictional concept studies use generated imagery and do not represent completed BKD projects or clients.</p></section>
      <section id="process" className="process section-pad"><Label number="05">THE DESIGN PROCESS</Label><h2 data-reveal>A clear path.<br /><span className="serif">A shared vision.</span></h2><div className="process-grid">{process.map((step, index) => <article key={step.title} data-reveal><span className="process-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></section>
      <section className="closing section-pad"><Label number="06">THE NEXT CHAPTER</Label><div data-reveal><h2>Let’s Design<br />What Comes <span className="serif">Next.</span></h2><a href={contact.emailHref} className="closing-link">Discuss Your Project <ArrowUpRight size={26} /></a><div className="closing-contact-links"><a href={contact.emailHref}>{contact.email}</a><a href={contact.phoneHref}>{contact.phone}</a><a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14} /></a></div></div></section>
    </main>
    <footer id="contact" className="footer section-pad">
      <div className="footer-top">
        <div className="footer-brand"><a href="#top" aria-label="Back to top"><BrandLogo /></a><p>{contact.company}<br />Commercial kitchen design & consultancy.</p></div>
        <nav aria-label="Footer navigation">{navigation.map(item => <a href={item.href} key={item.href}>{item.label}</a>)}<a href="#process">Our process</a></nav>
        <div className="footer-contact"><span className="eyebrow">START A CONVERSATION</span><a href={contact.emailHref}>{contact.email}</a><a href={contact.phoneHref}>{contact.phone}</a><a className="whatsapp-link" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">Connect on WhatsApp <ArrowUpRight size={14} /></a></div>
        <div className="footer-office"><span className="eyebrow">OUR OFFICE</span><address>{contact.address.map(line => <span key={line}>{line}</span>)}</address></div>
      </div>
      <div className="footer-bottom"><span>© 2026 {contact.company}</span><span>FORM. FLOW. FUNCTION.</span><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  </>;
}
