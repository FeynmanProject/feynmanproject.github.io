import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
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
  description:
    "Feynman Project adalah inisiatif pembelajaran matematika yang berfokus pada pemahaman konsep secara mendalam. Kami menghadirkan materi, latihan, dan penjelasan yang dirancang agar matematika tidak hanya dapat dihitung, tapi benar-benar dipahami.",
  icons: {
    icon: "/favicon.png", // pastikan file ini ada di /public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        <Head>
          {/* CDN Remix Icon tetap disisipkan */}
          <link
            href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
            rel="stylesheet"
          />
        </Head>
        {children}
      </body>
    </html>
  );
}
