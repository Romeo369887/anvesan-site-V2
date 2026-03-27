import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ResearchListItem from '@/components/ResearchListItem'
import { getSortedReports } from '@/data/reports'

export const metadata = {
  title: 'Research | Anvesan',
}

export default function ResearchPage() {
  const reports = getSortedReports()

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />

      <main>
        <section className="container-shell py-20 md:py-24">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">Research</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] md:text-6xl md:leading-[1.05]">
              Research archive
            </h1>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Anvesan publishes concise research briefings on stablecoin infrastructure, regulation, and policy. Browse all available reports below, ordered by publication date.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {reports.map((report) => (
              <ResearchListItem key={report.slug} report={report} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
