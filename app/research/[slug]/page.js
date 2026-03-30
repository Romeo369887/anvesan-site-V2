import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getReportBySlug, reports } from '@/data/reports'

export function generateStaticParams() {
  return reports.map((report) => ({ slug: report.slug }))
}

export function generateMetadata({ params }) {
  const report = getReportBySlug(params.slug)
  if (!report) {
    return { title: 'Report | Anvesan' }
  }
  return {
    title: `${report.title} | Anvesan`,
    description: report.summary,
  }
}

export default function ReportPage({ params }) {
  const report = getReportBySlug(params.slug)

  if (!report) {
    notFound()
  }

  const liveReportAvailable = report.slug === 'state-of-agentic-payments-march-2026'

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />

      <main>
        <section className="container-shell py-12 md:py-16">
          <Link href="/research" className="text-sm text-neutral-500 transition hover:text-neutral-900">
            ← Back to research
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                <span>{report.category}</span>
                <span>•</span>
                <span>{report.displayDate}</span>
                <span>•</span>
                <span>{report.pages}</span>
              </div>

              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl md:leading-[1.05]">
                {report.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">{report.summary}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="#read-report"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-neutral-300 px-6 py-3 text-center text-sm font-medium text-neutral-900 transition hover:border-neutral-900"
              >
                Access full report
              </a>
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-200">
          <div className="container-shell grid gap-10 py-16 md:grid-cols-12">
            <div className="md:col-span-3">
              <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">Overview</div>
            </div>
            <div className="md:col-span-9">
              <p className="max-w-4xl text-lg leading-9 text-neutral-800">{report.overview}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-200">
          <div className="container-shell py-16">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-neutral-200 p-8">
                <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">Key themes</div>
               <ul className="mt-6 list-disc space-y-4 pl-5 text-sm leading-7 text-neutral-700">
  {report.themes.map((theme) => (
    <li key={theme}>{theme}</li>
  ))}
</ul>
              </div>

              <div className="rounded-3xl bg-neutral-900 p-8 text-white">
                <div className="text-sm uppercase tracking-[0.18em] text-neutral-400">Anvesan Publication</div>
                <h2 className="mt-3 text-2xl font-semibold">Agentic Payment Stack</h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-neutral-300">
                  Access the complete analysis on agentic payments, market structure, and the emerging stablecoin stack.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="read-report" className="border-t border-neutral-200 bg-neutral-50">
          <div className="container-shell py-12">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">Report</div>
                <h2 className="mt-2 text-2xl font-semibold">Read report</h2>
              </div>
              <a
  href={report.reportPath}
  target="_blank"
  rel="noreferrer"
  className="inline-flex rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-900"
>
  Access full report
</a>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              {liveReportAvailable ? (
                <iframe
                  title={report.title}
                  src={report.reportPath}
                  className="h-[1200px] w-full border-0"
                />
              ) : (
                <div className="flex min-h-[500px] items-center justify-center px-8 py-16 text-center">
                  <div className="max-w-xl">
                    <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">Publication pending</div>
                    <h3 className="mt-3 text-2xl font-semibold text-neutral-900">This report page is ready.</h3>
                    <p className="mt-4 text-base leading-8 text-neutral-600">
                      Add the report file to the matching public reports folder and this page will display it here automatically.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
