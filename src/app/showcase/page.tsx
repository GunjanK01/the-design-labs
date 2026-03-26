'use client'

import { useState } from 'react'
import { Header } from '@/components/showcase/Header'
import { FilterBar, type FilterValue } from '@/components/showcase/FilterBar'
import { ComponentCard, ArchiveCard } from '@/components/showcase/ComponentCard'
import { components, archiveComponents, categoryConfig } from '@/lib/components'

// stagger delay for cards
const delayMap = ['0.04s','0.08s','0.12s','0.16s','0.20s','0.24s','0.28s','0.32s']

export default function ShowcasePage() {
  const [active, setActive] = useState<FilterValue>('all')

  const filtered = active === 'all' || active === 'archive'
    ? components
    : components.filter((c) => c.category === active)

  const showArchive = active === 'archive'

  const sectionLabel = () => {
    if (showArchive) return `archived versions — ${archiveComponents.length}`
    if (active === 'all') return `current components — ${components.length}`
    return `${active}s — ${filtered.length}`
  }

  return (
    <main className="relative z-10 max-w-[980px] mx-auto px-7 py-11 pb-20">
      <Header />

      <FilterBar active={active} onChange={setActive} />

      {/* section label */}
      <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-text-muted mb-[14px]">
        {sectionLabel()}
      </p>

      {/* ── MAIN GRID ── */}
      {!showArchive && (
        <div className="grid grid-cols-12 auto-rows-[110px] gap-2">
          {filtered.map((entry, i) => {
            const { accent } = categoryConfig[entry.category]
            return (
              <ComponentCard
                key={entry.id}
                entry={entry}
                accent={accent}
                style={{ animationDelay: delayMap[i] ?? '0s' }}
              />
            )
          })}
        </div>
      )}

      {/* ── ARCHIVE GRID ── */}
      {showArchive && (
        <div className="grid grid-cols-12 auto-rows-[110px] gap-2">
          {archiveComponents.map((entry, i) => (
            <ArchiveCard
              key={entry.id}
              entry={entry}
              style={{ animationDelay: delayMap[i] ?? '0s' }}
            />
          ))}
        </div>
      )}

      {/* footer */}
      <footer className="mt-16 pt-5 border-t border-white/[0.06] flex justify-between items-center">
        <span className="font-mono text-[9px] text-text-muted tracking-[0.1em] uppercase">
          the-design-lab · next.js + tailwind · built in public
        </span>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[9px] text-text-muted tracking-[0.1em] uppercase hover:text-text-secondary transition-colors"
        >
          ↗ github
        </a>
      </footer>
    </main>
  )
}
