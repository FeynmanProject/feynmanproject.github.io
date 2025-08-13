'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { DM_Serif_Display } from 'next/font/google';

const mediumWordmark = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

// ====== Button: Split Buy / Preview (as provided) ======
function SplitBuyPreviewButton({ buyLink, previewLink }: { buyLink?: string; previewLink?: string }) {
  const hasPreview = Boolean(previewLink);

  return (
    <div
      className="group inline-flex items-center rounded-full overflow-hidden bg-[#181018]
                 border border-[#8E44AD]/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_30px_rgba(0,0,0,0.35)]
                 text-[11px] sm:text-sm whitespace-nowrap flex-shrink min-w-0 max-w-full"
    >
      {/* Preview */}
      <a
        href={hasPreview ? previewLink : undefined}
        target={hasPreview ? "_blank" : undefined}
        rel={hasPreview ? "noopener noreferrer" : undefined}
        aria-disabled={!hasPreview}
        tabIndex={hasPreview ? 0 : -1}
        onClick={(e) => { if (!hasPreview) e.preventDefault(); }}
        className={[
          'relative px-2.5 py-1 sm:px-4 sm:py-2 font-semibold transition-all select-none',
          'flex items-center gap-1 sm:gap-2',
          hasPreview
            ? 'text-[#B887FF] hover:text-white hover:bg-[#8E44AD]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E44AD]'
            : 'text-gray-500 cursor-not-allowed',
        ].join(' ')}
        title={hasPreview ? 'Lihat cuplikan' : 'Preview belum tersedia'}
      >
        <i className="ri-eye-line text-xs sm:text-base" />
        <span className="sm:hidden truncate">Prev</span>
        <span className="hidden sm:inline truncate">Preview</span>
        <span className="absolute right-0 top-1/2 -translate-y-1/2 h-4 sm:h-5 w-px bg-gradient-to-b from-transparent via-[#8E44AD]/50 to-transparent opacity-60" />
      </a>

      {/* Beli */}
      <a
        href={buyLink}
        className="relative px-3 py-1 sm:px-5 sm:py-2 font-semibold text-white bg-[#7C3AED] hover:bg-[#6D2FE5] transition-all
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[#8E44AD]
                   active:scale-[0.98] flex items-center gap-1 sm:gap-2"
      >
        <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity
                         [background:radial-gradient(90px_40px_at_50%_120%,rgba(140,70,200,0.25),transparent_60%)]" />
        <i className="ri-shopping-bag-3-line text-xs sm:text-base" />
        <span className="sm:hidden truncate">Beli</span>
        <span className="hidden sm:inline truncate">Beli</span>
      </a>
    </div>
  );
}

// ——— Pricing Section (kept; visuals will be blended by background injector) ———
function PricingSection() {
  const plans = [
    {
      title: 'Bundling PDB (Pra & Pasca UTS)',
      price: 'Rp 80.000',
      struck: 'Rp 90.000',
      highlight: false,
      cta: 'https://feynmanbookstore.vercel.app/',
      includes: ['PDB Pra UTS — Rp 45.000', 'PDB Pasca UTS — Rp 45.000'],
      footnote: 'Hemat Rp 10.000',
    },
    {
      title: 'Pack Maba',
      price: 'Rp 169.000',
      struck: 'Rp 181.000',
      highlight: true,
      badge: 'Penawaran Terbaik',
      cta: 'https://feynmanbookstore.vercel.app/',
      includes: [
        'Kalkulus 1 Jilid 1 — Rp 39.500',
        'Kalkulus 1 Jilid 2 — Rp 39.500',
        'Aljabar Linear Elementer — Rp 32.000',
        'Logika & Himpunan — Rp 45.000',
        'Algoritma & Pemrograman — Rp 25.000',
      ],
      footnote: 'Hemat Rp 12.000',
    },
    {
      title: 'Bundling PDB + Kalkulus 3',
      price: 'Rp 130.000',
      struck: 'Rp 140.000',
      highlight: false,
      cta: 'https://feynmanbookstore.vercel.app/',
      includes: ['PDB (Pra + Pasca UTS) — Rp 80.000', 'Kalkulus 3 — Rp 60.000'],
      footnote: 'Hemat Rp 10.000',
    },
  ];

  const sideCardH = 'md:h-[340px] lg:h-[390px]';

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-2">Paket Bundling Hemat</h2>
        <p className="text-center text-gray-400">Pilih bundling sesuai kebutuhanmu. Harga sudah didiskon.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-10 items-start">
          {plans.map((p, i) => {
            const isCenter = i === 1;
            return (
              <div
                key={p.title}
                className={[
                  'relative rounded-2xl p-6 md:p-8 flex flex-col transition-all',
                  'shadow-[0_8px_40px_rgba(0,0,0,0.25)]',
                  isCenter
                    ? 'bg-[#1B1331] border border-[#8E44AD]/60 ring-2 ring-[#8E44AD]/40'
                    : 'bg-[#1A1A1A] border border-white/5',
                  !isCenter ? sideCardH : 'md:pb-8',
                  isCenter ? 'scale-[1.02]' : 'hover:-translate-y-1',
                ].join(' ')}
              >
                {isCenter && (p as any).badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-full bg-[#2A1A3A] text-[#D7B0FF] border border-[#8E44AD]/30">
                    {(p as any).badge}
                  </div>
                )}

                <div className="text-center mb-5 md:mb-6">
                  <div className="text-sm md:text-base font-semibold text-gray-200">{p.title}</div>
                  <div className="mt-3">
                    <div className="font-extrabold leading-none text-[34px] md:text-[42px] text-white">{p.price}</div>
                    <div className="text-[#B27575] line-through mt-2 text-base">{p.struck}</div>
                    {p.footnote && <div className="mt-2 text-xs text-[#D7B0FF]">{p.footnote}</div>}
                  </div>
                </div>

                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {p.includes.map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#3A2A53] text-[#B887FF]">
                        <i className="ri-check-line text-sm" />
                      </span>
                      <span className="text-gray-200">{line}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={p.cta}
                  className={[
                    'mt-auto w-full text-center rounded-full py-3 font-semibold transition-all',
                    isCenter ? 'bg-[#7C3AED] hover:bg-[#6D2FE5] text-white' : 'bg-[#2A2A2A] hover:bg-[#8E44AD]/25 text-gray-100',
                  ].join(' ')}
                >
                  Pilih Paket
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ====== BG URLS (samakan gaya dengan Home) ======
const BG_URLS = {
  hero: 'https://i.imgur.com/BLGWdwV.jpeg',
  search: 'https://i.imgur.com/roN93QN.jpeg',
  slider: 'https://i.imgur.com/L4kyTrq.jpeg',
  pricing: 'https://i.imgur.com/oZiejJO.jpeg',
  features: 'https://i.imgur.com/oZiejJO.jpeg',
  authors: 'https://i.imgur.com/o31xDRj.jpeg',
  testimonials: 'https://i.imgur.com/o31xDRj.jpeg',
  cta: 'https://i.imgur.com/ztbYHH4.jpeg',
  footer: 'https://i.imgur.com/roN93QN.jpeg',
} as const;

// Urutan section di Books agar background auto-inject sesuai DOM
const SECTION_ORDER: Array<keyof typeof BG_URLS> = [
  'hero',
  'search',
  'slider',
  'pricing',
  'features',
  'authors',
  'testimonials',
  'cta',
];

// type untuk kartu buku
interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  price: string;
  image: string;
  category: string;
  buyLink?: string;
  previewLink?: string;
}

export default function Books() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bookSliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const pathname = usePathname();

  // ====== AUTO-INJECT PER-SECTION BACKGROUND (copy gaya Home) ======
  useEffect(() => {
    const overlayFor = (name: keyof typeof BG_URLS): string => {
      switch (name) {
        case 'hero':
        case 'cta':
          return [
            'radial-gradient(900px 520px at 50% 35%, rgba(142,68,173,0.35), transparent 70%)',
            'radial-gradient(700px 380px at 90% 80%, rgba(165,105,189,0.18), transparent 65%)',
            'linear-gradient(180deg, rgba(4,4,6,0.88), rgba(4,4,6,0.88))',
          ].join(', ');
        case 'search':
          return [
            'radial-gradient(1200px 520px at 12% 20%, rgba(199,155,226,0.16), transparent 65%)',
            'radial-gradient(1100px 520px at 88% 80%, rgba(165,105,189,0.14), transparent 65%)',
            'linear-gradient(180deg, rgba(10,10,12,0.86), rgba(10,10,12,0.86))',
          ].join(', ');
        case 'slider':
          return [
            'radial-gradient(800px 500px at 15% 15%, rgba(142,68,173,0.28), transparent 60%)',
            'radial-gradient(900px 520px at 85% 85%, rgba(120,86,255,0.16), transparent 60%)',
            'linear-gradient(180deg, rgba(9,8,12,0.88), rgba(9,8,12,0.88))',
          ].join(', ');
        case 'pricing':
        case 'features':
          return [
            'radial-gradient(800px 500px at 50% 40%, rgba(199,155,226,0.14), transparent 70%)',
            'linear-gradient(135deg, rgba(14,12,18,0.92), rgba(13,13,13,0.92))',
          ].join(', ');
        case 'authors':
        case 'testimonials':
          return [
            'radial-gradient(900px 520px at 10% 20%, rgba(142,68,173,0.20), transparent 60%)',
            'radial-gradient(1000px 540px at 90% 80%, rgba(165,105,189,0.18), transparent 60%)',
            'radial-gradient(1100px 560px at 50% 60%, rgba(120,86,255,0.12), transparent 60%)',
            'linear-gradient(180deg, rgba(7,7,10,0.88), rgba(7,7,10,0.88))',
          ].join(', ');
        default:
          return 'linear-gradient(180deg, rgba(0,0,0,0.85), rgba(0,0,0,0.85))';
      }
    };

    const sections = Array.from(document.querySelectorAll('section'));
    SECTION_ORDER.forEach((name, idx) => {
      const url = BG_URLS[name];
      const el = sections[idx];
      if (!url || !el) return;
      if (el.querySelector('[data-fp-bg]')) return;

      el.style.position = 'relative';
      el.classList.add('overflow-hidden');

      const bg = document.createElement('div');
      bg.setAttribute('data-fp-bg', '');
      bg.className = 'fp-bg';
      bg.style.backgroundImage = `${overlayFor(name)}, url(${url})`;

      const grain = document.createElement('div');
      grain.setAttribute('data-fp-bg-grain', '');
      grain.className = 'fp-bg-grain';

      el.prepend(bg);
      el.prepend(grain);
    });

    const footer = document.querySelector('footer');
    if (footer && BG_URLS.footer && !footer.querySelector('[data-fp-bg]')) {
      footer.style.position = 'relative';
      footer.classList.add('overflow-hidden');

      const bg = document.createElement('div');
      bg.setAttribute('data-fp-bg', '');
      bg.className = 'fp-bg';
      bg.style.backgroundImage = `linear-gradient(180deg, rgba(9,8,10,0.90), rgba(9,8,10,0.90)), url(${BG_URLS.footer})`;

      const grain = document.createElement('div');
      grain.setAttribute('data-fp-bg-grain', '');
      grain.className = 'fp-bg-grain';

      footer.prepend(bg);
      footer.prepend(grain);
    }
  }, []);

  // ====== Data ======
  const books: Book[] = [
    {
      id: 1,
      title: 'Kalkulus 1 Jilid 1',
      author: 'Abdul Wahhab, Fritz Adelbertus Sitindaon, Natalius Desta Riyanto',
      description: 'Menentukan penyelesaian dari permasalahan yang berkaitan dengan Kalkulus fungsi real satu variabel seperti limit, turunan, dan integral.',
      price: 'Rp 39.500',
      image: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/09df2910d57052d7c1994f7e5a00ba22.png',
      category: 'Kalkulus',
      buyLink: 'https://feynmanbookstore.vercel.app/',
      previewLink: 'https://drive.google.com/file/d/1mg-ycVSn8EhaE7DJx_yxPkZIQjQlGLjJ/view?usp=sharing',
    },
    {
      id: 2,
      title: 'Aljabar Linear Elementer',
      author: 'Abdul Wahhab',
      description: 'Menerapkan teori dasar aljabar linier ruang Euclid, mampu menghitung perhitungan dalam persamaan linier dan matriks, aplikasi dari sistem linier, determinan, ruang vektor Euclidean, nilai eigen dan vektor eigen.',
      price: 'Rp 32.000',
      image: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/3df264044ff8ef342a62e169384b991a.png',
      category: 'ALE',
      buyLink: 'https://feynmanbookstore.vercel.app/',
      previewLink: 'https://drive.google.com/file/d/1hcht660DS_kggFWacbjmsXOzrTp1JnoF/view?usp=sharing',
    },
    {
      id: 3,
      title: 'Algoritma dan Pemrograman',
      author: 'Abdul Wahhab, Albert Wijaya',
      description: 'Menyusun algoritma dengan alur logika bersyarat dan berulang serta menggunakan array, vektor, matriks, dan fungsi secara efisien untuk menyelesaikan masalah saintifik kompleks.',
      price: 'Rp 25.000',
      image: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/8e187fa56beec5354edb3df4bb22a2f6.png',
      category: 'ALPROG',
      buyLink: 'https://feynmanbookstore.vercel.app/',
      previewLink: 'https://drive.google.com/file/d/18OQ4J-udJdIg0eeF_2s1FVK7vJkD1TOx/view?usp=sharing',
    },
    {
      id: 4,
      title: 'Persamaan Diferensial Biasa Jilid 1',
      author: 'Abdul Wahhab, Renzie Aditya',
      description: 'Menerapkan konsep dasar matematis untuk menyelesaikan berbagai masalah persamaan diferensial biasa, baik secara analitik, maupun menggunakan pendekatan deret.',
      price: 'Rp 45.000',
      image: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/c606d4d1341412a98dd748c3be25ef70.png',
      category: 'PDB',
      buyLink: 'https://feynmanbookstore.vercel.app/',
      previewLink: 'https://drive.google.com/file/d/1yBniMqPF4Fa_5Mv4SllNeOZlT-TODUs-/view?usp=sharing',
    },
    {
      id: 5,
      title: 'Kalkulus 3',
      author: 'Abdul Wahhab, Bryan Jonathan',
      description: 'Mengaitkan konsep dasar matematika yang  berhubungan dengan deret bilangan riil, integral tak wajar dan deret fungsi secara sistematis, logis, dan komprehensif sesuai dengan konsep dasar kalkulus.',
      price: 'Rp 60.000',
      image: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/e7c0cb832afcd55576b125f8212959ec.png',
      category: 'Kalkulus',
      buyLink: 'https://feynmanbookstore.vercel.app/',
      previewLink: 'https://drive.google.com/file/d/1fiKi_xEjZtZcR0N3KCFdz2sOoETwXpSb/view?usp=sharing',
    },
    {
      id: 6,
      title: 'Matematika Dasar',
      author: 'Abdul Wahhab',
      description: 'Mempelajari fungsi 1 variabel bernilai riil dan konsep kalkulus yang berkaitan dengan fungsi tersebut, seperti sistem bilangan riil, fungsi, limit, kekontinuan, turunan dan aplikasinya, integral dan aplikasinya, fungsi transenden alami dan sifat-sifatnya.',
      price: 'Rp 35.000',
      image: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/a9a31e10b72d5850e0662f4260044bd9.png',
      category: 'MatDas',
      buyLink: 'https://feynmanbookstore.vercel.app/',
      previewLink: 'https://drive.google.com/file/d/YYYY/view?usp=sharing',
    },
    {
      id: 7,
      title: 'Logika dan Himpunan',
      author: 'Albert Wijaya, Abdul Wahhab, Richard Gordon',
      description: 'Membahas topik logika proposisi, himpunan dan operasinya, predikat dan kuantifikasi, serta teknik-teknik pembuktian matematis secara runtut, logis, dan menyeluruh sebagai fondasi penting dalam memahami struktur berpikir matematika formal.',
      price: 'Rp 45.000',
      image: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/c2bc88c89234b365e974c411cb35f5fd.png',
      category: 'LDH',
      buyLink: 'https://feynmanbookstore.vercel.app/',
      previewLink: 'https://drive.google.com/file/d/YYYY/view?usp=sharing',
    },
    {
      id: 8,
      title: 'Kalkulus 1 Jilid 2',
      author: 'Abdul Wahhab, Fritz Adelbertus Sitindaon, Natalius Desta Riyanto',
      description: 'Menentukan penyelesaian dari permasalahan yang berkaitan dengan Kalkulus fungsi real satu variabel seperti limit, turunan, dan integral.',
      price: 'Rp 39.500',
      image: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/09df2910d57052d7c1994f7e5a00ba22.png',
      category: 'Kalkulus',
      buyLink: 'https://feynmanbookstore.vercel.app/',
      previewLink: 'https://drive.google.com/file/d/YYYY/view?usp=sharing',
    },
    {
      id: 9,
      title: 'Persamaan Diferensial Biasa Jilid 2',
      author: 'Abdul Wahhab, Renzie Aditya',
      description: 'Menerapkan konsep dasar matematis untuk menyelesaikan berbagai masalah persamaan diferensial biasa, baik secara analitik, maupun menggunakan pendekatan deret.',
      price: 'Rp 45.000',
      image: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/c606d4d1341412a98dd748c3be25ef70.png',
      category: 'PDB',
      buyLink: 'https://feynmanbookstore.vercel.app/',
      previewLink: 'https://drive.google.com/file/d/YYYY/view?usp=sharing',
    },
    {
      id: 10,
      title: 'Geometri Analitik',
      author: '-',
      description: '-',
      price: 'Rp *****',
      image: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/b9b7039ee591637b7cca258c95026aa0.png',
      category: 'Geolit',
      buyLink: 'https://feynmanbookstore.vercel.app/',
      previewLink: 'https://drive.google.com/file/d/YYYY/view?usp=sharing',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const uniqueCategories = ['All', ...Array.from(new Set(books.map((b) => b.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBooks = books.filter((book) => {
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    const searchWords = searchTerm.toLowerCase().split(' ').filter(Boolean);
    const matchesSearch = searchWords.every((w) =>
      book.title.toLowerCase().includes(w) ||
      book.author.toLowerCase().includes(w) ||
      book.category.toLowerCase().includes(w)
    );
    return matchesCategory && matchesSearch;
  });

  const scrollLeft = () => bookSliderRef.current?.scrollBy({ left: -800, behavior: 'smooth' });
  const scrollRight = () => bookSliderRef.current?.scrollBy({ left: 800, behavior: 'smooth' });

  const BookCard = ({ book }: { book: Book }) => (
    <div className="bg-black ring-1 ring-white/5 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 flex flex-col relative">
      <div className="w-full aspect-[832/1107] relative overflow-hidden rounded-t-2xl">
        <Image src={book.image} alt={book.title} fill className="object-cover" unoptimized />
      </div>
      <div className="flex-1 flex flex-col p-6">
        <div className="text-sm text-[#8E44AD] font-semibold mb-2">{book.category}</div>
        <h3 className="text-xl font-bold mb-2">{book.title}</h3>
        <p className="text-gray-400 text-sm mb-3">by {book.author}</p>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-4">{book.description}</p>
        <div className="mt-auto flex items-center gap-3 min-w-0">
          <span className="text-xl sm:text-2xl font-bold text-[#8E44AD] flex-shrink-0">{book.price}</span>
          <div className="ml-auto flex-shrink min-w-0 max-w-[70%] sm:max-w-none">
            <SplitBuyPreviewButton buyLink={book.buyLink} previewLink={book.previewLink} />
          </div>
        </div>
      </div>
    </div>
  );

  const testimonials = Array.from({ length: 7 }).map(() => ({ name: '-', role: '-', quote: '-' }));

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation – samakan brand dengan Home */}
      <nav className="sticky top-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-purple-500/20 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Logo Feynman" width={36} height={36} quality={100} priority className="object-contain" unoptimized />
              <div className="ml-2 flex items-center">
                <span className={`${mediumWordmark.className} text-[22px] md:text-[24px] font-normal tracking-normal leading-[1.05] pb-[0.04em] text-[#8E44AD]`}>
                  Feynman Project
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#kelas" className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${pathname === '/' ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'}`}>
              <i className="ri-graduation-cap-line text-lg"></i>
              <span>Our Classes</span>
            </Link>
            <Link href="/about" className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${pathname.startsWith('/about') ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'}`}>
              <i className="ri-information-line text-lg"></i>
              <span>About</span>
            </Link>
            <Link href="/books" className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${pathname.startsWith('/books') ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'}`}>
              <i className="ri-book-2-line text-lg"></i>
              <span>Books</span>
            </Link>
            <Link href="/social#contact" className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${pathname.startsWith('/social') ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'}`}>
              <i className="ri-contacts-line text-lg"></i>
              <span>Contact Us</span>
            </Link>
            <Link href="/social" className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${pathname.startsWith('/social') ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'}`}>
              <i className="ri-share-line text-lg"></i>
              <span className={`${mediumWordmark.className} leading-none`}>Social Media</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-2">
            <Link href="/#kelas" className="flex items-center space-x-2 py-2 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
              <i className="ri-graduation-cap-line"></i>
              <span>Our Classes</span>
            </Link>
            <Link href="/about" className="flex items-center space-x-2 py-2 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
              <i className="ri-information-line"></i>
              <span>About</span>
            </Link>
            <Link href="/books" className="flex items-center space-x-2 py-2 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
              <i className="ri-book-2-line"></i>
              <span>Books</span>
            </Link>
            <Link href="/social#contact" className="flex items-center space-x-2 py-2 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
              <i className="ri-contacts-line"></i>
              <span>Contact Us</span>
            </Link>
            <Link href="/social" className="flex items-center space-x-2 py-2 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
              <i className="ri-share-line"></i>
              <span>Social Media</span>
            </Link>
          </div>
        </div>
      </nav>

{/* Hero Section — compact */}
<section className="relative py-20 md:py-24">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h1
      className={`${mediumWordmark.className}
        text-4xl md:text-6xl font-normal tracking-tight leading-[1.15]
        mb-4 bg-gradient-to-r from-white to-[#8E44AD] bg-clip-text text-transparent`}
    >
      Koleksi Buku Kami
    </h1>

    <p className="text-lg md:text-xl text-gray-300/95 leading-relaxed">
      Buku-buku yang dirancang dengan cermat untuk menyajikan penjelasan yang jelas,
      terstruktur, dan mudah dipahami.
    </p>
  </div>
</section>


      {/* Search & Category Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative w-full mb-6">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <i className="ri-search-line text-lg" />
            </span>
            <input
              type="text"
              placeholder="Cari berdasarkan judul, penulis, atau kategori..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-full bg-[#0D0D0D] border border-[#8E44AD]/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8E44AD] transition-all duration-300"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white focus:outline-none">
                <i className="ri-close-line text-lg" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {uniqueCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  selectedCategory === category ? 'bg-[#8E44AD] text-white' : 'bg-[#2A2A2A] text-gray-300 hover:bg-[#8E44AD]/20 hover:text-[#8E44AD]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Book Slider */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#8E44AD]/15 border border-[#8E44AD]/40 text-[#EBD9FF] rounded-full px-4 py-2 text-base md:text-lg font-semibold">
              Pembelian dapat dilakukan pada tanggal 14 Agustus 2025
            </span>
          </div>

          <div className="relative">
            <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#8E44AD] hover:bg-[#7D3C98] text-white p-3 rounded-full shadow-lg">
              <i className="ri-arrow-left-line text-xl" />
            </button>
            <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#8E44AD] hover:bg-[#7D3C98] text-white p-3 rounded-full shadow-lg">
              <i className="ri-arrow-right-line text-xl" />
            </button>

            <div ref={bookSliderRef} className="flex gap-6 overflow-x-auto overflow-y-visible no-scrollbar scroll-smooth">
              {filteredBooks.length === 0 ? (
                <div className="text-center text-gray-400 text-lg py-12 w-full">Tidak ditemukan hasil yang sesuai.</div>
              ) : (
                filteredBooks.map((book) => (
                  <div key={book.id} className="min-w-[300px] max-w-sm flex-shrink-0">
                    <BookCard book={book} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Buku Kami?</h2>
            <p className="text-xl text-gray-400">Apa yang membuat buku diktat kami istimewa</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black ring-1 ring-white/5 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer">
                <i className="ri-lightbulb-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Penjelasan yang Jelas</h3>
              <p className="text-gray-400 leading-relaxed">Setiap konsep diuraikan menjadi bagian-bagian kecil yang mudah dipahami, menggunakan analogi, contoh, dan penalaran langkah demi langkah.</p>
            </div>

            <div className="bg-black ring-1 ring-white/5 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer">
                <i className="ri-user-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Aplikasi Praktis</h3>
              <p className="text-gray-400 leading-relaxed">Setiap buku dilengkapi dengan latihan soal dan penerapan dalam konteks nyata untuk memperkuat pemahaman Anda.</p>
            </div>

            <div className="bg-black ring-1 ring-white/5 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer">
                <i className="ri-award-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Tim Penyusun Terpercaya</h3>
              <p className="text-gray-400 leading-relaxed">Buku kami disusun oleh tim yang memiliki pengalaman dalam mengajar dan menyusun materi matematika secara terstruktur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Authors */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono text-white">
              <span className="block mx-auto w-fit typing-loop-15">Penulis Diktat</span>
            </h2>
            <p className="text-xl text-gray-400">Kami mengucapkan terima kasih yang sebesar-besarnya kepada para penulis buku yang telah mencurahkan waktu, tenaga, dan pemikirannya.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { src: 'https://i.imgur.com/CoKjTh2.png', name: 'Abdul Wahhab' },
              { src: 'https://i.imgur.com/LOEBfiG.png', name: 'Renzie Aditya' },
              { src: 'https://i.imgur.com/51KzRF8.png', name: 'Fritz Sitindaon' },
              { src: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/35f2486849850195865b2e960e70faa7.png', name: 'Albert Wijaya' },
              { src: 'https://i.imgur.com/NbsdjBz.png', name: 'Bryan Jonathan' },
            ].map((p) => (
              <div key={p.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Image src={p.src} alt={p.name} fill className="object-cover object-top" unoptimized />
                </div>
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className="text-[#8E44AD] mb-4">Penulis Diktat</p>
                <p className="text-gray-400 leading-relaxed">-</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono text-white">
              <span className="block mx-auto w-fit typing-loop">Kata Mereka</span>
            </h2>
            <p className="text-xl text-gray-400">Ulasan dari komunitas pembaca kami.</p>
          </div>

          <div className="overflow-hidden">
            <div
              className={`testimonial-track ${isPaused ? 'paused' : ''}`}
              onMouseEnter={() => { if (!manualPause) setIsPaused(true); }}
              onMouseLeave={() => { if (!manualPause) setIsPaused(false); }}
            >
              {[...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
                <div
                  key={idx}
                  className="min-w-[300px] max-w-sm flex-shrink-0 bg-black ring-1 ring-white/5 p-6 rounded-2xl shadow-xl cursor-pointer"
                  onClick={() => { const mp = !manualPause; setManualPause(mp); setIsPaused(mp); }}
                >
                  <div className="mb-4">
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-gray-400 text-sm">{t.role}</p>
                  </div>
                  <p className="text-gray-300 italic">&ldquo;{t.quote}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Mulai Perjalanan Belajarmu</h2>
          <p className="text-xl mb-8 opacity-90">&ldquo;Ubah cara kamu memahami dan menjelaskan konsep-konsep kompleks melalui buku-buku kami yang dirancang dengan cermat.&rdquo;</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://feynmanbookstore.vercel.app/" className="bg-white text-[#8E44AD] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
              Beli Sekarang
            </a>
            <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-[#8E44AD] px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-[#8E44AD] mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
                Feynman Project
              </div>
              <p className="text-gray-400 leading-relaxed">Belajar menjadi bermakna saat kita mampu mengajarkannya kepada orang lain.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">About Us</Link>
                <Link href="/books" className="block text-gray-400 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">Our Books</Link>
                <Link href="/social" className="block text-gray-400 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">Social Media</Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/feynmanprojects/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#8E44AD] rounded-full flex items-center justify-center hover:bg-[#7D3C98] transition-colors duration-300 cursor-pointer">
                  <i className="ri-instagram-line text-white"></i>
                </a>
                <a href="https://www.tiktok.com/@feynmanproject" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#8E44AD] rounded-full flex items-center justify-center hover:bg-[#7D3C98] transition-colors duration-300 cursor-pointer">
                  <i className="ri-tiktok-line text-white"></i>
                </a>
                <a href="https://www.youtube.com/@FeynmanProjects" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#8E44AD] rounded-full flex items-center justify-center hover:bg-[#7D3C98] transition-colors duration-300 cursor-pointer">
                  <i className="ri-youtube-line text-white"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 Feynman Project. Content is licensed under Creative Commons BY-NC-SA 4.0.</p>
          </div>
        </div>
      </footer>

<style jsx global>{`
/* bikin tiap section/footer punya konteks tumpukan sendiri */
section, footer { position: relative; isolation: isolate; }

/* layer gambar & grain jadi di belakang konten, tapi bukan negatif */
.fp-bg {
  position: absolute;
  inset: 0;
  z-index: 0;                /* <— dulu -2 */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: saturate(1.05) contrast(1.02);
  will-change: transform;
  pointer-events: none;
}
.fp-bg-grain {
  position: absolute;
  inset: 0;
  z-index: 1;                /* sedikit di atas gambar */
  opacity: 0.07;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.4'/></svg>");
  background-size: 200px 200px;
  pointer-events: none;
}

/* pastikan semua konten section berada di atas kedua layer tadi */
section > *:not([data-fp-bg]):not([data-fp-bg-grain]),
footer  > *:not([data-fp-bg]):not([data-fp-bg-grain]) {
  position: relative;
  z-index: 2;
}
`}</style>
      
    </div>
  );
}
