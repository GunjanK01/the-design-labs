'use client'

import { cn } from '@/lib/utils'

export type FilterValue = 'all' | 'hero' | 'card' | 'nav' | 'btn' | 'anim' | 'archive'

const filters: { value: FilterValue; label: string }[] = [
  { value: 'all',     label: 'all' },
  { value: 'hero',    label: 'heroes' },
  { value: 'card',    label: 'cards' },
  { value: 'nav',     label: 'navbars' },
  { value: 'btn',     label: 'buttons' },
  { value: 'anim',    label: 'animations' },
  { value: 'archive', label: 'archive' },
]

interface FilterBarProps {
  active: FilterValue
  onChange: (value: FilterValue) => void
}

export function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-[6px] mb-7">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={cn(
            'font-mono text-[10px] tracking-[0.08em] lowercase',
            'px-[13px] py-[5px] rounded-full border',
            'transition-all duration-150 outline-none cursor-pointer',
            active === f.value
              ? f.value === 'archive'
                ? 'bg-accent2 border-accent2 text-bg font-bold'
                : 'bg-accent border-accent text-bg font-bold'
              : 'border-white/[0.06] bg-transparent text-text-secondary hover:border-white/[0.12] hover:text-text-primary',
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
