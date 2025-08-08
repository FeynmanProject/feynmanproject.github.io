
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { useRef } from 'react';
import { usePathname } from 'next/navigation';

// ——— Pricing Section (styled mirip gambar) ———
function PricingSection() {
  const plans = [
    {
      title: 'Bundling PDB (Pra & Pasca UTS)',
      price: 'Rp 90.000',
      struck: 'Rp 100.000',
      highlight: false,
      cta: 'https://feynmanbookstore.vercel.app/',
      includes: ['PDB Pra UTS — Rp 50.000', 'PDB Pasca UTS — Rp 50.000'],
      footnote: 'Hemat Rp 10.000',
    },
    {
      title: 'Pack Maba',
      price: 'Rp 190.000',
      struck: 'Rp 225.000',
      highlight: true,
      badge: 'PENAWARAN TERBAIK!',
      cta: 'https://feynmanbookstore.vercel.app/',
      includes: [
        'Kalkulus 1 Jilid 1 — Rp 50.000',
        'Kalkulus 1 Jilid 2 — Rp 50.000',
        'Aljabar Linear Elementer — Rp 45.000',
        'Logika & Himpunan — Rp 50.000',
        'Algoritma & Pemrograman — Rp 30.000',
      ],
      footnote: 'Hemat Rp 35.000',
    },
    {
      title: 'Bundling PDB + Kalkulus 3',
      price: 'Rp 140.000',
      struck: 'Rp 160.000',
      highlight: false,
      cta: 'https://feynmanbookstore.vercel.app/',
      includes: ['PDB (Pra + Pasca UTS) — Rp 100.000', 'Kalkulus 3 — Rp 60.000'],
      footnote: 'Hemat Rp 20.000',
    },
  ];

  // kiri/kanan dikunci tingginya, tengah bebas
  const sideCardH = 'md:h-[340px] lg:h-[390px]';

  return (
    <section className="py-16 md:py-20 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-2">
          Paket Bundling Hemat
        </h2>
        <p className="text-center text-gray-400">
          Pilih bundling sesuai kebutuhanmu. Harga sudah didiskon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-10 items-start">
          {plans.map((p, i) => {
            const isCenter = i === 1;

            return (
              <div
                key={p.title}
                className={[
                  // card shell
                  'relative rounded-2xl p-6 md:p-8 flex flex-col transition-all',
                  'shadow-[0_8px_40px_rgba(0,0,0,0.25)]',
                  isCenter
                    ? 'bg-[#1B1331] border border-[#8E44AD]/60 ring-2 ring-[#8E44AD]/40'
                    : 'bg-[#1A1A1A] border border-white/5',
                  !isCenter ? sideCardH : 'md:pb-8',
                  isCenter ? 'scale-[1.02]' : 'hover:-translate-y-1',
                ].join(' ')}
              >
                {/* Badge bar (tengah saja) */}
                {isCenter && p.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-full bg-[#2A1A3A] text-[#D7B0FF] border border-[#8E44AD]/30">
                    {p.badge}
                  </div>
                )}

                {/* Header & price */}
                <div className="text-center mb-5 md:mb-6">
                  <div className="text-sm md:text-base font-semibold text-gray-200">
                    {p.title}
                  </div>

                  <div className="mt-3">
                    <div
                      className={[
                        'font-extrabold leading-none',
                        'text-[34px] md:text-[42px]',
                        isCenter ? 'text-white' : 'text-white',
                      ].join(' ')}
                    >
                      {p.price}
                    </div>
                    <div className="text-[#B27575] line-through mt-2 text-base">
                      {p.struck}
                    </div>
                    {p.footnote && (
                      <div className="mt-2 text-xs text-[#D7B0FF]">{p.footnote}</div>
                    )}
                  </div>
                </div>

                {/* Features list */}
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

                {/* CTA */}
                <a
                  href={p.cta}
                  className={[
                    'mt-auto w-full text-center rounded-full py-3 font-semibold transition-all',
                    isCenter
                      ? 'bg-[#7C3AED] hover:bg-[#6D2FE5] text-white'
                      : 'bg-[#2A2A2A] hover:bg-[#8E44AD]/25 text-gray-100',
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




export default function Books() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bookSliderRef = useRef<HTMLDivElement>(null);
  // State untuk kontrol pause testimonial
  const [isPaused, setIsPaused] = useState(false);
  const [manualPause, setManualPause] = useState(false);

  const pathname = usePathname();


  // ✅ Fungsi scrollLeft dan scrollRight untuk tombol buku
  const scrollLeft = () => {
    if (bookSliderRef.current) {
      bookSliderRef.current.scrollBy({ left: -800, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (bookSliderRef.current) {
      bookSliderRef.current.scrollBy({ left: 800, behavior: 'smooth' });
    }
  };

  const books = [
    {
      id: 1,
      title: "Kalkulus 1",
      author: "Abdul Wahhab, Fritz Adelbertus Sitindaon, Natalius Desta Riyanto",
      description: "Menentukan penyelesaian dari permasalahan yang berkaitan dengan Kalkulus fungsi real satu variabel seperti limit, turunan, dan integral.",
      price: "Rp 50.000",
      image: "https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/09df2910d57052d7c1994f7e5a00ba22.png",
      category: "Kalkulus",
      buyLink: "https://feynmanbookstore.vercel.app/"
    },
    {
      id: 2,
      title: "Aljabar Linear Elementer",
      author: "Abdul Wahhab",
      description: "Menerapkan teori dasar aljabar linier ruang Euclid, mampu menghitung perhitungan dalam persamaan linier dan matriks, aplikasi dari sistem linier, determinan, ruang vektor Euclidean, nilai eigen dan vektor eigen.",
      price: "Rp 50.000",
      image: "https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/3df264044ff8ef342a62e169384b991a.png",
      category: "ALE",
      buyLink: "https://feynmanbookstore.vercel.app/"
    },
    {
      id: 3,
      title: "Algoritma dan Pemrograman",
      author: "Abdul Wahhab, Albert Wijaya",
      description: "Menyusun algoritma dengan alur logika bersyarat dan berulang serta menggunakan array, vektor, matriks, dan fungsi secara efisien untuk menyelesaikan masalah saintifik kompleks.",
      price: "Rp 60.000",
      image: "https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/8e187fa56beec5354edb3df4bb22a2f6.png",
      category: "ALPROG",
      buyLink: "https://feynmanbookstore.vercel.app/"
    },
    {
      id: 4,
      title: "Persamaan Diferensial Biasa",
      author: "Abdul Wahhab, Renzie Aditya",
      description: "Menerapkan konsep dasar matematis untuk menyelesaikan berbagai masalah persamaan diferensial biasa, baik secara analitik, maupun menggunakan pendekatan deret.",
      price: "Rp 60.000",
      image: "https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/c606d4d1341412a98dd748c3be25ef70.png",
      category: "PDB",
      buyLink: "https://feynmanbookstore.vercel.app/"
    },
    {
      id: 5,
      title: "Kalkulus 3",
      author: "Abdul Wahhab, Bryan Jonathan",
      description: "Mengaitkan konsep dasar matematika yang  berhubungan dengan deret bilangan riil, integral tak wajar dan deret fungsi secara sistematis, logis, dan komprehensif sesuai dengan konsep dasar kalkulus.",
      price: "Rp 65.000",
      image: "https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/e7c0cb832afcd55576b125f8212959ec.png",
      category: "Kalkulus",
      buyLink: "https://feynmanbookstore.vercel.app/"
    },
    {
      id: 6,
      title: "Matematika Dasar",
      author: "Abdul Wahhab",
      description: "Mempelajari fungsi 1 variabel bernilai riil dan konsep kalkulus yang berkaitan dengan fungsi tersebut, seperti sistem bilangan riil, fungsi, limit, kekontinuan, turunan dan aplikasinya, integral dan aplikasinya, fungsi transenden alami dan sifat-sifatnya.",
      price: "Rp 50.000",
      image: "https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/a9a31e10b72d5850e0662f4260044bd9.png",
      category: "MatDas",
      buyLink: "https://feynmanbookstore.vercel.app/"
    },
    {
      id: 7,
      title: "Logika dan Himpunan",
      author: "Albert Wijaya, Abdul Wahhab, Richard Gordon",
      description: "Membahas topik logika proposisi, himpunan dan operasinya, predikat dan kuantifikasi, serta teknik-teknik pembuktian matematis secara runtut, logis, dan menyeluruh sebagai fondasi penting dalam memahami struktur berpikir matematika formal.",
      price: "Rp 60.000",
      image: "https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/c2bc88c89234b365e974c411cb35f5fd.png",
      category: "LDH",
      buyLink: "https://feynmanbookstore.vercel.app/"
    },
    {
      id: 8,
      title: "Matematika Diskrit",
      author: "-",
      description: "-",
      price: "Rp *****",
      image: "https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/b9b7039ee591637b7cca258c95026aa0.png",
      category: "Matdis",
      buyLink: "https://feynmanbookstore.vercel.app/"
    },
    {
      id: 9,
      title: "Analisis 1",
      author: "-",
      description: "-",
      price: "Rp ****",
      image: "https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/b9b7039ee591637b7cca258c95026aa0.png",
      category: "Analisis Riil",
      buyLink: "https://feynmanbookstore.vercel.app/"    
    },
    {
      id: 10,
      title: "Geometri Analitik",
      author: "-",
      description: "-",
      price: "Rp *****",
      image: "https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/b9b7039ee591637b7cca258c95026aa0.png",
      category: "Geolit",
      buyLink: "https://feynmanbookstore.vercel.app/"
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const uniqueCategories = ["All", ...Array.from(new Set(books.map(book => book.category)))];
  const [selectedCategory, setSelectedCategory] = useState("All");
  
    interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    price: string;
    image: string;
    category: string;
    buyLink?: string;
  }

  const filteredBooks = books.filter((book) => {
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    const searchWords = searchTerm.toLowerCase().split(" ").filter(Boolean);
    const matchesSearch = searchWords.every(word =>
      book.title.toLowerCase().includes(word) ||
      book.author.toLowerCase().includes(word) ||
      book.category.toLowerCase().includes(word)
    );

    return matchesCategory && matchesSearch;
  });

  
const BookCard = ({ book }: { book: Book }) => (
  <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col">
    <div className="w-full aspect-[832/1107] relative">
      <Image
        src={book.image}
        alt={book.title}
        fill
        className="object-cover rounded-t-2xl"
        unoptimized
      />
    </div>
    <div className="flex-1 flex flex-col p-6">
      <div className="text-sm text-[#8E44AD] font-semibold mb-2">{book.category}</div>
      <h3 className="text-xl font-bold mb-2">{book.title}</h3>
      <p className="text-gray-400 text-sm mb-3">by {book.author}</p>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-4">{book.description}</p>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-2xl font-bold text-[#8E44AD]">{book.price}</span>
        <a
          href={book.buyLink}
          className="bg-[#8E44AD] hover:bg-[#7D3C98] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
        >
          Beli Sekarang
        </a>
      </div>
    </div>
  </div>
);


const testimonials = [
  {
    name: "-",
    role: "-",
    quote: "-",
  },
  {
    name: "-",
    role: "-",
    quote: "-",
  },
  {
    name: "-",
    role: "-",
    quote: "-",
  },
  {
    name: "-",
    role: "-",
    quote: "-",
  },
  {
    name: "-",
    role: "-",
    quote: "-",
  },
  {
    name: "-",
    role: "-",
    quote: "-",
  },
  {
    name: "-",
    role: "-",
    quote: "-",
  },
];

  
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-purple-500/20 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">

            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logo.png" // pastikan nama sesuai dan ada di /public
                alt="Logo Feynman"
                width={36}
                height={36}
                quality={100} // kualitas maksimum
                priority // supaya dimuat segera
                className="object-contain"
                unoptimized
              />
              <div className="ml-2 flex items-center">
                <span className="text-xl font-bold text-[#8E44AD] font-sans leading-none tracking-wide">
                  Feynman Project
                </span>
              </div>
            </Link>
          </div>
            
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#kelas"
              className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${
                pathname === '/' ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'
              }`}
            >
              <i className="ri-graduation-cap-line text-lg"></i>
              <span>Our Classes</span>
            </Link>
            <Link
              href="/about"
              className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${
                pathname.startsWith('/about') ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'
              }`}
            >
              <i className="ri-information-line text-lg"></i>
              <span>About</span>
            </Link>
            <Link
              href="/books"
              className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${
                pathname.startsWith('/books') ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'
              }`}
            >
              <i className="ri-book-2-line text-lg"></i>
              <span>Books</span>
            </Link>
            <Link
              href="/social#contact"
              className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${
                pathname.startsWith('/social') ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'
              }`}
            >
              <i className="ri-contacts-line text-lg"></i>
              <span>Contact Us</span>
            </Link>
            <Link
              href="/social"
              className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${
                pathname.startsWith('/social') ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'
              }`}
            >
              <i className="ri-share-line text-lg"></i>
              <span>Social Media</span>
            </Link>
          </div>

          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>
          

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
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

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0D0D0D] via-[#1A0D1A] to-[#0D0D0D]">
        <div className="absolute inset-0 bg-[url('https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/4e022c79b031d0b30a9e1786362ee671.jfif')] bg-cover bg-center opacity-15')] bg-cover bg-center opacity-15"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#8E44AD] bg-clip-text text-transparent">
            Koleksi Buku Kami
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
            Buku-buku yang dirancang dengan cermat untuk menyajikan penjelasan yang jelas, terstruktur, dan mudah dipahami.
          </p>
          <div className="bg-[#8E44AD]/10 border border-[#8E44AD]/30 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg text-gray-300">
              Setiap buku dirancang untuk membantu Anda belajar mandiri dengan penjelasan runtut, materi lengkap, dan pembahasan soal.
            </p>
          </div>
        </div>
      </section>

<section className="py-12 bg-[#1A1A1A]">
  <div className="max-w-6xl mx-auto px-4">

    {/* Search Bar di atas kategori */}
<div className="relative w-full mb-6">
  <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
    <i className="ri-search-line text-lg" />
  </span>

  {/* Input search */}
  <input
    type="text"
    placeholder="Cari berdasarkan judul, penulis, atau kategori..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full pl-10 pr-10 py-3 rounded-full bg-[#0D0D0D] border border-[#8E44AD]/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8E44AD] transition-all duration-300"
  />

  {/* Tombol clear muncul hanya saat searchTerm tidak kosong */}
  {searchTerm && (
    <button
      onClick={() => setSearchTerm("")}
      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white focus:outline-none"
    >
      <i className="ri-close-line text-lg" />
    </button>
  )}
</div>



    {/* Kategori di bawah search */}
    <div className="flex flex-wrap justify-center gap-4">
      {uniqueCategories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
            selectedCategory === category
              ? 'bg-[#8E44AD] text-white'
              : 'bg-[#2A2A2A] text-gray-300 hover:bg-[#8E44AD]/20 hover:text-[#8E44AD]'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  </div>
</section>


      
      

      {/* Book Slider */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto px-4 relative">
          {/* Tombol kiri */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#8E44AD] hover:bg-[#7D3C98] text-white p-3 rounded-full shadow-lg"
          >
            <i className="ri-arrow-left-line text-xl" />
          </button>

          {/* Tombol kanan */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#8E44AD] hover:bg-[#7D3C98] text-white p-3 rounded-full shadow-lg"
          >
            <i className="ri-arrow-right-line text-xl" />
          </button>

          <div
            ref={bookSliderRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
          >

            {filteredBooks.length === 0 ? (
              <div className="text-center text-gray-400 text-lg py-12 w-full">
                Tidak ditemukan hasil yang sesuai.
              </div>
            ) : (
              filteredBooks.map((book) => (
                <div key={book.id} className="min-w-[300px] max-w-sm flex-shrink-0">
                  <BookCard book={book} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

<PricingSection />

      {/* Features Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Buku Kami?</h2>
            <p className="text-xl text-gray-400">Apa yang membuat buku diktat kami istimewa</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer">
                <i className="ri-lightbulb-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Penjelasan yang Jelas</h3>
              <p className="text-gray-400 leading-relaxed">
                Setiap konsep diuraikan menjadi bagian-bagian kecil yang mudah dipahami, menggunakan analogi, contoh, dan penalaran langkah demi langkah.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer">
                <i className="ri-user-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Aplikasi Praktis</h3>
              <p className="text-gray-400 leading-relaxed">
                Setiap buku dilengkapi dengan latihan soal dan penerapan dalam konteks nyata untuk memperkuat pemahaman Anda.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer">
                <i className="ri-award-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Tim Penyusun Terpercaya</h3>
              <p className="text-gray-400 leading-relaxed">
                Buku kami disusun oleh tim yang memiliki pengalaman dalam mengajar dan menyusun materi matematika secara terstruktur.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Testimonials Section */}
<section className="py-20 bg-gradient-to-r from-[#0D0D0D] to-[#1A0D1A]">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono text-white">
        <span className="block mx-auto w-fit typing-loop">
          Kata Mereka
        </span>
      </h2>
      <p className="text-xl text-gray-400">Ulasan dari komunitas pembaca kami.</p>
    </div>

    <div className="overflow-hidden">
      <div
        className={`testimonial-track ${isPaused ? "paused" : ""}`}
        onMouseEnter={() => {
          if (!manualPause) setIsPaused(true);
        }}
        onMouseLeave={() => {
          if (!manualPause) setIsPaused(false);
        }}
      >
        {[...testimonials, ...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-sm flex-shrink-0 bg-[#2A2A2A] p-6 rounded-2xl shadow-xl cursor-pointer"
            onClick={() => {
              const newManualPause = !manualPause;
              setManualPause(newManualPause);
              setIsPaused(newManualPause);
            }}
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


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#8E44AD] to-[#A569BD]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Mulai Perjalanan Belajarmu</h2>
          <p className="text-xl mb-8 opacity-90">
            &ldquo;Ubah cara kamu memahami dan menjelaskan konsep-konsep kompleks melalui buku-buku kami yang dirancang dengan cermat.&rdquo;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://feynmanbookstore.vercel.app/" 
              className="bg-white text-[#8E44AD] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Beli Sekarang
            </a>
            <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-[#8E44AD] px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D0D0D] py-12 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-[#8E44AD] mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
                Feynman Project
              </div>
              <p className="text-gray-400 leading-relaxed">
                Belajar menjadi bermakna saat kita mampu mengajarkannya kepada orang lain.
              </p>
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
                <a 
                  href="https://www.instagram.com/feynmanprojects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#8E44AD] rounded-full flex items-center justify-center hover:bg-[#7D3C98] transition-colors duration-300 cursor-pointer"
                >
                  <i className="ri-instagram-line text-white"></i>
                </a>
                <a 
                  href="https://www.tiktok.com/@feynmanproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#8E44AD] rounded-full flex items-center justify-center hover:bg-[#7D3C98] transition-colors duration-300 cursor-pointer"
                >
                  <i className="ri-tiktok-line text-white"></i>
                </a>
                <a
                  href="https://www.youtube.com/@FeynmanProjects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#8E44AD] rounded-full flex items-center justify-center hover:bg-[#7D3C98] transition-colors duration-300 cursor-pointer"
                >
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
    </div>
  );
}
