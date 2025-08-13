import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // ✅ Tambahkan Script

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
  title: "Feynman Project - Official Website",
  description:
    "Feynman Project adalah platform edukasi matematika resmi yang menghadirkan video pembelajaran, buku diktat, dan materi belajar untuk membantu mahasiswa memahami konsep matematika secara mendalam. Kunjungi situs resmi kami untuk informasi lengkap.",
  icons: {
    icon: [
    { url: "https://i.imgur.com/KZJ1pbu.png?v=2", sizes: "32x32", type: "image/png" },
    { url: "https://i.imgur.com/KZJ1pbu.png?v=2", sizes: "16x16", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* ✅ Meta verifikasi Google */}
        <meta
          name="google-site-verification"
          content="4gh9t54IWxNFdoN8S2fkKqBYT_BfPDCiw11rFFaBRJI"
        />

        {/* ✅ CDN Remix Icon */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />

        {/* ✅ JSON-LD WebSite Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://feynmanproject.vercel.app/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://feynmanproject.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* ✅ JSON-LD Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Feynman Project",
              "url": "https://feynmanproject.vercel.app/",
              "logo": "https://feynmanproject.vercel.app/logo.png",
              "sameAs": [
                "https://www.instagram.com/feynmanprojects",
                "https://www.youtube.com/@FeynmanProjects",
                "https://www.linkedin.com/company/feynmanproject"
              ]
            })
          }}
        />

        {/* ✅ Crisp Chat Script */}
        <Script
          id="crisp-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp = [];
              window.CRISP_WEBSITE_ID = "adbe9b27-636f-4f70-ad2e-2aefe569607e";
              (function () {
                var d = document;
                var s = d.createElement("script");
                s.src = "https://client.crisp.chat/l.js";
                s.async = 1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
