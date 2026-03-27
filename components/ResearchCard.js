import Link from 'next/link'

export default function ResearchCard({ report }) {
  return (
    <article className="rounded-3xl border border-neutral-200 p-8 flex h-full flex-col">
      <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
        <span>{report.category}</span>
        <span>•</span>
        <span>{report.displayDate}</span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold leading-tight text-neutral-900">{report.title}</h3>
      <p className="mt-4 text-sm leading-7 text-neutral-600">{report.summary}</p>
      <div className="mt-5 text-sm text-neutral-500">{report.pages}</div>
      <div className="mt-auto pt-6">
        <Link
          href={`/research/${report.slug}`}
          className="inline-flex rounded-2xl bg-neutral-900 px-5 py-3 text-center text-sm font-medium text-white transition hover:opacity-90"
        >
          Read overview
        </Link>
      </div>
    </article>
  )
}
