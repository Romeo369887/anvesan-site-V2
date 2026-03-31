import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ResearchCard from '@/components/ResearchCard'
import { getFeaturedReports } from '@/data/reports'

const focusAreas = [
  {
    title: 'Technical',
    text: 'Payments infrastructure, settlement architecture, wallet design, interoperability, and the systems that make stablecoins usable at scale.',
  },
  {
    title: 'Regulatory',
    text: 'Licensing, compliance design, legal frameworks, and the operational specifics of building with stablecoin rails across jurisdictions.',
  },
  {
    title: 'Policy',
    text: 'How governments, financial institutions, and market participants shape the role of stablecoins in the future of money and cross-border finance.',
  },
]

export default function HomePage() {
  const featuredReports = getFeaturedReports(3)

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />

      <main>
        <section className="container-shell py-24 md:py-32">
          <div className="max-w-3xl space-y-8">
            <div className="text-xs uppercase tracking-[0.22em] text-neutral-500">Stablecoin Research & Strategic Advisory</div>
            <div>
              <h1 className="text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl md:leading-[1.05]">
                Bringing Clarity to Stablecoins.
              </h1>
              <p className="mt-4 text-xl font-medium text-neutral-500 md:text-3xl">
                Technical. Regulatory. Policy.
              </p>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-neutral-600">
              Anvesan researches the infrastructure, regulation, and market structure shaping the global adoption of stablecoins across payments, banking, and enterprise finance.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
                Get in touch
              </a>
              <a
  href="/#featured-research"
  className="hidden rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-900 md:inline-flex"
>
  Our research
</a>
            </div>
          </div>
        </section>

        <section id="mission" className="border-t border-neutral-200">
          <div className="container-shell grid gap-10 py-20 md:grid-cols-12">
            <div className="md:col-span-3">
              <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">Mission</div>
            </div>
            <div className="md:col-span-9">
              <p className="max-w-4xl text-xl leading-9 text-neutral-800">
                Anvesan exists to accelerate the adoption of stablecoins to the point where stablecoins become indistinguishable from money: ubiquitous, interoperable, and invisible in everyday use. We believe the future of finance is one where financial transactions such as remittance, trade settlement, and FX happen instantly, seamlessly, and across borders with minimal friction.
              </p>
              <p className="max-w-4xl text-xl leading-9 text-neutral-800">
                Anvesan aims to work closely with fintechs, neobanks, and enterprises building on stablecoin rails, offering regulatory clarity, market intelligence, and access to a network of industry veterans.
              </p>
            </div>
          </div>
        </section>

        <section id="focus" className="border-t border-neutral-200">
          <div className="container-shell py-20">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">Research Focus</div>
              <h2 className="mt-3 text-3xl font-semibold">What Anvesan studies</h2>
              <p className="mt-4 text-base leading-8 text-neutral-600">
                Anvesan publishes focused research on stablecoin infrastructure, regulation, and policy. Each paper is designed for fintech operators, enterprises, policymakers, and market participants building on stablecoin rails.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200 md:grid-cols-3">
              {focusAreas.map((item) => (
                <div key={item.title} className="bg-white p-8">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{item.text}</p>
                </div>
              ))}
            </div>

            <div id="featured-research" className="mt-16">
              <div className="flex items-end justify-between gap-6">
                <div className="max-w-3xl">
                  <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">Research</div>
                  <h2 className="mt-3 text-3xl font-semibold">Featured research</h2>
                  <p className="mt-4 text-base leading-8 text-neutral-600">
                    Selected briefings from the Anvesan research archive.
                  </p>
                </div>

                <Link
                  href="/research"
                  className="hidden rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-900 md:inline-flex"
                >
                  View all research
                </Link>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {featuredReports.map((report) => (
                  <ResearchCard key={report.slug} report={report} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-200">
          <div className="container-shell py-20">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-neutral-200 p-8">
                <div className="text-sm uppercase tracking-[0.18em] text-neutral-500">What Anvesan offers</div>
                <h2 className="mt-3 text-2xl font-semibold">Research, insight, and strategic access</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  Anvesan helps fintechs, neobanks, and enterprises understand stablecoin infrastructure, navigate regulation, and make better strategic decisions through focused research, market intelligence, and access to experienced operators across the industry.
                </p>
              </div>

              <div id="contact" className="rounded-3xl bg-neutral-900 p-8 text-white">
                <div className="text-sm uppercase tracking-[0.18em] text-neutral-400">Contact</div>
                <h2 className="mt-3 text-2xl font-semibold">Let’s talk</h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-neutral-300">
                  For research partnerships, strategic advisory, or media inquiries.
                </p>
                <div className="mt-6 text-sm text-neutral-100">research@anvesan.org</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
