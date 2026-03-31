export const reports = [
  {
    "title": "The State of Agentic Payments",
    "slug": "state-of-agentic-payments-march-2026",
    "date": "2026-03-31",
    "displayDate": "March 2026",
    "category": "State of the Market",
    "summary": "A March 2026 briefing on what is live in agentic payments, who is leading, what the numbers say, and how the market is splitting between card-led agentic checkout and internet-native machine payments.",
    "overview": "This report argues that agentic payments are real, but maturity is uneven. The market has already split into two distinct lanes: bounded agentic checkout on card and merchant rails, and machine-native payments on internet and stablecoin rails. The first is commercially further along, while the second is architecturally cleaner and may matter more over the long run.",
    "themes": [
      "Card-led agentic checkout vs machine-native payments",
      "Trust, orchestration, and controlled delegation",
      "Stablecoin rails and internet-native payment architecture"
    ],
    "featured": true,
    "reportPath": "/reports/state-of-agentic-payments-march-2026/"
  },
  {
    "title": "Stablecoins, Regulation, and Market Structure",
    "slug": "stablecoins-regulation-and-market-structure",
    "date": "2026-04-15",
    "displayDate": "April 2026",
    "category": "Regulatory",
    "summary": "A forthcoming Anvesan briefing on how licensing, compliance, and jurisdictional fragmentation are shaping stablecoin adoption across markets.",
    "overview": "This placeholder record is ready for the next report you publish. Replace the copy and report path when the full publication is ready.",
    "themes": [
      "Licensing and compliance design",
      "Jurisdictional fragmentation",
      "Regulatory bottlenecks for adoption"
    ],
    "featured": false,
    "reportPath": "/reports/stablecoins-regulation-and-market-structure/"
  },
  {
    "title": "Enterprise Rails for Cross-Border Settlement",
    "slug": "enterprise-rails-for-cross-border-settlement",
    "date": "2026-04-20",
    "displayDate": "April 2026",
    "category": "Policy",
    "summary": "A forthcoming Anvesan note on why fintechs, neobanks, and enterprises are evaluating stablecoin-native rails for remittance, treasury movement, and trade settlement.",
    "overview": "This placeholder record is ready for the next report you publish. Replace the copy and report path when the full publication is ready.",
    "themes": [
      "Enterprise treasury flows",
      "Cross-border settlement design",
      "Stablecoin rails as operating infrastructure"
    ],
    "featured": false,
    "reportPath": "/reports/enterprise-rails-for-cross-border-settlement/"
  }
]

export function getReportBySlug(slug) {
  return reports.find((report) => report.slug === slug)
}

export function getFeaturedReports(limit = 3) {
  return reports.filter((report) => report.featured).slice(0, limit)
}

export function getSortedReports() {
  return [...reports].sort((a, b) => new Date(b.date) - new Date(a.date))
}
