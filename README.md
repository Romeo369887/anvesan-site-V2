# Anvesan Publication Site

Next.js + Tailwind website for Anvesan with:
- homepage
- research archive
- dedicated report pages
- one live self-contained HTML report embedded in the report page

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Report workflow

Put each self-contained report in:

```text
public/reports/<report-slug>/index.html
```

Then add or update its metadata in:

```text
data/reports.js
```

## Current live report

```text
/reports/state-of-agentic-payments-march-2026/
```

## Deploy

Upload this project to a new GitHub repository and import it into Vercel.
