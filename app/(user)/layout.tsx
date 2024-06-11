import Header from '@/components/Header'
import '../../styles/globals.css'
import Banner from '@/components/Banner';

export const metadata = {
  title: 'Blog3',
  description: 'Tzaff Web3 Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto bg-blue-100">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
