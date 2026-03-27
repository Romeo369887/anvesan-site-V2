import './globals.css'

export const metadata = {
  title: 'Anvesan',
  description: 'Stablecoin research and strategic advisory.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">{children}</body>
    </html>
  )
}
