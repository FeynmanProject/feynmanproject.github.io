// Home page dengan JSX rapi dan tanpa kesalahan struktur
'use client';

import Link from 'next/link';
import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// ====== BG URLS (cukup ganti di sini) ======
const BG_URLS = {
  hero:          'https://i.imgur.com/BLGWdwV.jpeg',
  classes:       'https://i.imgur.com/rpK39tZ.jpeg',
  about:         'https://i.imgur.com/L4kyTrq.jpeg',
  features:      'https://i.imgur.com/oZiejJO.jpeg',
  testimonials:  'https://i.imgur.com/o31xDRj.jpeg',
  cta:           'https://i.imgur.com/Gqc2mNf.jpeg',
  footer:        'https://i.imgur.com/roN93QN.jpeg',
};

// Urutan section sesuai halaman kamu (biarkan saja):
const SECTION_ORDER: Array<keyof typeof BG_URLS> = [
  'hero',        // 1) Hero (section pertama)
  'classes',     // 2) Kelas Paling Populer
  'about',       // 3) Quick About
  'features',    // 4) Features
  'testimonials',// 5) Testimonials
  'cta',         // 6) CTA
];


interface ClassData {
  id: string;
  title: string;
  displayName: string;
  thumbnail: string;
  youtubePlaylist: string;
}

const classesData: ClassData[] = [
  {
    id: '1',
    title: 'Kalkulus 1',
    displayName: 'Class Of Calculus 1',
    thumbnail: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/a43973e7bae870e60689d4c381c1895d.png',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLExample1'
  },
  {
    id: '2',
    title: 'Logika',
    displayName: 'Class Of Logics',
    thumbnail: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/3e7b479d231acc835815185971300c1e.png',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLExample2'
  },
  {
    id: '3',
    title: 'Aljabar linear elementer',
    displayName: 'Class Of Linear Algebra 1',
    thumbnail: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/bd15f59f9d400fb76aac2c53153f5bcb.png',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLExample3'
  },
  {
    id: '4',
    title: '  Kalkulus 3',
    displayName: 'Class Of Calculus 3',
    thumbnail: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/c3fa38d5de461cc4981a1f4c7c4ac62c.png',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLExample4'
  },
  {
    id: '5',
    title: ' Kalkulus 2',
    displayName: 'Coming Soon',
    thumbnail: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/b1bb2aeefbd21b73a230330888a23751.png',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLExample5'
  },
  {
    id: '6',
    title: 'PDB',
    displayName: 'Coming Soon',
    thumbnail: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/304b64f5a0cd7cbf33560d8302c564b9.png',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLExample5'
  },
  {
    id: '7',
    title: 'Aljabar linear',
    displayName: 'Coming Soon',
    thumbnail: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/304b64f5a0cd7cbf33560d8302c564b9.png',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLExample5'
  },
  {
    id: '8',
    title: 'Matdis',
    displayName: 'Coming Soon',
    thumbnail: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/c8953865b10527e8a7ca5c46c3df0eee.png',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLExample5'
  },
  {
    id: '9',
    title: 'METODE NUMERIK',
    displayName: 'Coming Soon',
    thumbnail: 'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/304b64f5a0cd7cbf33560d8302c564b9.png',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLExample6'
  }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // State untuk kontrol pause testimonial
  const [isPaused, setIsPaused] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const pathname = usePathname();
  

const maxSlides = classesData.length - 2; // hanya 7 langkah scroll

const scrollToIndex = (index: number) => {
  if (carouselRef.current) {
    const cardWidth = 400;
    const gap = 24;
    const scrollPosition = index * (cardWidth + gap);
    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  }
};

const nextSlide = useCallback(() => {
  const nextIndex = (currentIndex + 1) % maxSlides;
  scrollToIndex(nextIndex);
}, [currentIndex, maxSlides]); // ✅ tambahkan maxSlides


const prevSlide = () => {
  const prevIndex = currentIndex === 0 ? maxSlides - 1 : currentIndex - 1;
  scrollToIndex(prevIndex);
};

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, nextSlide]);


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
  ];

