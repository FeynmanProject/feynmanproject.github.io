// Home page with **background-only** luxury gradients per section
'use client';

import Link from 'next/link';
import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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
    thumbnail:
      'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/a43973e7bae870e60689d4c381c1895d.png',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLExample1',
  },
  {
    id: '2',
    title: 'Logika',
    displayName: 'Class Of Logics',
    thumbnail:
      'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/3e7b479d231acc835815185971300c1e.png',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLExample2',
  },
  {
    id: '3',
    title: 'Aljabar linear elementer',
    displayName: 'Class Of Linear Algebra 1',
    thumbnail:
      'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/bd15f59f9d400fb76aac2c53153f5bcb.png',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLExample3',
  },
  {
    id: '4',
    title: '  Kalkulus 3',
    displayName: 'Class Of Calculus 3',
    thumbnail:
      'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/c3fa38d5de461cc4981a1f4c7c4ac62c.png',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLExample4',
  },
  {
    id: '5',
    title: ' Kalkulus 2',
    displayName: 'Coming Soon',
    thumbnail:
      'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/b1bb2aeefbd21b73a230330888a23751.png',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLExample5',
  },
  {
    id: '6',
    title: 'PDB',
    displayName: 'Coming Soon',
    thumbnail:
      'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/304b64f5a0cd7cbf33560d8302c564b9.png',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLExample5',
  },
  {
    id: '7',
    title: 'Aljabar linear',
    displayName: 'Coming Soon',
    thumbnail:
      'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/304b64f5a0cd7cbf33560d8302c564b9.png',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLExample5',
  },
  {
    id: '8',
    title: 'Matdis',
    displayName: 'Coming Soon',
    thumbnail:
      'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/c8953865b10527e8a7ca5c46c3df0eee.png',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLExample5',
  },
  {
    id: '9',
    title: 'METODE NUMERIK',
    displayName: 'Coming Soon',
    thumbnail:
      'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/304b64f5a0cd7cbf33560d8302c564b9.png',
    youtubePlaylist: 'https://www.youtube.com/playlist?list=PLExample6',
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const pathname = usePathname();

  const maxSlides = classesData.length - 2;

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 400;
      const gap = 24;
      const scrollPosition = index * (cardWidth + gap);
      carouselRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  const nextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % maxSlides;
    scrollToIndex(nextIndex);
  }, [currentIndex, maxSlides]);

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
    { name: '-', role: '-', quote: '-' },
    { name: '-', role: '-', quote: '-' },
    { name: '-', role: '-', quote: '-' },
    { name: '-', role: '-', quote: '-' },
    { name: '-', role: '-', quote: '-' },
    { name: '-', role: '-', quote: '-' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0A0C] text-white antialiased selection:bg-[#8E44AD]/40">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-transparent [border-image:linear-gradient(90deg,rgba(142,68,173,0.45),transparent)_1] px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Logo Feynman" width={36} height={36} quality={100} priority className="object-contain" unoptimized />
              <div className="ml-2 flex items-center">
                <span className="text-xl font-bold text-[#C79BE2] font-sans leading-none tracking-wide drop-shadow-[0_2px_12px_rgba(142,68,173,0.35)]">Feynman Project</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#kelas" className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${pathname === '/' ? 'text-[#C79BE2]' : 'hover:text-[#C79BE2]'}`}>
              <i className="ri-graduation-cap-line text-lg" />
              <span>Our Classes</span>
            </Link>
            <Link href="/about" className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${pathname.startsWith('/about') ? 'text-[#C79BE2]' : 'hover:text-[#C79BE2]'}`}>
              <i className="ri-information-line text-lg" />
              <span>About</span>
            </Link>
            <Link href="/books" className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${pathname.startsWith('/books') ? 'text-[#C79BE2]' : 'hover:text-[#C79BE2]'}`}>
              <i className="ri-book-2-line text-lg" />
              <span>Books</span>
            </Link>
            <Link href="/social#contact" className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${pathname.startsWith('/social') ? 'text-[#C79BE2]' : 'hover:text-[#C79BE2]'}`}>
              <i className="ri-contacts-line text-lg" />
              <span>Contact Us</span>
            </Link>
            <Link href="/social" className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${pathname.startsWith('/social') ? 'text-[#C79BE2]' : 'hover:text-[#C79BE2]'}`}>
              <i className="ri-share-line text-lg" />
              <span>Social Media</span>
            </Link>
          </div>

          <button className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="ri-menu-line text-xl" />
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-2">
            <Link href="/#kelas" className="flex items-center space-x-2 py-2 hover:text-[#C79BE2] transition-colors duration-300 cursor-pointer">
              <i className="ri-graduation-cap-line" />
              <span>Our Classes</span>
            </Link>
            <Link href="/about" className="flex items-center space-x-2 py-2 hover:text-[#C79BE2] transition-colors duration-300 cursor-pointer">
              <i className="ri-information-line" />
              <span>About</span>
            </Link>
            <Link href="/books" className="flex items-center space-x-2 py-2 hover:text-[#C79BE2] transition-colors duration-300 cursor-pointer">
              <i className="ri-book-2-line" />
              <span>Books</span>
            </Link>
            <Link href="/social#contact" className="flex items-center space-x-2 py-2 hover:text-[#C79BE2] transition-colors duration-300 cursor-pointer">
              <i className="ri-contacts-line" />
              <span>Contact Us</span>
            </Link>
            <Link href="/social" className="flex items-center space-x-2 py-2 hover:text-[#C79BE2] transition-colors duration-300 cursor-pointer">
              <i className="ri-share-line" />
              <span>Social Media</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO – Background only luxury layers */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#0C0B10_0%,#1A1030_50%,#0B0A0C_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_600px_at_50%_45%,rgba(142,68,173,0.22),transparent_65%)]" />
        <div className="absolute -top-32 -left-40 w-[700px] h-[700px] -z-10 rounded-full opacity-25 blur-3xl bg-[radial-gradient(circle_at_center,rgba(165,105,189,0.6),transparent_60%)]" />
        <div className="absolute -bottom-40 -right-32 w-[650px] h-[650px] -z-10 rounded-full opacity-20 blur-3xl bg-[radial-gradient(circle_at_center,rgba(103,78,167,0.55),transparent_60%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute inset-0 -z-10 opacity-[0.045] mix-blend-soft-light bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_1px,transparent_1px,transparent_2px)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#E9D5FF] to-[#C79BE2] bg-clip-text text-transparent drop-shadow-[0_6px_24px_rgba(142,68,173,0.3)]">Feynman Project</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200/90 font-light">Paham Matematika? Jelasin Sendiri, Bro!</p>
          <p className="text-lg md:text-xl mb-12 text-gray-300/90 max-w-3xl mx-auto leading-relaxed">Kuasai konsep matematika lewat pemahaman yang mendalam. Kami bantu kamu belajar secara runtut — karena mengerti itu lebih penting daripada sekadar mengerjakan soal.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/books" className="bg-gradient-to-r from-[#8E44AD] to-[#9B59B6] hover:from-[#9B59B6] hover:to-[#8E44AD] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-[0_10px_30px_rgba(142,68,173,0.35)]">Jelajahi Buku Diktat Kami</Link>
            <Link href="/about" className="border-2 border-transparent bg-clip-padding [background:linear-gradient(#0C0B10,#0C0B10),linear-gradient(90deg,#8E44AD,transparent)] [background-origin:border-box] [background-clip:padding-box,border-box] text-[#C79BE2] hover:text-white hover:[background:linear-gradient(#201428,#201428),linear-gradient(90deg,#A569BD,#8E44AD)] px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap">Pelajari Lebih Lanjut</Link>
          </div>
        </div>
      </section>

      {/* OUR CLASSES – Background enhanced only */}
      <section id="kelas" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#0D0D0D_0%,#1A0D1F_55%,#0D0D0D_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1100px_500px_at_12%_20%,rgba(199,155,226,0.12),transparent_65%),radial-gradient(1000px_500px_at_88%_82%,rgba(165,105,189,0.12),transparent_65%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.04] bg-[linear-gradient(to_right,rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:56px_56px]" />

        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-[0_4px_18px_rgba(142,68,173,0.25)]">Kelas Paling Populer</h2>
            <p className="text-xl text-gray-300">Feynman Project hadir untuk membangun pemahaman matematika yang kuat</p>
          </div>

          <div className="relative">
            <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#111111]/70 hover:bg-[#1C1C1C] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer backdrop-blur-md border border-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.4)]" aria-label="Previous">
              <i className="ri-arrow-left-line text-white text-xl" />
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#111111]/70 hover:bg-[#1C1C1C] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer backdrop-blur-md border border-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.4)]" aria-label="Next">
              <i className="ri-arrow-right-line text-white text-xl" />
            </button>

            <div ref={carouselRef} className="overflow-x-auto scrollbar-hide px-16" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="flex space-x-6 pb-4">
                {classesData.map((classItem) => (
                  <div key={classItem.id} className="flex-shrink-0 w-96 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03]">
                    <div className="p-[1px] rounded-2xl bg-gradient-to-br from-[#8E44AD] via-transparent to-[#A569BD]">
                      <div className="rounded-2xl bg-gradient-to-br from-[#151515] via-[#1A1A1A] to-[#121018] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_50px_rgba(0,0,0,0.45)]">
                        <div className="relative h-60 overflow-hidden">
                          <Image src={classItem.thumbnail} alt={classItem.displayName} width={400} height={240} className="w-full h-full object-cover object-top" unoptimized />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-start pl-6">
                            <h3 className="text-white text-2xl font-bold uppercase tracking-wide max-w-xs leading-tight drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)]">{classItem.title}</h3>
                          </div>
                        </div>
                        <div className="p-6">
                          <span className="inline-block bg-gradient-to-r from-[#0E0C11] to-[#1A131F] border border-white/5 px-3 py-1 rounded-full mb-4 text-white/90 text-sm font-medium shadow-[0_6px_20px_rgba(142,68,173,0.25)]">{classItem.displayName}</span>
                          <a href={classItem.youtubePlaylist} target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-[#141217] to-[#1D1623] hover:from-[#1D1623] hover:to-[#24182B] border border-white/10 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(142,68,173,0.25)]">
                            <i className="ri-play-circle-line text-xl" />
                            <span>Tonton Sekarang</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(maxSlides)].map((_, index) => (
                <button key={index} onClick={() => scrollToIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex ? 'bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.15)] scale-110' : 'bg-gray-500/70 hover:bg-gray-400'}`} aria-label={`Go to slide ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ABOUT – Background luxury only */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#120C1A_0%,#1A1030_55%,#0D0D0D_100%)]" />
        <div className="absolute -top-48 -left-48 w-[700px] h-[700px] -z-10 rounded-full opacity-30 blur-3xl bg-[radial-gradient(circle_at_center,rgba(142,68,173,0.6),transparent_60%)]" />
        <div className="absolute -bottom-44 -right-44 w-[680px] h-[680px] -z-10 rounded-full opacity-25 blur-3xl bg-[radial-gradient(circle_at_center,rgba(165,105,189,0.55),transparent_60%)]" />
        <div className="absolute inset-x-0 top-1/3 h-64 -z-10 opacity-[0.08] bg-[radial-gradient(60%_120%_at_50%_50%,#C79BE2,transparent_70%)]" />

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono whitespace-nowrap overflow-hidden border-r-2 border-[#8E44AD] animate-typing">Mengapa Feynman Project?</h2>
              <p className="text-lg text-gray-200/90 mb-6 leading-relaxed">Nama platform ini terinspirasi dari Richard Feynman — seorang fisikawan peraih Nobel yang dikenal bukan hanya karena kejeniusannya, tetapi karena kemampuannya menjelaskan hal sulit dengan cara yang sederhana dan penuh rasa ingin tahu.\n\nKami mengadopsi prinsip belajar yang dikenal sebagai Teknik Feynman, yaitu metode belajar yang menekankan pemahaman mendalam melalui penjelasan yang sederhana. Berikut adalah langkah-langkah dalam teknik tersebut:</p>

              <div className="space-y-4">
                {[1, 2, 3, 4].map((num, idx) => (
                  <div key={num} className="flex items-start gap-3 p-[1px] rounded-xl bg-gradient-to-r from-[#8E44AD] via-transparent to-[#A569BD] shadow-[0_14px_40px_rgba(142,68,173,0.25)]">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#16121A]/90 backdrop-blur-md">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#8E44AD] to-[#A569BD] rounded-full flex items-center justify-center flex-shrink-0 mt-1"><span className="text-white font-bold text-sm">{num}</span></div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{['Pilih Konsep','Ajarkan dengan Bahasa Sendiri','Temukan Titik Lemah','Sederhanakan & Gunakan Analogi'][idx]}</h3>
                        <p className="text-gray-300/90">{['Tentukan topik atau materi yang ingin kamu pahami lebih dalam.','Coba jelaskan topik tersebut seolah kamu mengajarkannya kepada anak kecil — sederhana, jujur, dan langsung.','Amati bagian mana yang sulit dijelaskan. Di situlah celah pemahamanmu.','Perbaiki penjelasanmu dengan kalimat yang lebih jelas, contoh konkret, atau analogi yang membantu.'][idx]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-full flex items-stretch">
              <div className="w-full rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(142,68,173,0.25)] hover:shadow-[0_40px_100px_rgba(142,68,173,0.35)] transition-all duration-300 hover:scale-105">
                <Image src="https://i.imgur.com/keni2hu.jpeg" alt="Feynman Technique Illustration" width={800} height={800} className="w-full h-full object-cover object-center" unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES – Background only */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#151218_0%,#1C0F25_55%,#0D0D0D_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_500px_at_50%_40%,rgba(199,155,226,0.12),transparent_70%)]" />

        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-[0_6px_22px_rgba(142,68,173,0.25)]">Mengapa Memilih Platform Kami?</h2>
            <p className="text-xl text-gray-300">Ubah cara Anda belajar dengan pendekatan yang telah terbukti efektif.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'ri-book-open-line', title: 'Buku Diktat Pilihan', desc: 'Jelajahi buku-buku pilihan kami — tersedia untuk dibaca dan dibeli, lengkap dengan materi dan pembahasan soal.' },
              { icon: 'ri-video-line', title: 'Video Tutorials', desc: 'Jelajahi video pembelajaran matematika yang disusun secara sistematis untuk membantu pemahaman konsep dari dasar hingga lanjutan.' },
              { icon: 'ri-community-line', title: 'Komunitas Belajar', desc: 'Terhubung dengan sesama pelajar dan pengajar yang memiliki semangat yang sama: mengajar, memahami, dan terus bertumbuh bersama.' },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl p-[1px] bg-gradient-to-br from-[#8E44AD] via-transparent to-[#A569BD] shadow-[0_16px_60px_rgba(142,68,173,0.25)]">
                <div className="bg-gradient-to-t from-[#2A2A2A] to-[#1E1E1E] rounded-2xl p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8E44AD] to-[#A569BD] rounded-full flex items-center justify-center mb-6">
                    <i className={`${c.icon} text-2xl text-white`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{c.title}</h3>
                  <p className="text-gray-300/90">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS – Background only aurora */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_500px_at_10%_20%,rgba(142,68,173,0.18),transparent_60%),radial-gradient(900px_520px_at_90%_80%,rgba(165,105,189,0.18),transparent_60%),radial-gradient(1000px_540px_at_50%_60%,rgba(120,86,255,0.12),transparent_60%)]" />

        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono text-white"><span className="block mx-auto w-fit typing-loop pr-1">Kata Mereka</span></h2>
            <p className="text-xl text-gray-300/90">Ulasan dari pemirsa video kami.</p>
          </div>

          <div className="overflow-hidden">
            <div className={`testimonial-track ${isPaused ? 'paused' : ''}`} onMouseEnter={() => { if (!manualPause) setIsPaused(true); }} onMouseLeave={() => { if (!manualPause) setIsPaused(false); }}>
              {[...testimonials, ...testimonials, ...testimonials].map((t, index) => (
                <div key={index} className="min-w-[300px] max-w-sm mr-4 flex-shrink-0 p-[1px] rounded-2xl bg-gradient-to-br from-[#8E44AD] via-transparent to-[#A569BD]" onClick={() => { const m = !manualPause; setManualPause(m); setIsPaused(m); }}>
                  <div className="bg-[#2A2A2A] p-6 rounded-2xl shadow-xl cursor-pointer">
                    <div className="mb-4">
                      <h4 className="font-semibold">{t.name}</h4>
                      <p className="text-gray-400 text-sm">{t.role}</p>
                    </div>
                    <p className="text-gray-300 italic">“{t.quote}”</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA – Background only */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#8E44AD_0%,#9B59B6_50%,#A569BD_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_420px_at_50%_50%,rgba(255,255,255,0.16),transparent_70%)]" />

        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)]">Siap Belajar Bersama Kami?</h2>
          <p className="text-xl mb-8 opacity-90">Belajar dengan cara yang membuatmu benar-benar memahami.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://www.youtube.com/@FeynmanProjects" className="bg-white text-[#8E44AD] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap shadow-[0_14px_40px_rgba(0,0,0,0.2)]">Mulai Belajar</a>
            <Link href="/social" className="border-2 border-white text-white hover:bg-white hover:text-[#8E44AD] px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap">Ikuti Kami</Link>
          </div>
        </div>
      </section>

      {/* FOOTER – Background only */}
      <footer className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#09080A_0%,#120C1A_60%,#0D0D0D_100%)]" />
        <div className="absolute top-0 inset-x-0 h-px -z-10 bg-[linear-gradient(90deg,rgba(142,68,173,0.55),transparent)]" />

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-[#C79BE2] mb-4 drop-shadow-[0_6px_18px_rgba(142,68,173,0.35)]" style={{ fontFamily: 'var(--font-pacifico)' }}>Feynman Project</div>
              <p className="text-gray-300/90 leading-relaxed">Belajar menjadi bermakna saat kita mampu mengajarkannya kepada orang lain.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">About Us</Link>
                <Link href="/books" className="block text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Our Books</Link>
                <Link href="/social" className="block text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Social Media</Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/feynmanprojects/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-[#8E44AD] to-[#A569BD] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity duration-300 cursor-pointer"><i className="ri-instagram-line text-white" /></a>
                <a href="https://www.tiktok.com/@feynmanproject" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-[#8E44AD] to-[#A569BD] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity duration-300 cursor-pointer"><i className="ri-tiktok-line text-white" /></a>
                <a href="https://www.youtube.com/@FeynmanProjects" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-[#8E44AD] to-[#A569BD] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity duration-300 cursor-pointer"><i className="ri-youtube-line text-white" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 Feynman Project. Content is licensed under Creative Commons BY-NC-SA 4.0.</p>
          </div>
        </div>
      </footer>

      {/* Utilities for testimonial marquee (unchanged) */}
      <style jsx global>{`
        .testimonial-track { display:flex; gap:1rem; animation: fp-marquee 35s linear infinite; will-change: transform; }
        .testimonial-track.paused { animation-play-state: paused; }
        @keyframes fp-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        .animate-typing { width: 18ch; white-space: nowrap; overflow: hidden; animation: typing 3.6s steps(18), blink .9s step-end infinite alternate; }
        @keyframes typing { from { width: 0; } }
        @keyframes blink { 50% { border-color: transparent; } }
      `}</style>
    </div>
  );
}
