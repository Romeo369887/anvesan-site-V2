import Link from 'next/link'

export default function ResearchListItem({ report }) {
  return (
    <article className="rounded-3xl border border-neutral-200 p-8 md:p-10">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
            <span>{report.category}</span>
            <span>•</span>
            <span>{report.displayDate}</span>
            <span>•</span>
            <span>{report.pages}</span>
          </div>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-neutral-900">{report.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600">{report.summary}</p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
  {report.isLive ? (
    <Link
      href={`/research/${report.slug}`}
      className="glass-button-dark w-full px-6 py-3 text-center text-sm font-medium md:w-auto"
    >
      Read overview
    </Link>
  ) : (
    <span className="glass-button w-full px-6 py-3 text-center text-sm font-medium opacity-60 cursor-default md:w-auto">
      Coming soon
    </span>
  )}
</div>
      </div>
    </article>
  )
}
