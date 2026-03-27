import Link from 'next/link'

export default function FeaturedReport({ report }) {
  return (
    <div className="rounded-3xl border border-neutral-200 p-8 md:p-10">
      <div className="mb-4 text-sm uppercase tracking-[0.18em] text-neutral-500">Featured research</div>
      <div className="grid gap-10 md:grid-cols-12 md:items-start">
        <div className="md:col-span-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
            <span>{report.category}</span>
            <span>•</span>
            <span>{report.displayDate}</span>
            <span>•</span>
            <span>{report.pages}</span>
          </div>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-neutral-900">{report.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600">{report.summary}</p>
          <div className="mt-8">
            <Link
              href={`/research/${report.slug}`}
              className="inline-flex rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Read overview
            </Link>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="rounded-3xl bg-neutral-50 p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">Key themes</div>
            <div className="mt-5 space-y-4 text-sm leading-7 text-neutral-700">
              {report.themes.map((theme) => (
                <p key={theme}>{theme}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
