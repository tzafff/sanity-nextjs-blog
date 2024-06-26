import '../../../../styles/globals.css'
export const metadata = {
  title: 'The Blog',
  description: 'My Personal Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