// ====== AUTO-INJECT PER-SECTION BACKGROUND ======
useEffect(() => {
  // Helper overlay per section (gradient cantik + transparansi pas)
  const overlayFor = (name: keyof typeof BG_URLS): string => {
    switch (name) {
      case 'hero':
      case 'cta':
        return [
          'radial-gradient(900px 520px at 50% 35%, rgba(142,68,173,0.35), transparent 70%)',
          'radial-gradient(700px 380px at 90% 80%, rgba(165,105,189,0.18), transparent 65%)',
          'linear-gradient(180deg, rgba(4,4,6,0.88), rgba(4,4,6,0.88))',
        ].join(', ');
      case 'classes':
        return [
          'radial-gradient(1200px 520px at 12% 20%, rgba(199,155,226,0.16), transparent 65%)',
          'radial-gradient(1100px 520px at 88% 80%, rgba(165,105,189,0.14), transparent 65%)',
          'linear-gradient(180deg, rgba(10,10,12,0.86), rgba(10,10,12,0.86))',
        ].join(', ');
      case 'about':
        return [
          'radial-gradient(800px 500px at 15% 15%, rgba(142,68,173,0.28), transparent 60%)',
          'radial-gradient(900px 520px at 85% 85%, rgba(120,86,255,0.16), transparent 60%)',
          'linear-gradient(180deg, rgba(9,8,12,0.88), rgba(9,8,12,0.88))',
        ].join(', ');
      case 'features':
        return [
          'radial-gradient(800px 500px at 50% 40%, rgba(199,155,226,0.14), transparent 70%)',
          'linear-gradient(135deg, rgba(14,12,18,0.92), rgba(13,13,13,0.92))',
        ].join(', ');
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

  // Tambahkan background ke setiap <section> sesuai urutan
  const sections = Array.from(document.querySelectorAll('section'));
  SECTION_ORDER.forEach((name, idx) => {
    const url = BG_URLS[name];
    const el = sections[idx];
    if (!url || !el) return;
    if (el.querySelector('[data-fp-bg]')) return; // sudah dipasang

    el.style.position = 'relative';
    el.classList.add('overflow-hidden');

    // Layer: gradient overlay + image sekaligus
    const bg = document.createElement('div');
    bg.setAttribute('data-fp-bg', '');
    bg.className = 'fp-bg';
    bg.style.backgroundImage = `${overlayFor(name)}, url(${url})`;

    // Layer: grain tipis supaya premium (murah performa)
    const grain = document.createElement('div');
    grain.setAttribute('data-fp-bg-grain', '');
    grain.className = 'fp-bg-grain';

    el.prepend(bg);
    el.prepend(grain);
  });

  // Footer (elemen <footer> terakhir)
  const footer = document.querySelector('footer');
  if (footer && BG_URLS.footer && !footer.querySelector('[data-fp-bg]')) {
    footer.style.position = 'relative';
    footer.classList.add('overflow-hidden');

    const bg = document.createElement('div');
    bg.setAttribute('data-fp-bg', '');
    bg.className = 'fp-bg';
    bg.style.backgroundImage =
      `linear-gradient(180deg, rgba(9,8,10,0.90), rgba(9,8,10,0.90)), url(${BG_URLS.footer})`;

    const grain = document.createElement('div');
    grain.setAttribute('data-fp-bg-grain', '');
    grain.className = 'fp-bg-grain';

    footer.prepend(bg);
    footer.prepend(grain);
  }
}, []);

  

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
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#8E44AD] bg-clip-text text-transparent">
            Feynman Project
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
            Paham Matematika? Jelasin Sendiri, Bro!
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Kuasai konsep matematika lewat pemahaman yang mendalam. Kami bantu kamu belajar secara runtut — karena mengerti itu lebih penting daripada sekadar mengerjakan soal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/books" className="bg-[#8E44AD] hover:bg-[#7D3C98] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
              Jelajahi Buku Diktat Kami
            </Link>
            <Link href="/about" className="border-2 border-[#8E44AD] text-[#8E44AD] hover:bg-[#8E44AD] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>

<section id="kelas" className="py-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Kelas Paling Populer</h2>
      <p className="text-xl text-gray-400">Feynman Project hadir untuk membangun pemahaman matematika yang kuat</p>
    </div>

    <div className="relative">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-[#111111] hover:bg-[#222222] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
      >
        <i className="ri-arrow-left-line text-white text-xl"></i>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-[#111111]  hover:bg-[#222222] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
      >
        <i className="ri-arrow-right-line text-white text-xl"></i>
      </button>

      <div
        ref={carouselRef}
        className="overflow-x-auto scrollbar-hide px-16"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex space-x-6 pb-4">
          {classesData.map((classItem) => (
            <div
              key={classItem.id}
              className="flex-shrink-0 w-96 bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={classItem.thumbnail}
                  alt={classItem.displayName}
                  width={400}
                  height={240}
                  className="w-full h-full object-cover object-top"
                  unoptimized
                />

                
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

                <div className="absolute inset-0 flex items-center justify-start pl-6">
                  <h3 className="text-white text-2xl font-bold uppercase tracking-wide max-w-xs leading-tight">
                    {classItem.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="inline-block bg-black px-3 py-1 rounded-full mb-4">
                  <span className="text-white text-sm font-medium">{classItem.displayName}</span>
                </div>

                <a
                  href={classItem.youtubePlaylist}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#111111] hover:bg-[#222222] text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap flex items-center justify-center space-x-2"
                >
                  <i className="ri-play-circle-line text-xl"></i>
                  <span>Tonton Sekarang</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {[...Array(maxSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'
            }`}
          />
        ))}
        </div>
      </div>
  </div>
</section>

      {/* Quick About Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono whitespace-nowrap overflow-hidden border-r-2 border-[#8E44AD] animate-typing">
                Mengapa Feynman Project?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Nama platform ini terinspirasi dari Richard Feynman — seorang fisikawan peraih Nobel yang dikenal bukan hanya karena kejeniusannya, tetapi karena kemampuannya menjelaskan hal sulit dengan cara yang sederhana dan penuh rasa ingin tahu.

Kami mengadopsi prinsip belajar yang dikenal sebagai Teknik Feynman, yaitu metode belajar yang menekankan pemahaman mendalam melalui penjelasan yang sederhana. Berikut adalah langkah-langkah dalam teknik tersebut:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-[#1A1A1A] shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="w-8 h-8 bg-[#8E44AD] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Pilih Konsep</h3>
                    <p className="text-gray-400">Tentukan topik atau materi yang ingin kamu pahami lebih dalam.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-[#1A1A1A] shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="w-8 h-8 bg-[#8E44AD] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Ajarkan dengan Bahasa Sendiri</h3>
                    <p className="text-gray-400">Coba jelaskan topik tersebut seolah kamu mengajarkannya kepada anak kecil — sederhana, jujur, dan langsung.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-[#1A1A1A] shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="w-8 h-8 bg-[#8E44AD] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Temukan Titik Lemah</h3>
                    <p className="text-gray-400">Amati bagian mana yang sulit dijelaskan. Di situlah celah pemahamanmu.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-[#1A1A1A] shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="w-8 h-8 bg-[#8E44AD] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Sederhanakan & Gunakan Analogi</h3>
                    <p className="text-gray-400">Perbaiki penjelasanmu dengan kalimat yang lebih jelas, contoh konkret, atau analogi yang membantu.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full flex items-stretch">
              <div className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <Image 
                  src="https://i.imgur.com/keni2hu.jpeg"
                  alt="Feynman Technique Illustration"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-center"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Platform Kami?</h2>
            <p className="text-xl text-gray-400">Ubah cara Anda belajar dengan pendekatan yang telah terbukti efektif.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2A2A2A] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mb-6">
                <i className="ri-book-open-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Buku Diktat Pilihan</h3>
              <p className="text-gray-400">Jelajahi buku-buku pilihan kami — tersedia untuk dibaca dan dibeli, lengkap dengan materi dan pembahasan soal.</p>
            </div>
            
            <div className="bg-[#2A2A2A] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mb-6">
                <i className="ri-video-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Video Tutorials</h3>
              <p className="text-gray-400">Jelajahi video pembelajaran matematika yang disusun secara sistematis untuk membantu pemahaman konsep dari dasar hingga lanjutan.</p>
            </div>
            
            <div className="bg-[#2A2A2A] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mb-6">
                <i className="ri-community-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Komunitas Belajar</h3>
              <p className="text-gray-400">Terhubung dengan sesama pelajar dan pengajar yang memiliki semangat yang sama: mengajar, memahami, dan terus bertumbuh bersama.</p>
            </div>
          </div>
        </div>
      </section>

{/* Testimonials Section */}
<section className="py-20">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono text-white">
        <span className="block mx-auto w-fit typing-loop pr-1">
          Kata Mereka
        </span>
      </h2>
      <p className="text-xl text-gray-400">Ulasan dari pemirsa video kami.</p>
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
              // Toggle manual pause
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Belajar Bersama Kami?</h2>
          <p className="text-xl mb-8 opacity-90">
            Belajar dengan cara yang membuatmu benar-benar memahami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.youtube.com/@FeynmanProjects"
              className="bg-white text-[#8E44AD] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Mulai Belajar
            </a>
            <Link
              href="/social"
              className="border-2 border-white text-white hover:bg-white hover:text-[#8E44AD] px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Ikuti Kami
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

<style jsx global>{`
  /* --- yang sudah ada --- */
  .fp-bg {
    position: absolute;
    inset: 0;
    z-index: -2;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: saturate(1.05) contrast(1.02);
    will-change: transform;
  }
  .fp-bg-grain {
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0.07;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.4'/></svg>");
    background-size: 200px 200px;
    pointer-events: none;
  }


`}</style>
      
    </div>
  );
}
