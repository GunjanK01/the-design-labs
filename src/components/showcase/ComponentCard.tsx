'use client'

import { cn } from '@/lib/utils'
import type { ComponentEntry, ArchiveEntry, AccentVariant, CardSize } from '@/lib/components'

// ─── accent line colors ───────────────────────────────────────────────────────
const accentLine: Record<AccentVariant, string> = {
  sage:  'before:bg-gradient-to-r before:from-transparent before:via-accent/30 before:to-transparent',
  rose:  'before:bg-gradient-to-r before:from-transparent before:via-accent2/30 before:to-transparent',
  blue:  'before:bg-gradient-to-r before:from-transparent before:via-accent3/30 before:to-transparent',
  muted: 'before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent',
}

const tagStyles: Record<AccentVariant, string> = {
  sage:  'border-accent/25 text-accent',
  rose:  'border-accent2/25 text-accent2',
  blue:  'border-accent3/25 text-accent3',
  muted: 'border-white/10 text-text-muted',
}

// ─── grid span mapping ────────────────────────────────────────────────────────
const sizeClass: Record<CardSize, string> = {
  large:  'col-span-8 row-span-2',
  medium: 'col-span-4 row-span-2',
  small:  'col-span-4 row-span-1',
  wide:   'col-span-8 row-span-1',
}

// ─── ComponentCard ────────────────────────────────────────────────────────────
interface ComponentCardProps {
  entry: ComponentEntry
  accent: AccentVariant
  style?: React.CSSProperties
}

export function ComponentCard({ entry, accent, style }: ComponentCardProps) {
  return (
    <div
      className={cn(
        // base
        'group relative overflow-hidden rounded-lab border border-white/[0.06]',
        'bg-surface flex flex-col justify-between p-[18px_20px]',
        'cursor-pointer transition-all duration-200',
        // hover
        'hover:-translate-y-[3px] hover:border-white/[0.12] hover:bg-surface2',
        // top accent line via ::before
        'before:absolute before:top-0 before:left-5 before:right-5 before:h-px before:content-[""]',
        accentLine[accent],
        // size
        sizeClass[entry.size],
      )}
      style={style}
    >
      {/* tag */}
      <span className={cn(
        'font-mono text-[9px] tracking-[0.1em] uppercase px-2 py-[2px]',
        'rounded-full border w-fit mb-[10px]',
        tagStyles[accent],
      )}>
        {entry.category}
      </span>

      {/* name + desc */}
      <div>
        <div className="font-display font-bold text-[20px] tracking-[-0.5px] text-text-primary leading-none mb-1">
          {entry.name}
        </div>
        <div className="font-mono text-[10px] text-text-secondary leading-relaxed tracking-[0.02em]">
          {entry.description}
        </div>
      </div>

      {/* inspiration */}
      {entry.inspiration && (
        <div className="font-mono text-[9px] text-text-muted tracking-[0.06em] mt-auto pt-2 before:content-['↗_']">
          {entry.inspiration}
        </div>
      )}
    </div>
  )
}

// ─── ArchiveCard ──────────────────────────────────────────────────────────────
interface ArchiveCardProps {
  entry: ArchiveEntry
  style?: React.CSSProperties
}

export function ArchiveCard({ entry, style }: ArchiveCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-lab border border-white/[0.06]',
        'bg-surface flex flex-col justify-between p-[18px_20px]',
        'cursor-pointer transition-all duration-200 opacity-50 saturate-[0.3]',
        'hover:-translate-y-[2px] hover:border-white/[0.12] hover:bg-surface2 hover:opacity-80 hover:saturate-[0.6]',
        'col-span-4 row-span-2',
      )}
      style={style}
    >
      {/* version badge */}
      <span className="absolute top-3 right-3 font-mono text-[9px] tracking-[0.06em] px-[6px] py-[2px] rounded-full border border-accent2/20 bg-accent2/[0.07] text-accent2">
        {entry.version}
      </span>

      {/* tag */}
      <span className="font-mono text-[9px] tracking-[0.1em] uppercase px-2 py-[2px] rounded-full border border-accent2/20 text-accent2/70 w-fit mb-[10px]">
        {entry.category}
      </span>

      <div>
        <div className="font-display font-bold text-[20px] tracking-[-0.5px] text-text-primary leading-none mb-1">
          {entry.name}
        </div>
        <div className="font-mono text-[10px] text-text-secondary leading-relaxed">
          {entry.description}
        </div>
      </div>

      <div className="font-mono text-[9px] text-text-muted mt-auto pt-2 before:content-['replaced_']">
        {entry.replacedOn}
      </div>
    </div>
  )
}
