export function Header() {
  return (
    <header className="flex items-start justify-between mb-10">
      <div>
        <h1 className="font-display font-extrabold text-[38px] tracking-[-1.5px] leading-none text-text-primary mb-2">
          the
          <span className="text-accent font-normal">·</span>
          design
          <span className="text-accent font-normal">·</span>
          lab
        </h1>
        <p className="font-mono text-[10px] text-text-secondary tracking-[0.14em] uppercase">
          ui components · layout studies · design experiments
        </p>
      </div>

      <div className="flex items-center gap-2 pt-[6px]">
        <span
          className="w-[6px] h-[6px] rounded-full bg-accent animate-blink"
          style={{ boxShadow: '0 0 10px var(--accent)' }}
        />
        <span className="font-mono text-[10px] text-text-secondary tracking-[0.1em] uppercase">
          building in public
        </span>
      </div>
    </header>
  )
}
