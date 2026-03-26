export type ComponentCategory = 'hero' | 'card' | 'nav' | 'btn' | 'anim'
export type ArchiveCategory = 'archive'
export type CardSize = 'large' | 'medium' | 'small' | 'wide'
export type AccentVariant = 'sage' | 'rose' | 'blue' | 'muted'

export interface ComponentEntry {
  id: string
  name: string
  category: ComponentCategory
  size: CardSize
  description: string
  inspiration?: string
  note?: string
  addedOn: string
  tags?: string[]
}

export interface ArchiveEntry {
  id: string
  name: string
  category: ComponentCategory
  version: string
  description: string
  replacedOn: string
}

// ─── ADD YOUR COMPONENTS HERE ───────────────────────────────────────────────
// Every time you build something new, add an entry below.
// size options: 'large' (wide+tall), 'medium', 'small', 'wide' (wide+short)

export const components: ComponentEntry[] = [
  {
    id: 'hero-split',
    name: 'HeroSplit',
    category: 'hero',
    size: 'large',
    description: 'full-width split layout with kinetic headline and CTA block',
    inspiration: 'linear.app',
    note: 'learned how negative space creates premium feel',
    addedOn: '2025-04-01',
  },
  {
    id: 'glass-card',
    name: 'GlassCard',
    category: 'card',
    size: 'small',
    description: 'backdrop blur + warm border glow',
    addedOn: '2025-04-02',
  },
  {
    id: 'nav-pill',
    name: 'NavPill',
    category: 'nav',
    size: 'small',
    description: 'floating pill active indicator navigation',
    addedOn: '2025-04-03',
  },
  {
    id: 'button-set',
    name: 'ButtonSet',
    category: 'btn',
    size: 'medium',
    description: '5 variants with all interaction states',
    addedOn: '2025-04-04',
  },
  {
    id: 'text-reveal',
    name: 'TextReveal',
    category: 'anim',
    size: 'small',
    description: 'stagger word reveal triggered on scroll',
    note: 'uses framer motion viewport detection',
    addedOn: '2025-04-05',
  },
  {
    id: 'stacked-cards',
    name: 'StackedCards',
    category: 'card',
    size: 'medium',
    description: 'layered depth stack that fans on hover',
    inspiration: 'stripe.com',
    addedOn: '2025-04-06',
  },
  {
    id: 'pricing-tiers',
    name: 'PricingTiers',
    category: 'card',
    size: 'wide',
    description: '3-column pricing with highlighted middle tier and feature list',
    inspiration: 'vercel.com',
    addedOn: '2025-04-07',
  },
]

// ─── ARCHIVE (old versions) ──────────────────────────────────────────────────
// When you rebuild a component, move the old entry here instead of deleting it.

export const archiveComponents: ArchiveEntry[] = [
  {
    id: 'hero-split-v1',
    name: 'HeroSplit',
    category: 'hero',
    version: 'v1',
    description: 'original centered layout, less whitespace, no split',
    replacedOn: '2025-04-08',
  },
  {
    id: 'nav-basic-v1',
    name: 'NavBasic',
    category: 'nav',
    version: 'v1',
    description: 'simple link row, no animation',
    replacedOn: '2025-04-09',
  },
  {
    id: 'button-set-v1',
    name: 'ButtonSet',
    category: 'btn',
    version: 'v1',
    description: '3 variants, pre-tailwind refactor',
    replacedOn: '2025-04-10',
  },
]

// ─── CATEGORY CONFIG ─────────────────────────────────────────────────────────

export const categoryConfig: Record<ComponentCategory, {
  label: string
  accent: AccentVariant
}> = {
  hero: { label: 'hero',      accent: 'sage' },
  card: { label: 'card',      accent: 'sage' },
  nav:  { label: 'navbar',    accent: 'rose' },
  btn:  { label: 'button',    accent: 'muted' },
  anim: { label: 'animation', accent: 'sage' },
}
