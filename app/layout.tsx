import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Feynman Project",
  description: "Dari rumit ke simpel — belajar matematika dengan cara yang masuk akal",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {/* ✅ Tambahkan navbar di sini */}
        <nav className="sticky top-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-2xl font-bold text-[#8E44AD]">Feynman Project</Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/about" className="hover:text-[#8E44AD]">About</Link>
                <Link href="/books" className="hover:text-[#8E44AD]">Books</Link>
                <Link href="/social" className="hover:text-[#8E44AD]">Social Media</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* ✅ Konten halaman */}
        {children}
      </body>
    </html>
  );
}
