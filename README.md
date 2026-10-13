# bkd-website
Brainstorm Kitchen Design | Official Website

## Website foundation

Next.js App Router, TypeScript, Tailwind CSS, GSAP/ScrollTrigger and Lucide. Static local content only; no backend, credentials or external runtime services are needed.

### Local development

Use Node.js 24 (the cloud environment uses 24.19.0) and npm 11.

```sh
npm ci
npm run dev -- --hostname 0.0.0.0
```

In this cloud machine, use `npm_config_cache=/tmp/bkd-npm-cache npm ci` if the home cache is unavailable. Use the existing checkout; each cloud task is already isolated and does not need a worktree.

### Validation and production

```sh
npm run lint
npm run typecheck
npm run build
npm run test:smoke
npm run start -- --hostname 0.0.0.0
```

The smoke tests start a production server when needed. They use `/usr/bin/chromium` in the cloud; set `CHROMIUM_PATH` for another installed Chromium binary. Production must be built before running them. Vercel can use its standard Next.js deployment settings. No deployment has been performed.

### Content and visual review

`src/content/studio.ts` contains navigation, expertise, process and replaceable project data. All projects are clearly labelled fictional placeholders; local generated image provenance is documented in `public/images/README.md`. Replace these with approved photography and project information before publication. Contact information is deliberately left unconfigured. The project discussion CTA leads to that visible contact placeholder; it does not submit a form or send a message.

Motion is isolated in `src/components/motion.tsx`, respects reduced motion and cleans up GSAP contexts. Browser tests cover desktop imagery, expandable expertise, mobile navigation and overflow, keyboard skip navigation, and reduced-motion rendering.
