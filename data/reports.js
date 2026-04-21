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
    isLive: true,
    "reportPath": "/reports/state-of-agentic-payments-march-2026/"
  },
  {
    "title": "State of Consumer Stablecoin",
    "slug": "stablecoin-consumer-market-april-2026",
    "date": "2026-04-21",
    "displayDate": "April 2026",
    "category": "Consumer",
    "summary": "A structured view of how consumer stablecoin markets are actually forming across three functional layers: consumer spend, movement and dollar access, and access infrastructure.",
    "overview": "Stablecoin consumer markets are a layered, competitive system with clear leaders, clear dependencies, and a capital base that has made up its mind about where value accrues.",
    "themes": [
      "Consumer Market Map",
      "B2C Infra Stack",
      "Rails vs Product"
    ],
    "featured": true,
    isLive: true,
    "reportPath": "/reports/stablecoin-consumer-market-april-2026/"
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
    "featured": true,
    isLive: false,
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
