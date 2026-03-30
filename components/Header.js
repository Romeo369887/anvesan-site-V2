import Link from 'next/link'
import XIcon from '@/components/XIcon'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/25 bg-white/20 backdrop-blur-2xl"
      <div className="container-shell grid grid-cols-[1fr_auto_auto] items-center py-5">
        <Link href="/" className="flex items-center gap-4 text-left">
  <div className="flex items-center gap-[10px]">
    <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[8px] bg-neutral-900 text-[19px] font-extrabold tracking-[-0.04em] text-white">
      A
    </div>
    <div>
      <div className="text-[16px] font-bold tracking-[-0.03em] text-neutral-900">
        Anvesan
      </div>
      <div className="mt-[2px] text-[8px] uppercase tracking-[0.16em] text-neutral-500">
        Stablecoin Think Tank
      </div>
    </div>
  </div>
</Link>

        <nav className="hidden justify-self-end gap-8 text-sm text-neutral-600 md:flex">
          <Link href="/" className="glass-nav-link text-sm">Home</Link>
          <Link href="/research" className="glass-nav-link text-sm">Research</Link>
          <Link href="/#contact" className="glass-nav-link text-sm">Contact</Link>
        </nav>

        <a
          href="https://x.com/anvesanorg"
          target="_blank"
          rel="noreferrer"
          aria-label="Anvesan on X"
          className="glass-nav-link ml-8 h-10 w-10 p-0 justify-self-end"
        >
          <XIcon className="h-5 w-5" />
        </a>
      </div>
    </header>
  )
}
