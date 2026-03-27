import Link from 'next/link'
import XIcon from '@/components/XIcon'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/92 backdrop-blur">
      <div className="container-shell grid grid-cols-[1fr_auto_auto] items-center py-5">
        <Link href="/" className="text-left">
          <div className="text-xl font-semibold uppercase tracking-[0.18em]">Anvesan</div>
          <div className="mt-1 text-xs text-neutral-500">Stablecoin Research & Strategic Advisory</div>
        </Link>

        <nav className="hidden justify-self-end gap-8 text-sm text-neutral-600 md:flex">
          <Link href="/" className="transition hover:text-neutral-900">Home</Link>
          <Link href="/research" className="transition hover:text-neutral-900">Research</Link>
          <a href="#contact" className="transition hover:text-neutral-900">Contact</a>
        </nav>

        <a
          href="https://x.com/romeo_fardeen"
          target="_blank"
          rel="noreferrer"
          aria-label="Anvesan on X"
          className="ml-8 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900 justify-self-end"
        >
          <XIcon />
        </a>
      </div>
    </header>
  )
}
